import React, { useState } from 'react';

const AccommodationBooking = ({ onSubmit }) => {
  const [accDetails, setAccDetails] = useState({
    location: '',
    checkIn: '',
    checkOut: '',
    guests: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAccDetails((prev) => ({ ...prev, [name]: value }));
  };

  const submit = (e) => {
    e.preventDefault();
    onSubmit && onSubmit({ type: 'accommodation', ...accDetails });
  };

  return (
    <form className="booking-form" onSubmit={submit}>
      <h2>Book Accommodation</h2>
      <label>
        Location:
        <input
          type="text"
          name="location"
          value={accDetails.location}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Check-in Date:
        <input
          type="date"
          name="checkIn"
          value={accDetails.checkIn}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Check-out Date:
        <input
          type="date"
          name="checkOut"
          value={accDetails.checkOut}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Guests:
        <input
          type="number"
          name="guests"
          min="1"
          value={accDetails.guests}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Search Rooms</button>
    </form>
  );
};

export default AccommodationBooking;
