import React, { useState, useEffect } from 'react';
import '../index.css'; // Import your CSS file

const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useState(false);

    // Toggle dark mode
    const toggleDarkMode = () => {
        setDarkMode((prevMode) => !prevMode);
    };

    // Apply dark mode class to the body
    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [darkMode]);

    return (
        <div>
            {/* <button className="darkmode-button" onClick={toggleDarkMode}>
                <i className={`bi ${darkMode ? 'bi-sun-fill' : 'bi-moon-fill'}`}></i>
            </button> */}
            <button
                className="ml-1 p-2 w-15 h-15 rounded-full focus:outline-none bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
                onClick={toggleDarkMode}
            >
                {darkMode ? '🌙 ' : '☀️ '}
            </button>
        </div>
    );
};

export default DarkModeToggle;
