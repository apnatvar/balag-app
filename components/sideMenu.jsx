"use client";
// This file is used to create a side menu with a contact form.

import React, { useState } from "react";
import ContactForm from "./contactForm";
import "../app/styles/components.css";

export default function SideMenu() {
    const [isMenuVisible, setMenuVisble] = useState(false);
    const [showForm, setShowForm] = useState(false);

    const toggleMenu = () => setMenuVisble(!isMenuVisible);

    const openForm = () => {
        setShowForm(true);
        toggleMenu();
    }
    const closeForm = () => setShowForm(false);

return (
    <>
    <nav className="side-menu">
        <button onClick={toggleMenu} className="menu-toggle">☰ Menu</button>
        <ul className={`menu-list ${isMenuVisible ? 'open' : 'closed'}`}>
        <li><a href="/">Home</a></li>
        <li><a href="#section2">Section 2</a></li>
        <li><a href="#section7">Section 7</a></li>
        <li><a onClick={openForm}>Contact Us</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/auth/login">Admin</a></li>
        </ul>
    </nav>

    <ContactForm isFormVisible={showForm} onClose={closeForm} />
    </>
    );
}
  
