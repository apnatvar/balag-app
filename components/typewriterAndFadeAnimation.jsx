"use client";
// This file is used to create a typewriter effect with fade-in animation for text.
import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from 'framer-motion';

export default function TypewriterAndFadeAnimation({ text, speed = 300, nameOfClass}){
    const [displayedText, setDisplayedText] = useState('');
    const ref = useRef();
    const isInView = useInView(ref, { once: true });

    useEffect(() => {  
        if (!isInView) return;
        let index = -1;
        const interval = setInterval(() => {
        setDisplayedText((prev) => prev + text[index]);
        index++;
        if (index >= text.length-1) clearInterval(interval);
        }, speed);

        return () => clearInterval(interval);
    }, [isInView]);

    return (
        <motion.h2
        ref={ref} 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 4 }}
        viewport={{ once: true }}
        className={nameOfClass}
        >
        {displayedText}
        </motion.h2>
    );
}