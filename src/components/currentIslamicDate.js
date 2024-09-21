import React, { useEffect, useState } from 'react';

function CurrentIslamicDate() {
    const [islamicDate, setIslamicDate] = useState(null);
    const [error, setError] = useState(null);

    // Function to fetch the Hijri date
    const fetchIslamicDate = async (gregorianDate) => {
        try {
            const response = await fetch(`https://api.aladhan.com/v1/gToH/${gregorianDate}`);
            const data = await response.json();
            if (data && data.data && data.data.hijri) {
                setIslamicDate(data.data.hijri);
            } else {
                setError("Unable to fetch Islamic date.");
            }
        } catch (err) {
            console.error('Error fetching Islamic date:', err);
            setError('Error fetching Islamic date');
        }
    };

    // Get the user's current Gregorian date in DD-MM-YYYY format
    const getCurrentDate = () => {
        const date = new Date();
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // January is 0
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    };

    // Get user's current timezone
    const getUserTimezone = () => {
        return Intl.DateTimeFormat().resolvedOptions().timeZone;
    };

    // Fetch the Hijri date when the component mounts
    useEffect(() => {
        const currentDate = getCurrentDate();
        fetchIslamicDate(currentDate);
    }, []);

    return (
        <div className="islamic-date-container">
            <h2>Current Islamic Date</h2>
            {error && <p className="error">{error}</p>}
            {islamicDate ? (
                <div className="islamic-date-box">
                    <p><strong>Date (Hijri):</strong> {islamicDate.date}</p>
                    <p><strong>Month (Arabic):</strong> {islamicDate.month.ar}</p>
                    <p><strong>Month (English):</strong> {islamicDate.month.en}</p>
                    <p><strong>Year (Hijri):</strong> {islamicDate.year}</p>
                </div>
            ) : (
                <p>Loading Islamic Date...</p>
            )}
        </div>
    );
}

export default CurrentIslamicDate;
