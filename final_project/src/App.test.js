import { render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from './BookingForm';
/*
import BookingPage from './BookingPage';

test('Renders the BookingForm heading', () => {
    render(<BookingPage />);
    const headingElement = screen.getByText("Book a Table");
    expect(headingElement).toBeInTheDocument();
})
    */

// Main.test.js or reducer.test.js
/*
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
*/

//step 1
const availableTimes = ['17:00', '18:00'];
const dispatch = jest.fn();
const submitForm = jest.fn();

test('renders form inputs with correct HTML5 validation attributes', () => {
  render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />);

  const dateInput = screen.getByLabelText(/choose date/i);
  const timeSelect = screen.getByLabelText(/choose time/i);
  const guestsInput = screen.getByLabelText(/number of guests/i);
  const occasionSelect = screen.getByLabelText(/occasion/i);

  expect(dateInput).toBeRequired();
  expect(dateInput).toHaveAttribute('type', 'date');

  expect(timeSelect).toBeRequired();

  expect(guestsInput).toBeRequired();
  expect(guestsInput).toHaveAttribute('min', '1');
  expect(guestsInput).toHaveAttribute('max', '10');

  expect(occasionSelect).toBeRequired();
});


//step 2
import { fireEvent } from '@testing-library/react';
import BookingPage from './BookingPage';

test('submit button is disabled with invalid form inputs', () => {
  render(<BookingForm availableTimes={['17:00']} dispatch={() => {}} submitForm={() => {}} />);

  const submitButton = screen.getByRole('button', { name: /make your reservation/i });

  expect(submitButton).toBeDisabled();
});

test('submit button is enabled with valid form inputs', () => {
  render(<BookingForm availableTimes={['17:00']} dispatch={() => {}} submitForm={() => {}} />);

  fireEvent.change(screen.getByLabelText(/choose date/i), {
    target: { value: '2025-08-01' },
  });

  fireEvent.change(screen.getByLabelText(/choose time/i), {
    target: { value: '17:00' },
  });

  fireEvent.change(screen.getByLabelText(/number of guests/i), {
    target: { value: '4' },
  });

  fireEvent.change(screen.getByLabelText(/occasion/i), {
    target: { value: 'Birthday' },
  });

  const submitButton = screen.getByRole('button', { name: /make your reservation/i });

  expect(submitButton).toBeEnabled();
});