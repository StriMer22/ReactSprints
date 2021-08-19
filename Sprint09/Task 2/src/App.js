import React from 'react';
import './App.css';
import First from "./First";

export default function App() {

    const list = `Animals
        Anime
        Anti-Malware
        Art Design
        Books
        Business
        Calendar
        Cloud Storage
        File Sharing
        Animals
        Continuous Integration
        Cryptocurrency`
    const arr = list.split('\n        ').map(el=>el.toLowerCase())

    return (
        <div>
            Some List:
            <First content={arr} />
        </div>
    );
}