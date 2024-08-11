// import React, { useState } from 'react';

// const BookingForm = () => {
//   const [Name, setName] = useState('');
//   const [EventName, setEventName] = useState('');
//   const [date, setDate] = useState('');
//   const [time, setTime] = useState('');
//   const [contactNo, setContactNo] = useState('');
//   const [description, setDescription] = useState('');
//   const [bookingDetails, setBookingDetails] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Store the booking details
//     const details = {
//       eventName,
//       organizerName,
//       date,
//       time,
//       contactNo,
//       description,
//     };
//     setBookingDetails(details);
//     // Show the modal with booking details
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <div className="booking-details-page container mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-6 text-center">Booking Portal</h1>
//       <form onSubmit={handleSubmit} className="space-y-4 flex flex-col items-center">
//         <div className="w-full max-w-md">
//           <label className="block text-lg font-medium mb-2">Name</label>
//           <input
//             type="text"
//             value={Name}
//             onChange={(e) => setName(e.target.value)}
//             className="p-2 border border-gray-300 rounded w-full text-black"
//             required
//           />
//         </div>
//         <div className="w-full max-w-md">
//           <label className="block text-lg font-medium mb-2">Event Name</label>
//           <input
//             type="text"
//             value={EventName}
//             onChange={(e) => setEventName(e.target.value)}
//             className="p-2 border border-gray-300 rounded w-full text-black"
//             required
//           />
//         </div>
//         <div className="w-full max-w-md">
//           <label className="block text-lg font-medium mb-2">Date</label>
//           <input
//             type="date"
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//             className="p-2 border border-gray-300 rounded w-full text-black"
//             required
//           />
//         </div>
//         <div className="w-full max-w-md">
//           <label className="block text-lg font-medium mb-2">Time</label>
//           <input
//             type="time"
//             value={time}
//             onChange={(e) => setTime(e.target.value)}
//             className="p-2 border border-gray-300 rounded w-full text-black"
//             required
//           />
//         </div>
//         <div className="w-full max-w-md">
//           <label className="block text-lg font-medium mb-2">Contact No</label>
//           <input
//             type="text"
//             value={contactNo}
//             onChange={(e) => setContactNo(e.target.value)}
//             className="p-2 border border-gray-300 rounded w-full text-black"
//             required
//           />
//         </div>
//         <div className="w-full max-w-md">
//           <label className="block text-lg font-medium mb-2">Description</label>
//           <textarea
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             className="p-2 border border-gray-300 rounded w-full text-black"
//             required
//           />
//         </div>
//         <button type="submit" className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition duration-200">
//           Submit
//         </button>
//       </form>

//       {isModalOpen && bookingDetails && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white p-6 rounded shadow-md text-center w-full max-w-md">
//             <h2 className="text-xl font-bold mb-4">Booking Details</h2>
//             <p className="mb-2"><strong>Event Name:</strong> {bookingDetails.eventName}</p>
//             <p className="mb-2"><strong>Organizer Name:</strong> {bookingDetails.organizerName}</p>
//             <p className="mb-2"><strong>Date:</strong> {bookingDetails.date}</p>
//             <p className="mb-2"><strong>Time:</strong> {bookingDetails.time}</p>
//             <p className="mb-2"><strong>Contact No:</strong> {bookingDetails.contactNo}</p>
//             <p className="mb-2"><strong>Description:</strong> {bookingDetails.description}</p>
//             <button onClick={closeModal} className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition duration-200">
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default BookingForm;
// import React, { useState } from 'react';

