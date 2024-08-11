// import React from 'react';
// import { Link } from 'react-router-dom';

// const Home = () => {
//   return (
//     <div className="home-page bg-black min-h-screen text-white">
//       {/* Navigation Bar */}
//       {/* <nav className="bg-pink-600 shadow-md py-4"> */}
//         <div className="container mx-auto flex justify-between items-center px-6">
//           {/* <div className="text-2xl font-bold">Event Organizer</div>
//           <div className="space-x-4">
//             <Link to="/" className="hover:text-pink-300">Home</Link>
//             <Link to="/events" className="hover:text-pink-300">Events</Link>
//             <Link to="/contact" className="hover:text-pink-300">Contact</Link>
//           </div> */}
//         </div>
//       {/* </nav> */}

//       {/* Hero Section */}
//       <section className="hero bg-gradient-to-r from-[#df425c] to-black text-white h-96 flex flex-col justify-center items-center text-center p-8">
//         <h1 className="text-5xl font-bold mb-4">Welcome to Event Organizer</h1>
//         <p className="text-lg mb-6">Creating unforgettable events just for you</p>
//         <Link to="/Login">
//           <button className="px-6 py-3 bg-[#df425c] text-white rounded-lg hover:bg-pink-700 transition duration-300">
//           <Link to="/Login">Login in</Link>  
//           </button>
//         </Link>
//       </section>
//       <section className="contact py-12 bg-black">
//         <div className="container mx-auto text-center">
//           <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
//           <p className="text-gray-400 mb-6">We would love to hear from you! Contact us for more information or to start planning your event today.</p>
//           <Link to="/event">
//             <button className="px-6 py-3 bg-[#df425c] text-white rounded-lg hover:bg-pink-700 transition duration-300">
//              <Link to="/Event">Explore Event</Link>
//             </button>
//           </Link>
//         </div>
//       </section>

//       {/* About Section */}
//       <section className="about py-12 bg-black">
//         <div className="container mx-auto text-center">
//           <h2 className="text-3xl font-bold mb-4">About Us</h2>
//           <p className="text-gray-400">At Event Organizer, we are dedicated to creating memorable experiences. Our team of professionals ensures that every event is executed flawlessly, from corporate gatherings to social celebrations.</p>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section className="services py-12 bg-gray-800">
//         <div className="container mx-auto text-center">
//           <h2 className="text-3xl font-bold mb-4">Our Services</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="service p-6 bg-black rounded-lg shadow">
//               <h3 className="text-xl font-semibold mb-2">Corporate Events</h3>
//               <p className="text-gray-400">From conferences to product launches, we provide comprehensive solutions for corporate events.</p>
//             </div>
//             <div className="service p-6 bg-black rounded-lg shadow">
//               <h3 className="text-xl font-semibold mb-2">Weddings</h3>
//               <p className="text-gray-400">We make your special day unforgettable with our personalized wedding planning services.</p>
//             </div>
//             <div className="service p-6 bg-black rounded-lg shadow">
//               <h3 className="text-xl font-semibold mb-2">Private Parties</h3>
//               <p className="text-gray-400">From birthdays to anniversaries, we create memorable private parties for all occasions.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       {/* <section className="contact py-12 bg-black">
//         <div className="container mx-auto text-center">
//           <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
//           <p className="text-gray-400 mb-6">We would love to hear from you! Contact us for more information or to start planning your event today.</p>
//           <Link to="/contact">
//             <button className="px-6 py-3 bg-[#df425c] text-white rounded-lg hover:bg-pink-700 transition duration-300">
//               Contact Us
//             </button>
//           </Link>
//         </div>
//       </section> */}

//       {/* Footer Section */}
//       <footer className="footer bg-gray-800 text-white py-6">
//         <div className="container mx-auto text-center">
//           <p>&copy; 2024 Event Organizer. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// // export default Home;

// import React from 'react';
// import { Link } from 'react-router-dom';

