import React, { useState } from 'react';

const FlightBooking = ({ onSubmit }) => {
  const [flightDetails, setFlightDetails] = useState({
    from: '',
    to: '',
    departDate: '',
    returnDate: '',
    passengers: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFlightDetails((prev) => ({ ...prev, [name]: value }));
  };

  const submit = (e) => {
    e.preventDefault();
    onSubmit && onSubmit({ type: 'flight', ...flightDetails });
  };

  return (
    <form className="booking-form" onSubmit={submit}>
      <h2>Book a Flight</h2>
      <label>
        From:
        <input
          type="text"
          name="from"
          value={flightDetails.from}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        To:
        <input
          type="text"
          name="to"
          value={flightDetails.to}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Departure Date:
        <input
          type="date"
          name="departDate"
          value={flightDetails.departDate}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Return Date:
        <input
          type="date"
          name="returnDate"
          value={flightDetails.returnDate}
          onChange={handleChange}
        />
      </label>
      <label>
        Passengers:
        <input
          type="number"
          name="passengers"
          min="1"
          value={flightDetails.passengers}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Search Flights</button>
    </form>
  );
};

export default FlightBooking;
