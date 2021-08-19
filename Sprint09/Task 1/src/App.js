import React from 'react';
import './App.css';

export default function App() {
    let key = 1
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
    const arr = list.split('\n        ').map(el => {
        key++
        return <li key={key}>{el}</li>
    })
    return (
        <div>
            Some List:
            <ul>
                {arr}
            </ul>
        </div>
    );
}