// const Home = () => {
//   return (
//     <div className="home-page bg-black min-h-screen text-white">
//       {/* Navigation Bar */}
//       {/* <nav className="bg-pink-600 shadow-md py-4"> */}
//         <div className="container mx-auto flex justify-between items-center px-6">
//           {/* <div className="text-2xl font-bold">Event Organizer</div>
//           <div className="space-x-4">
//             <Link to="/" className="hover:text-pink-300">Home</Link>
//             <Link to="/events" className="hover:text-pink-300">Events</Link>
//             <Link to="/contact" className="hover:text-pink-300">Contact</Link>
//           </div> */}
//         </div>
//       {/* </nav> */}

//       {/* Hero Section */}
//       <section className="hero bg-hero-contact-pattern bg-cover bg-center text-white h-96 flex flex-col justify-center items-center text-center p-8">
//         <h1 className="text-5xl font-bold mb-4">Welcome to Event Organizer</h1>
//         <p className="text-lg mb-6">Creating unforgettable events just for you</p>
//         <Link to="/Login">
//           <button className="px-6 py-3 bg-[#df425c] text-white rounded-lg hover:bg-pink-700 transition duration-300">
//             Login
//           </button>
//         </Link>
//       </section>

//       {/* Contact Section */}
//       <section className="contact bg-hero-contact-pattern bg-cover bg-center py-12">
//         <div className="container mx-auto text-center">
//           <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
//           <p className="text-gray-400 mb-6">We would love to hear from you! Contact us for more information or to start planning your event today.</p>
//           <Link to="/event">
//             <button className="px-6 py-3 bg-[#df425c] text-white rounded-lg hover:bg-pink-700 transition duration-300">
//               Explore Event
//             </button>
//           </Link>
//         </div>
//       </section>

//       {/* About Section */}
//       <section className="about py-12 bg-black">
//         <div className="container mx-auto text-center">
//           <h2 className="text-3xl font-bold mb-4">About Us</h2>
//           <p className="text-gray-400">At Event Organizer, we are dedicated to creating memorable experiences. Our team of professionals ensures that every event is executed flawlessly, from corporate gatherings to social celebrations.</p>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section className="services py-12 bg-gray-800">
//         <div className="container mx-auto text-center">
//           <h2 className="text-3xl font-bold mb-4">Our Services</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="service p-6 bg-black rounded-lg shadow">
//               <h3 className="text-xl font-semibold mb-2">Corporate Events</h3>
//               <p className="text-gray-400">From conferences to product launches, we provide comprehensive solutions for corporate events.</p>
//             </div>
//             <div className="service p-6 bg-black rounded-lg shadow">
//               <h3 className="text-xl font-semibold mb-2">Weddings</h3>
//               <p className="text-gray-400">We make your special day unforgettable with our personalized wedding planning services.</p>
//             </div>
//             <div className="service p-6 bg-black rounded-lg shadow">
//               <h3 className="text-xl font-semibold mb-2">Private Parties</h3>
//               <p className="text-gray-400">From birthdays to anniversaries, we create memorable private parties for all occasions.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer Section */}
//       <footer className="footer bg-gray-800 text-white py-6">
//         <div className="container mx-auto text-center">
//           <p>&copy; 2024 Event Organizer. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Home;

// //
// import React from 'react';

// const HomePage = () => {
//   return (
//     <div
//       className='flex flex-col min-h-screen'
//       style={{
//         backgroundImage: 'url(https://i.pinimg.com/474x/40/64/e2/4064e2e6405898620353f6e78fdaf3d5.jpg)',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat',
//       }}
//     >
//       {/* Main Content */}
//       <div className='flex flex-col md:flex-row items-center justify-center flex-1 p-4'>
//         {/* Left Side - Circle Image */}
//         <div className='flex-1 flex items-center justify-center'>
//           <img
//             src='https://i.pinimg.com/474x/87/e5/28/87e528d385a477c7d1bc8e11ae598ac1.jpg'
//             alt='Profile'
//             className='w-64 h-64 rounded-full object-cover border-4 border-white'
//           />
//         </div>