// const BookingForm = () => {
//   const [Name, setName] = useState('');
//   const [EventName, setEventName] = useState('');
//   const [date, setDate] = useState('');
//   const [time, setTime] = useState('');
//   const [contactNo, setContactNo] = useState('');
//   const [description, setDescription] = useState('');
//   const [bookingDetails, setBookingDetails] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Store the booking details
//     const details = {
//       EventName,
//       Name,
//       date,
//       time,
//       contactNo,
//       description,
//     };
//     setBookingDetails(details);
//     // Show the modal with booking details
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <div className="booking-details-page container mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-6 text-center">Booking Portal</h1>
//       <form onSubmit={handleSubmit} className="space-y-4 flex flex-col items-center">
//         <div className="w-full max-w-md">
//           <label className="block text-lg font-medium mb-2">Name</label>
//           <input
//             type="text"
//             value={Name}
//             onChange={(e) => setName(e.target.value)}
//             className="p-2 border border-gray-300 rounded w-full text-black"
//             required
//           />
//         </div>
//         <div className="w-full max-w-md">
//           <label className="block text-lg font-medium mb-2">Event Name</label>
//           <input
//             type="text"
//             value={EventName}
//             onChange={(e) => setEventName(e.target.value)}
//             className="p-2 border border-gray-300 rounded w-full text-black"
//             required
//           />
//         </div>
//         <div className="w-full max-w-md">
//           <label className="block text-lg font-medium mb-2">Date</label>
//           <input
//             type="date"
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//             className="p-2 border border-gray-300 rounded w-full text-black"
//             required
//           />
//         </div>
//         <div className="w-full max-w-md">
//           <label className="block text-lg font-medium mb-2">Time</label>
//           <input
//             type="time"
//             value={time}
//             onChange={(e) => setTime(e.target.value)}
//             className="p-2 border border-gray-300 rounded w-full text-black"
//             required
//           />
//         </div>
//         <div className="w-full max-w-md">
//           <label className="block text-lg font-medium mb-2">Contact No</label>
//           <input
//             type="text"
//             value={contactNo}
//             onChange={(e) => setContactNo(e.target.value)}
//             className="p-2 border border-gray-300 rounded w-full text-black"
//             required
//           />
//         </div>
//         {/* <div className="w-full max-w-md">
//           <label className="block text-lg font-medium mb-2">Description</label>
//           <textarea
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             className="p-2 border border-gray-300 rounded w-full text-black"
//             required
//           />
//         </div> */}
//         <button type="submit" className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition duration-200">
//           Submit
//         </button>
//       </form>

//       {isModalOpen && bookingDetails && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white p-6 rounded shadow-md text-center w-full max-w-md">
//             <h2 className="text-xl font-bold mb-4">Booking Details</h2>
//             <p className="mb-2"><strong>Event Name:</strong> {bookingDetails.EventName}</p>
//             <p className="mb-2"><strong>Name:</strong> {bookingDetails.Name}</p>
//             <p className="mb-2"><strong>Date:</strong> {bookingDetails.date}</p>
//             <p className="mb-2"><strong>Time:</strong> {bookingDetails.time}</p>
//             <p className="mb-2"><strong>Contact No:</strong> {bookingDetails.contactNo}</p>
//             {/* <p className="mb-2"><strong>Description:</strong> {bookingDetails.description}</p> */}
//             <button onClick={closeModal} className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition duration-200">
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default BookingForm;

import React, { useState } from 'react';

const BookingForm = () => {
  const [Name, setName] = useState('');
  const [EventName, setEventName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [description, setDescription] = useState('');
  const [bookingDetails, setBookingDetails] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store the booking details
    const details = {
      EventName,
      Name,
      date,
      time,
      contactNo,
      description,
    };
    setBookingDetails(details);
    // Show the modal with booking details
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      className="booking-details-page container mx-auto p-6 bg-cover bg-center min-h-screen flex items-center justify-center"
      style={{ backgroundImage: `url('https://i.pinimg.com/474x/5d/25/a4/5d25a4d65638a1e41f5f9a6025252f99.jpg')` }}
    >
      <div className="bg-white bg-opacity-80 p-8 rounded shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Booking Portal</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="w-full">
            <label className="block text-lg font-medium mb-2">Name</label>
            <input
              type="text"
              value={Name}
              onChange={(e) => setName(e.target.value)}
              className="p-2 border border-gray-300 rounded w-full text-black"
              required
            />
          </div>
          <div className="w-full">
            <label className="block text-lg font-medium mb-2">Event Name</label>
            <input
              type="text"
              value={EventName}
              onChange={(e) => setEventName(e.target.value)}
              className="p-2 border border-gray-300 rounded w-full text-black"
              required
            />
          </div>
          <div className="w-full">
            <label className="block text-lg font-medium mb-2">Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="p-2 border border-gray-300 rounded w-full text-black"
              required
            />
          </div>
          <div className="w-full">
            <label className="block text-lg font-medium mb-2">Time</label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="p-2 border border-gray-300 rounded w-full text-black"
              required
            />
          </div>
          <div className="w-full">
            <label className="block text-lg font-medium mb-2">Contact No</label>
            <input
              type="text"
              value={contactNo}
              onChange={(e) => setContactNo(e.target.value)}
              className="p-2 border border-gray-300 rounded w-full text-black"
              required
            />
          </div>
          <button type="submit" className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition duration-200 w-full">
            Submit
          </button>
        </form>
      </div>

      {isModalOpen && bookingDetails && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-md text-center w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Booking Details</h2>
            <p className="mb-2"><strong>Event Name:</strong> {bookingDetails.EventName}</p>
            <p className="mb-2"><strong>Name:</strong> {bookingDetails.Name}</p>
            <p className="mb-2"><strong>Date:</strong> {bookingDetails.date}</p>
            <p className="mb-2"><strong>Time:</strong> {bookingDetails.time}</p>
            <p className="mb-2"><strong>Contact No:</strong> {bookingDetails.contactNo}</p>
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
