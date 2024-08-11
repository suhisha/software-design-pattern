// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const eventsList = [
//   { id: 1, name: 'Network Event', type: 'Network Event', image: 'https://ik.imagekit.io/ro4fvocfb/Home/network.jpeg?updatedAt=1722012515760' },
//   { id: 2, name: 'Award ceremony', type: 'Award', image: 'https://ik.imagekit.io/ro4fvocfb/Home/Award.jpeg?updatedAt=1722013033789' },
//   { id: 3, name: 'Meeting', type: 'Annual General Meeting', image: 'https://ik.imagekit.io/ro4fvocfb/Home/history.jpeg?updatedAt=1722013361141' },
//   { id: 4, name: 'Launch', type: 'Product Launch', image: 'https://ik.imagekit.io/ro4fvocfb/Home/launch.jpeg?updatedAt=1722013914391' },
//   { id: 5, name: 'Charity Event', type: 'Charity Events', image: 'https://ik.imagekit.io/ro4fvocfb/Home/charity.jpeg?updatedAt=1722014250432' },
//   { id: 6, name: 'Hackathon', type: 'Hackathon', image: 'https://ik.imagekit.io/ro4fvocfb/Home/hack.avif?updatedAt=1722068549435' },
//   { id: 7, name: 'Marriage Event', type: 'Marriage Events', image: 'https://ik.imagekit.io/ro4fvocfb/Home/wedding54.jpg?updatedAt=1722074915153' },
//   { id: 8, name: 'Birthday parties', type: 'Birthday parties', image: 'https://ik.imagekit.io/ro4fvocfb/Home/birthday.jpg?updatedAt=1722075656620' },
// ];

// const Event = () => {
//   const [search, setSearch] = useState('');

//   const filteredEvents = eventsList.filter(event =>
//     event.type.toLowerCase().includes(search.toLowerCase()) ||
//     event.name.toLowerCase().includes(search.toLowerCase())
//   );

//   const half = Math.ceil(filteredEvents.length / 2);
//   const firstColumnEvents = filteredEvents.slice(0, half);
//   const secondColumnEvents = filteredEvents.slice(half);

//   return (
//     <div className="event-app container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-6 text-center">CHOOSE EVENT TO BOOK</h1>

//       <input
//         type="text"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         placeholder="Search events..."
//         className="mb-4 p-2 border border-gray-300 rounded w-full"
//       />

//       <div className="event-columns grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div className="event-column overflow-y-auto h-96">
//           {firstColumnEvents.map(event => (
//             <div key={event.id} className="event-card bg-white rounded-lg shadow-lg p-4 mb-4">
//               <img src={event.image} alt={event.name} className="event-image w-full h-48 object-cover rounded-t-lg" />
//               <h2 className="text-xl font-semibold mt-4">{event.name}</h2>
//               <h3 className="text-lg text-gray-600">{event.type}</h3>
//               <button className="book-now-button mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200">
//                 <Link to='/Book'>Book</Link>
//               </button>
//             </div>
//           ))}
//         </div>
//         <div className="event-column overflow-y-auto h-96">
//           {secondColumnEvents.map(event => (
//             <div key={event.id} className="event-card bg-white rounded-lg shadow-lg p-4 mb-4">
//               <img src={event.image} alt={event.name} className="event-image w-full h-48 object-cover rounded-t-lg" />
//               <h2 className="text-xl font-semibold mt-4">{event.name}</h2>
//               <h3 className="text-lg text-gray-600">{event.type}</h3>
//               <button className="book-now-button mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200">
//                 <Link to='/Book'>Book</Link>
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// // // // export default Event;


