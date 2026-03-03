import React from 'react';
import FlightBooking from './FlightBooking';
import AccommodationBooking from './AccommodationBooking';

const CombinedBooking = () => {
  const handleSubmit = (data) => {
    // this would normally forward to backend or context
    console.log('Booking data submitted', data);
    alert(`Submitted ${data.type} booking`);
  };

  return (
    <div className="combined-booking">
      <FlightBooking onSubmit={handleSubmit} />
      <AccommodationBooking onSubmit={handleSubmit} />
    </div>
  );
};

export default CombinedBooking;
