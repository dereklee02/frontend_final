import React from 'react';

const BookingForm = ({availableTimes, dispatch, submitForm}) => {
    const [date, setDate] = React.useState('');
    const [time, setTime] = React.useState('');
    const [guests, setGuests] = React.useState(1);
    const [occasion, setOccasion] = React.useState('None');

    const handleDateChange = (e) => {
        const newDate = e.target.value;
        setDate(newDate);
        dispatch({ type: 'UPDATE_TIMES', date: newDate }); // Include date for future logic
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = { date, time, guests, occasion };
        submitForm(formData);
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
            <p>Selected Data (for testing): {date}, {time}, {guests}, {occasion}, Times Available: {availableTimes}</p>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={date} onChange={handleDateChange}/>
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" value={time} onChange={(e) => {setTime(e.target.value)}}>
                <option value="">Select Time</option>
                    {availableTimes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                ))}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e) => {setGuests(e.target.value)}}/>
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange={(e) => {setOccasion(e.target.value)}}>
                <option>None</option>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Your Reservation" />
        </form>
    );
}

export default BookingForm;