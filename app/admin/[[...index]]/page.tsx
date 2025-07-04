"use client";
 
import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config"; // Adjust the path as needed

export default function IndexPage() {
    return <NextStudio config={config}/>;
}