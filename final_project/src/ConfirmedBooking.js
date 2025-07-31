import React from 'react';

function ConfirmedBooking() {
    const bookingData = JSON.parse(localStorage.getItem('bookingData'));
    return (
        <main class='confirmed'>
            <h1>Booking Confirmed</h1>
            <box>
                <p><strong>Date:</strong> {bookingData.date}</p>
                <p><strong>Time:</strong> {bookingData.time}</p>
                <p><strong>Guests:</strong> {bookingData.guests}</p>
                <p><strong>Occasion:</strong> {bookingData.occasion}</p>
            </box>
            <p>Thanks for the reservation!</p>
        </main>
    );
}

export default ConfirmedBooking;