//         {/* Right Side - Text */}
//         <div className='flex-1 flex flex-col items-center md:items-start text-center md:text-left p-4'>
//           <h1 className='text-4xl font-bold text-white mb-4'>
//             Welcome to Our Platform
//           </h1>
//           <p className='text-lg text-white'>
//             Discover amazing events and connect with people. Explore a wide range of opportunities and experiences tailored just for you.
//           </p>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className='bg-gray-800 text-white py-4'>
//         <div className='container mx-auto text-center'>
//           <p className='text-sm'>
//             © {new Date().getFullYear()} Your Company Name. All rights reserved.
//           </p>
//           <p className='text-sm mt-2'>
//             <a href="/privacy-policy" className='hover:underline'>Privacy Policy</a> | <a href="/terms-of-service" className='hover:underline'>Terms of Service</a>
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// // export default HomePage;


// import React from 'react';
// import { Link } from 'react-router-dom';

// const HomePage = () => {
//   return (
//     <div>
//       {/* Home Section */}
//       <div
//         className='flex flex-col min-h-screen'
//         style={{
//           backgroundImage: 'url(https://i.pinimg.com/474x/40/64/e2/4064e2e6405898620353f6e78fdaf3d5.jpg)',
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundRepeat: 'no-repeat',
//         }}
//       >
//         {/* Main Content */}
//         <div className='flex flex-col md:flex-row items-center justify-center flex-1 p-4'>
//           {/* Left Side - Circle Image */}
//           <div className='flex-1 flex items-center justify-center'>
//             <img
//               src='https://i.pinimg.com/736x/88/b8/86/88b8861dbf969234411f7a9d0837ed26.jpg'
//               alt='Profile'
//               className='w-64 h-64 rounded-full object-cover border-4 border-white'
//             />
//           </div>

//           {/* Right Side - Text */}
//           <div className='flex-1 flex flex-col items-center md:items-start text-center md:text-left p-4'>
//             <h1 className='text-4xl font-bold text-white mb-4'>
//               Welcome Event Organizers
//             </h1>
//             <div className='bg-white bg-opacity-50 p-4 rounded-lg shadow-lg mb-4'>
//               <p className='text-lg text-gray-900 mb-2 italic'>
//                 "The success of your event starts with the meticulous planning of the organizer."
//               </p>
//               <p className='text-lg text-gray-900 mb-2 italic'>
//                 "An event is not over until everyone is tired of talking about it."
//               </p>
//               <p className='text-lg text-gray-900 italic'>
//                 "Good fortune is what happens when opportunity meets with planning."
//               </p>
//             </div>
//             <Link to="/get-started">
//               <button className='px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200'>
//                 Get Started
//               </button>
//             </Link>
//           </div>
//         </div>

//         {/* Footer */}
//         <footer className='bg-gray-800 text-white py-4'>
//           <div className='container mx-auto text-center'>
//             <p className='text-sm'>
//               © {new Date().getFullYear()} Your Company Name. All rights reserved.
//             </p>
//             <p className='text-sm mt-2'>
//               <a href="/privacy-policy" className='hover:underline'>Privacy Policy</a> | <a href="/terms-of-service" className='hover:underline'>Terms of Service</a>
//             </p>
//           </div>
//         </footer>
//       </div>

//       {/* Second Page Content */}
//       <div
//         className='flex flex-col min-h-screen'
//         style={{
//           backgroundColor: '#f7f7f7', // Keep this the same as the homepage or any preferred color
//         }}
//       >
//         <div className='flex flex-col items-center justify-center py-8'>
//           <h2 className='text-3xl font-bold text-black mb-6'>
//             Explore Our Events
//           </h2>
//           <div className='flex flex-col md:flex-row justify-around items-center'>
//             <div className='flex-1 flex justify-center items-center p-4'>
//               <img
//                 src='https://i.pinimg.com/474x/e9/b6/1e/e9b61e6b450c998a80349828e2bdb04b.jpg'
//                 alt='Event 1'
//                 className='w-full max-w-md rounded-lg shadow-lg border-4 border-white'
//               />
//             </div>
//             <div className='flex-1 flex justify-center items-center p-4'>
//               <img
//                 src='https://i.pinimg.com/564x/03/10/62/03106271e59d936fdf28e3252e8eb541.jpg'
//                 alt='Event 2'
//                 className='w-full max-w-md rounded-lg shadow-lg border-4 border-white'
//               />
//             </div>
//           </div>
//           <div className='text-center text-black mt-4'>
//             <p className='text-lg'>
//               Discover how our events bring people together and create unforgettable memories.
//             </p>
//             <p className='text-lg'>
//               Each event is meticulously planned to ensure a seamless experience from start to finish.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;

