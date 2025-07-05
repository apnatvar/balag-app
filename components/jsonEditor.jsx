'use client';
import React, { useEffect, useState } from "react";

export default function JSONEditor() {
  const [jsonData, setJsonData] = useState({});
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/json/partial-data?section=about")
      .then((res) => res.json())
      .then((data) => {
        setJsonData(data);
        setFormData(flattenJson(data));
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load JSON:", err);
        setLoading(false);
      });
  }, []);

  const flattenJson = (obj, parent = "") => {
    let result = {};
    for (const key in obj) {
      const path = parent
        ? Array.isArray(obj) ? `${parent}[${key}]` : `${parent}.${key}`
        : key;
      const value = obj[key];
      if (typeof value === "object" && value !== null) {
        result = { ...result, ...flattenJson(value, path) };
      } else {
        result[path] = value;
      }
    }
    return result;
  };

  const unflattenJson = (flat) => {
    const result = {};
    for (const flatKey in flat) {
      const value = parseValue(flat[flatKey]);
      const keys = flatKey.replace(/\]/g, "").split(/[\.\[]/g);
      let current = result;
      keys.forEach((k, i) => {
        const isLast = i === keys.length - 1;
        const isIndex = /^\d+$/.test(k);
        if (isLast) {
          if (isIndex) {
            if (!Array.isArray(current)) current = [];
            current[k] = value;
          } else {
            current[k] = value;
          }
        } else {
          if (!current[k]) {
            current[k] = /^\d+$/.test(keys[i + 1]) ? [] : {};
          }
          current = current[k];
        }
      });
    }
    return result;
  };

  const parseValue = (val) => {
    if (val === "true") return true;
    if (val === "false") return false;
    if (!isNaN(val)) return Number(val);
    return val;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedJson = unflattenJson(formData);
    try {
      const res = await fetch("http://localhost:5000/json/data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedJson),
      });
      const result = await res.json();
      alert(result.message || result.error || "Updated successfully");
      setJsonData(updatedJson);
    } catch (err) {
      console.error("Failed to update JSON:", err);
      alert("Error updating JSON");
    }
  };

  const capitalize = (str) =>
    str.charAt(0).toUpperCase() + str.slice(1);

  const renderGroupedInputs = () => {
    const grouped = {};
    for (const path in formData) {
      const segments = path.replace(/\]/g, "").split(/[\.\[]/g);
      const keyPath = segments.slice(0, -1).join(".");
      if (!grouped[keyPath]) grouped[keyPath] = [];
      grouped[keyPath].push({ path, key: segments.at(-1), value: formData[path] });
    }

    const sortedKeys = Object.keys(grouped).sort((a, b) => a.localeCompare(b));
    let prevDepth = 0;

    return sortedKeys.map((groupPath, i) => {
      const depth = groupPath === "" ? 2 : groupPath.split(".").length + 1;
      const entries = grouped[groupPath];
      const subtitle = groupPath.split(".").at(-1);

      return (
        <div key={groupPath} className="json-section">
          {groupPath !== "" && (
            React.createElement(`h${Math.min(depth, 5)}`, {}, capitalize(subtitle))
          )}
          {entries.map(({ path, key, value }) => (
            <div key={path} className="json-entry">
              <label htmlFor={path}>{key}:</label>
              <input
                type="text"
                id={path}
                name={path}
                value={value}
                onChange={handleInputChange}
              />
            </div>
          ))}
        </div>
      );
    });
  };

  if (loading) return <p>Loading JSON...</p>;

  return (
    <div>
      <h1>JSON Data Viewer & Editor</h1>
      <form onSubmit={handleSubmit}>
        {renderGroupedInputs()}
        <button type="submit">Save Changes</button>
      </form>
      {/* <h3>Raw JSON (Preview)</h3> */}
      {/* <pre>{JSON.stringify(unflattenJson(formData), null, 2)}</pre> */}
    </div>
  );
}
