import { render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from './BookingForm';

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Book a Table");
    expect(headingElement).toBeInTheDocument();
})

// Main.test.js or reducer.test.js

import { describe, expect, test } from '@jest/globals';

// Import the functions to test
import { initializeTimes, updateTimes } from './BookingPage'; // Adjust path if needed

// Mock defaultTimes (must match what's used in Main.js)
const defaultTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

describe('initializeTimes', () => {
  test('should return the default list of times', () => {
    const result = initializeTimes();
    expect(result).toEqual(defaultTimes);
  });
});

describe('updateTimes', () => {
  test('should return the same defaultTimes list regardless of action.date', () => {
    const currentState = defaultTimes;
    const action = { type: 'UPDATE_TIMES', date: '2025-08-01' };
    const result = updateTimes(currentState, action);
    expect(result).toEqual(defaultTimes); // same as state now, will change later
  });

  test('should return current state if action type is unrecognized', () => {
    const currentState = defaultTimes;
    const action = { type: 'UNKNOWN_ACTION' };
    const result = updateTimes(currentState, action);
    expect(result).toBe(currentState); // should return state untouched
  });
});