import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      {/* Home Section */}
      <div
        className='flex flex-col min-h-screen'
        style={{
          backgroundImage: 'url(https://i.pinimg.com/474x/40/64/e2/4064e2e6405898620353f6e78fdaf3d5.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Main Content */}
        <div className='flex flex-col md:flex-row items-center justify-center flex-1 p-4'>
          {/* Left Side - Circle Image */}
          <div className='flex-1 flex items-center justify-center'>
            <img
              src='https://i.pinimg.com/736x/88/b8/86/88b8861dbf969234411f7a9d0837ed26.jpg'
              alt='Profile'
              className='w-64 h-64 rounded-full object-cover border-4 border-white'
            />
          </div>

          {/* Right Side - Text */}
          <div className='flex-1 flex flex-col items-center md:items-start text-center md:text-left p-4'>
            <h1 className='text-4xl font-bold text-white mb-4'>
              Welcome Event Organizers
            </h1>
            <div className='bg-white bg-opacity-50 p-4 rounded-lg shadow-lg mb-4'>
              <p className='text-lg text-gray-900 mb-2 italic'>
                "The success of your event starts with the meticulous planning of the organizer."
              </p>
              <p className='text-lg text-gray-900 mb-2 italic'>
                "An event is not over until everyone is tired of talking about it."
              </p>
              <p className='text-lg text-gray-900 italic'>
                "Good fortune is what happens when opportunity meets with planning."
              </p>
            </div>
            <Link to="/get-started">
              <button className='px-6 py-3 bg-pink-200 text-white rounded-lg hover:bg-pink-400 transition duration-200'>
                
                <Link to="/register">Get Started</Link>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Second Page Content */}
      <div
        className='flex flex-col min-h-screen'
        style={{
          backgroundColor: '#f7f7f7', // Same background color as the home section
        }}
      >
        <div className='flex flex-col items-center justify-center py-8'>
          <h2 className='text-3xl font-bold text-black mb-6'>
            Explore Our Events
          </h2>
          <div className='flex flex-col md:flex-row justify-around items-center'>
            <div className='flex-1 flex justify-center items-center p-4'>
              <img
                src='https://i.pinimg.com/474x/e9/b6/1e/e9b61e6b450c998a80349828e2bdb04b.jpg'
                alt='Event 1'
                className='w-full max-w-md rounded-lg shadow-lg border-4 border-white'
              />
            </div>
            <div className='flex-1 flex justify-center items-center p-4'>
              <img
                src='https://i.pinimg.com/564x/03/10/62/03106271e59d936fdf28e3252e8eb541.jpg'
                alt='Event 2'
                className='w-full max-w-md rounded-lg shadow-lg border-4 border-white'
              />
            </div>
          </div>
          <div className='text-center text-black mt-4'>
            <p className='text-lg'>
              Discover how our events bring people together and create unforgettable memories.
            </p>
            <p className='text-lg'>
              Each event is meticulously planned to ensure a seamless experience from start to finish.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className='bg-gray-800 text-white py-4'>
        <div className='container mx-auto text-center'>
          <p className='text-sm'>
            © {new Date().getFullYear()} Your Company Name. All rights reserved.
          </p>
          <p className='text-sm mt-2'>
            <a href="/privacy-policy" className='hover:underline'>Privacy Policy</a> | <a href="/terms-of-service" className='hover:underline'>Terms of Service</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
