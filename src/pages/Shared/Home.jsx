import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-page bg-black min-h-screen text-white">
      {/* Navigation Bar */}
      {/* <nav className="bg-pink-600 shadow-md py-4"> */}
        <div className="container mx-auto flex justify-between items-center px-6">
          {/* <div className="text-2xl font-bold">Event Organizer</div>
          <div className="space-x-4">
            <Link to="/" className="hover:text-pink-300">Home</Link>
            <Link to="/events" className="hover:text-pink-300">Events</Link>
            <Link to="/contact" className="hover:text-pink-300">Contact</Link>
          </div> */}
        </div>
      {/* </nav> */}

      {/* Hero Section */}
      <section className="hero bg-gradient-to-r from-[#df425c] to-black text-white h-96 flex flex-col justify-center items-center text-center p-8">
        <h1 className="text-5xl font-bold mb-4">Welcome to Event Organizer</h1>
        <p className="text-lg mb-6">Creating unforgettable events just for you</p>
        <Link to="/Login">
          <button className="px-6 py-3 bg-[#df425c] text-white rounded-lg hover:bg-pink-700 transition duration-300">
          <Link to="/Login">Login in</Link>  
          </button>
        </Link>
      </section>
      <section className="contact py-12 bg-black">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-400 mb-6">We would love to hear from you! Contact us for more information or to start planning your event today.</p>
          <Link to="/event">
            <button className="px-6 py-3 bg-[#df425c] text-white rounded-lg hover:bg-pink-700 transition duration-300">
             <Link to="/Event">Explore Event</Link>
            </button>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="about py-12 bg-black">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-gray-400">At Event Organizer, we are dedicated to creating memorable experiences. Our team of professionals ensures that every event is executed flawlessly, from corporate gatherings to social celebrations.</p>
        </div>
      </section>

      {/* Services Section */}
      <section className="services py-12 bg-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="service p-6 bg-black rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Corporate Events</h3>
              <p className="text-gray-400">From conferences to product launches, we provide comprehensive solutions for corporate events.</p>
            </div>
            <div className="service p-6 bg-black rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Weddings</h3>
              <p className="text-gray-400">We make your special day unforgettable with our personalized wedding planning services.</p>
            </div>
            <div className="service p-6 bg-black rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Private Parties</h3>
              <p className="text-gray-400">From birthdays to anniversaries, we create memorable private parties for all occasions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      {/* <section className="contact py-12 bg-black">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-400 mb-6">We would love to hear from you! Contact us for more information or to start planning your event today.</p>
          <Link to="/contact">
            <button className="px-6 py-3 bg-[#df425c] text-white rounded-lg hover:bg-pink-700 transition duration-300">
              Contact Us
            </button>
          </Link>
        </div>
      </section> */}

      {/* Footer Section */}
      <footer className="footer bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Event Organizer. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
