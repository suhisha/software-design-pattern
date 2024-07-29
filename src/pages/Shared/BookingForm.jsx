import React, { useState } from 'react';

const BookingForm = () => {
  const [eventName, setEventName] = useState('');
  const [organizerName, setOrganizerName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Show the modal with booking details
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="booking-details-page container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Booking Portal</h1>
      <form onSubmit={handleSubmit} className="space-y-4 flex flex-col items-center">
        <div className="w-full max-w-md">
          <label className="block text-lg font-medium mb-2">Event Name</label>
          <input
            type="text"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            className="p-2 border border-gray-300 rounded w-full text-black"
            required
          />
        </div>
        <div className="w-full max-w-md">
          <label className="block text-lg font-medium mb-2">Organizer Name</label>
          <input
            type="text"
            value={organizerName}
            onChange={(e) => setOrganizerName(e.target.value)}
            className="p-2 border border-gray-300 rounded w-full text-black"
            required
          />
        </div>
        <div className="w-full max-w-md">
          <label className="block text-lg font-medium mb-2">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="p-2 border border-gray-300 rounded w-full text-black"
            required
          />
        </div>
        <div className="w-full max-w-md">
          <label className="block text-lg font-medium mb-2">Time</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="p-2 border border-gray-300 rounded w-full text-black"
            required
          />
        </div>
        <div className="w-full max-w-md">
          <label className="block text-lg font-medium mb-2">Contact No</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="p-2 border border-gray-300 rounded w-full text-black"
            required
          />
        </div>
        <button type="submit" className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition duration-200">
          Submit
        </button>
      </form>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-black p-6 rounded shadow-md text-center w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Booking Details</h2>
            <p className="mb-2"><strong>Event Name:</strong> {eventName}</p>
            <p className="mb-2"><strong>Organizer Name:</strong> {organizerName}</p>
            <p className="mb-2"><strong>Date:</strong> {date}</p>
            <p className="mb-2"><strong>Time:</strong> {time}</p>
            <p className="mb-2"><strong>Contact No:</strong> {location}</p>
            <button onClick={closeModal} className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition duration-200">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingForm;