// 
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const eventsList = [
  { id: 1, name: 'Network Event', type: 'Network Event', image: 'https://ik.imagekit.io/ro4fvocfb/Home/network.jpeg?updatedAt=1722012515760' },
  { id: 2, name: 'Award ceremony', type: 'Award', image: 'https://ik.imagekit.io/ro4fvocfb/Home/Award.jpeg?updatedAt=1722013033789' },
  { id: 3, name: 'Meeting', type: 'Annual General Meeting', image: 'https://ik.imagekit.io/ro4fvocfb/Home/history.jpeg?updatedAt=1722013361141' },
  { id: 4, name: 'Launch', type: 'Product Launch', image: 'https://ik.imagekit.io/ro4fvocfb/Home/launch.jpeg?updatedAt=1722013914391' },
  { id: 5, name: 'Charity Event', type: 'Charity Events', image: 'https://ik.imagekit.io/ro4fvocfb/Home/charity.jpeg?updatedAt=1722014250432' },
  { id: 6, name: 'Hackathon', type: 'Hackathon', image: 'https://ik.imagekit.io/ro4fvocfb/Home/hack.avif?updatedAt=1722068549435' },
  { id: 7, name: 'Marriage Event', type: 'Marriage Events', image: 'https://ik.imagekit.io/ro4fvocfb/Home/wedding54.jpg?updatedAt=1722074915153' },
  { id: 8, name: 'Birthday parties', type: 'Birthday parties', image: 'https://ik.imagekit.io/ro4fvocfb/Home/birthday.jpg?updatedAt=1722075656620' },
  { id: 9, name: 'Concert', type: 'Concert', image: 'https://ik.imagekit.io/ro4fvocfb/Home/concert.jpeg?updatedAt=1722085601914' },
];

const Event = () => {
  const [search, setSearch] = useState('');

  const filteredEvents = eventsList.filter(event =>
    event.type.toLowerCase().includes(search.toLowerCase()) ||
    event.name.toLowerCase().includes(search.toLowerCase())
  );

  const third = Math.ceil(filteredEvents.length / 3);
  const firstColumnEvents = filteredEvents.slice(0, third);
  const secondColumnEvents = filteredEvents.slice(third, 2 * third);
  const thirdColumnEvents = filteredEvents.slice(2 * third);

  return (
    <div className="event-app container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">EVENT BOOKING</h1>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search events..."
        className="mb-4 p-2 border border-gray-300 rounded w-full text-black"
      />

      <div className="event-columns grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="event-column">
          {firstColumnEvents.map(event => (
            <div key={event.id} className="event-card bg-black bg-opacity-50 text-white rounded-lg shadow-lg p-4 mb-4">
              <img src={event.image} alt={event.name} className="event-image w-full h-48 object-cover rounded-t-lg" />
              <h2 className="text-xl font-semibold mt-4">{event.name}</h2>
              <h3 className="text-lg">{event.type}</h3>
              <button className="book-now-button mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-200">
                <Link to='/BookingForm'>Book</Link>
              </button>
            </div>
          ))}
        </div>
        <div className="event-column">
          {secondColumnEvents.map(event => (
            <div key={event.id} className="event-card bg-black bg-opacity-50 text-white rounded-lg shadow-lg p-4 mb-4">
              <img src={event.image} alt={event.name} className="event-image w-full h-48 object-cover rounded-t-lg" />
              <h2 className="text-xl font-semibold mt-4">{event.name}</h2>
              <h3 className="text-lg">{event.type}</h3>
              <button className="book-now-button mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-200">
                <Link to='/BookingForm'>Book</Link>
              </button>
            </div>
          ))}
        </div>
        <div className="event-column">
          {thirdColumnEvents.map(event => (
            <div key={event.id} className="event-card bg-black bg-opacity-50 text-white rounded-lg shadow-lg p-4 mb-4">
              <img src={event.image} alt={event.name} className="event-image w-full h-48 object-cover rounded-t-lg" />
              <h2 className="text-xl font-semibold mt-4">{event.name}</h2>
              <h3 className="text-lg">{event.type}</h3>
              <button className="book-now-button mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-200">
                <Link to='/BookingForm'>Book</Link>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Footer or Additional Content */}
      <footer className="mt-8 bg-gray-800 text-white py-4 text-center">
        <p className="text-lg font-semibold mb-2">Want to host an event?</p>
        <p>Contact us for more information and booking details.</p>
        <Link to="/contact" className="mt-4 inline-block px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200">
         <Link to="/ContactForm">Contact Us</Link>
        </Link>
      </footer>
    </div>
  );
};

export default Event;
