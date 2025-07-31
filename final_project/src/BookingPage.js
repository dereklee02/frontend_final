import React, { useReducer } from 'react';
import BookingForm from './BookingForm';
import { useNavigate } from 'react-router-dom';

function updateTimes(state, action) {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return window.fetchAPI(new Date(action.date));
    default:
      return state;
  }
}

function initializeTimes() {
  const today = new Date();
  return window.fetchAPI(today);
}

function BookingPage() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();

  const submitForm = (formData) => {
    const success = window.submitAPI(formData);
    if (success) {
      navigate('/confirmed');
      localStorage.setItem('bookingData', JSON.stringify(formData));
    } else {
      alert('Something went wrong. Try again.');
    }
  };

  return (
    <main>
      <h1>Book a Table</h1>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </main>
  );
}

export default BookingPage;