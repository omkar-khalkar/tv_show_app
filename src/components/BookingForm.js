import React, { useState } from 'react';

const BookingForm = ({ showName, showDetails }) => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [numTickets, setNumTickets] = useState(1);

  const handleBooking = () => {
    console.log('Booking Details:', {
      userName,
      email,
      numTickets,
      showName,
      showDetails,
    });
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Book Ticket for {showName}</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-600">Name:</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600">Number of Tickets:</label>
          <input
            type="number"
            value={numTickets}
            onChange={(e) => setNumTickets(e.target.value)}
            min="1"
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <button
          type="button"
          onClick={handleBooking}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Book Now
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
