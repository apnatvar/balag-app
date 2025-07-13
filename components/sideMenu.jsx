'use client';
import React, { useState } from "react";
import ContactForm from "./contactForm";
import "../app/styles/components.css";
import Link from "next/link";

export default function SideMenu({adminURL}) {
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
        <li><Link href="/" className="list-content">Home</Link></li>
        <li><Link href="#section2" className="list-content">Section 2</Link></li>
        <li><Link href="#section7" className="list-content">Section 7</Link></li>
        <li><Link onClick={openForm} className="list-content">Contact Us</Link></li>
        <li><Link href="/about" className="list-content">About Us</Link></li>
        <li><Link href={adminURL} className="list-content">Admin</Link></li>
        </ul>
    </nav>

    <ContactForm isFormVisible={showForm} onClose={closeForm} />
    </>
    );
}
  
