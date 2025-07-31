import React from 'react';

function ConfirmedBooking() {
    const bookingData = JSON.parse(localStorage.getItem('bookingData'));
    return (
        <main>
            <h1>Booking Confirmed</h1>
            <h2>Details:</h2>
            <p><strong>Date:</strong> {bookingData.date}</p>
            <p><strong>Time:</strong> {bookingData.time}</p>
            <p><strong>Guests:</strong> {bookingData.guests}</p>
            <p><strong>Occasion:</strong> {bookingData.occasion}</p>
            <p>Thanks for the reservation!</p>
        </main>
    );
}

export default ConfirmedBooking;