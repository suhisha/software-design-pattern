// import React, { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Textarea } from '@/components/ui/textarea';

// const Feedback= () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     eventName: '',
//     rating: '',
//     comments: ''
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission, e.g., send data to a server
//     console.log(formData);
//     alert('Feedback submitted successfully!');
//     setFormData({ name: '', email: '', eventName: '', rating: '', comments: '' }); // Reset form
//   };

//   return (
//     <div className='h-full w-full flex justify-center items-center'>
//       <Card className="w-1/3">
//         <CardHeader className="space-y-1">
//           <CardTitle className="text-2xl">Event Feedback</CardTitle>
//           <CardDescription>
//             We appreciate your feedback on the event.
//           </CardDescription>
//         </CardHeader>
//         <form onSubmit={handleSubmit}>
//           <CardContent className="grid gap-4">
//             <div className="grid gap-2">
//               <Label htmlFor="name">Name</Label>
//               <Input 
//                 id="name" 
//                 name="name" 
//                 type="text" 
//                 value={formData.name} 
//                 onChange={handleChange} 
//                 placeholder="Enter your name" 
//                 required 
//               />
//             </div>
//             <div className="grid gap-2">
//               <Label htmlFor="email">Email</Label>
//               <Input 
//                 id="email" 
//                 name="email" 
//                 type="email" 
//                 value={formData.email} 
//                 onChange={handleChange} 
//                 placeholder="Enter your email" 
//                 required 
//               />
//             </div>
//             <div className="grid gap-2">
//               <Label htmlFor="eventName">Event Name</Label>
//               <Input 
//                 id="eventName" 
//                 name="eventName" 
//                 type="text" 
//                 value={formData.eventName} 
//                 onChange={handleChange} 
//                 placeholder="Enter the event name" 
//                 required 
//               />
//             </div>
//             <div className="grid gap-2">
//               <Label htmlFor="rating">Rating</Label>
//               <Input 
//                 id="rating" 
//                 name="rating" 
//                 type="number" 
//                 min="1" 
//                 max="5" 
//                 value={formData.rating} 
//                 onChange={handleChange} 
//                 placeholder="Rate the event (1-5)" 
//                 required 
//               />
//             </div>
//             <div className="grid gap-2">
//               <Label htmlFor="comments">Comments</Label>
//               <Textarea 
//                 id="comments" 
//                 name="comments" 
//                 value={formData.comments} 
//                 onChange={handleChange} 
//                 placeholder="Share your feedback" 
//                 required 
//               />
//             </div>
//           </CardContent>
//           <CardFooter className="flex justify-center">
//             <Button type="submit" className="w-full">Submit Feedback</Button>
//           </CardFooter>
//         </form>
//       </Card>
//     </div>
//   );
// };

// export default Feedback;




// import React, { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { Label } from '@/components/ui/label';

// const StarRating = ({ rating, setRating }) => {
//   const handleClick = (value) => {
//     setRating(value);
//   };

//   return (
//     <div className="flex space-x-1">
//       {[1, 2, 3, 4, 5].map((value) => (
//         <svg
//           key={value}
//           onClick={() => handleClick(value)}
//           className={`w-6 h-6 cursor-pointer ${value <= rating ? 'text-pink-400' : 'text-gray-300'}`} // Light pink color for selected stars
//           fill="currentColor"
//           viewBox="0 0 20 20"
//         >
//           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.357 4.197a1 1 0 00.95.69h4.419c.969 0 1.372 1.24.588 1.81l-3.58 2.6a1 1 0 00-.364 1.118l1.358 4.197c.3.921-.755 1.688-1.54 1.118l-3.58-2.6a1 1 0 00-1.176 0l-3.58 2.6c-.784.57-1.838-.197-1.539-1.118l1.358-4.197a1 1 0 00-.364-1.118l-3.58-2.6c-.784-.57-.38-1.81.588-1.81h4.42a1 1 0 00.949-.69l1.357-4.197z" />
//         </svg>
//       ))}
//     </div>
//   );
// };

// const FeedbackForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     rating: 0,
//     comments: ''
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleRatingChange = (value) => {
//     setFormData({
//       ...formData,
//       rating: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Feedback Submitted:', formData);
//     alert('Thank you for your feedback!');
//     setFormData({ name: '', email: '', rating: 0, comments: '' }); // Reset form
//   };

//   return (
//     <div className='h-screen w-full flex justify-center items-center p-4 bg-gray-50'>
//       <form onSubmit={handleSubmit} className='w-full max-w-sm bg-white p-4 rounded shadow-lg'>
//         <h2 className='text-2xl font-bold text-center mb-4 text-pink-700'>Event Feedback</h2>
//         <div className='mb-3'>
//           <Label htmlFor="name" className="text-pink-600">Name</Label>
//           <Input 
//             id="name" 
//             name="name" 
//             type="text" 
//             value={formData.name} 
//             onChange={handleChange} 
//             placeholder="Your Name" 
//             required 
//             className="w-full mt-1 p-2 border rounded focus:border-pink-500"
//           />
//         </div>
//         <div className='mb-3'>
//           <Label htmlFor="email" className="text-pink-600">Email</Label>
//           <Input 
//             id="email" 
//             name="email" 
//             type="email" 
//             value={formData.email} 
//             onChange={handleChange} 
//             placeholder="Your Email" 
//             required 
//             className="w-full mt-1 p-2 border rounded focus:border-pink-500"
//           />
//         </div>
//         <div className='mb-3'>
//           <Label htmlFor="rating" className="text-pink-600">Rating</Label>
//           <StarRating rating={formData.rating} setRating={handleRatingChange} />
//         </div>
//         <div className='mb-3'>
//           <Label htmlFor="comments" className="text-pink-600">Additional Comments</Label>
//           <Textarea 
//             id="comments" 
//             name="comments" 
//             value={formData.comments} 
//             onChange={handleChange} 
//             placeholder="Share your thoughts on the event" 
//             required 
//             className="w-full mt-1 p-2 border rounded focus:border-pink-500"
//           />
//         </div>
//         <Button type="submit" className="w-full bg-pink-600 text-white p-2 rounded hover:bg-pink-700">Submit Feedback</Button>
//       </form>
//     </div>
//   );
// };

// export default FeedbackForm;

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const StarRating = ({ rating, setRating }) => {
  const handleClick = (value) => {
    setRating(value);
  };

  return (
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map((value) => (
        <svg
          key={value}
          onClick={() => handleClick(value)}
          className={`w-6 h-6 cursor-pointer ${value <= rating ? 'text-pink-400' : 'text-gray-300'}`} // Light pink color for selected stars
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.357 4.197a1 1 0 00.95.69h4.419c.969 0 1.372 1.24.588 1.81l-3.58 2.6a1 1 0 00-.364 1.118l1.358 4.197c.3.921-.755 1.688-1.54 1.118l-3.58-2.6a1 1 0 00-1.176 0l-3.58 2.6c-.784.57-1.838-.197-1.539-1.118l1.358-4.197a1 1 0 00-.364-1.118l-3.58-2.6c-.784-.57-.38-1.81.588-1.81h4.42a1 1 0 00.949-.69l1.357-4.197z" />
        </svg>
      ))}
    </div>
  );
};

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: 0,
    comments: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRatingChange = (value) => {
    setFormData({
      ...formData,
      rating: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback Submitted:', formData);
    alert('Thank you for your feedback!');
    setFormData({ name: '', email: '', rating: 0, comments: '' }); // Reset form
  };

  return (
    <div className='h-screen w-full flex'>
      {/* Left Side - Positive Comments */}
      <div className='hidden md:flex md:w-1/2 bg-pink-50 justify-center items-center p-6'>
        <div className='text-center'>
          <h2 className='text-2xl font-bold text-pink-600 mb-4'>What Our Attendees Say</h2>
          <p className='text-lg text-gray-700'>
            "The event was fantastic! Everything was well-organized and the experience was truly memorable. Thank you for putting together such a wonderful event!"
          </p>
          <p className='text-lg text-gray-700 mt-4'>
            "I had a great time attending the event. The speakers were engaging, and the atmosphere was fantastic. I would definitely recommend it to others."
          </p>
        </div>
      </div>

      {/* Right Side - Feedback Form */}
      <div className='w-full md:w-1/2 flex justify-center items-center p-4'>
        <form onSubmit={handleSubmit} className='w-full max-w-sm bg-white p-4 rounded shadow-lg'>
          <h2 className='text-2xl font-bold text-center mb-4 text-pink-700'>Event Feedback</h2>
          <div className='mb-3'>
            <Label htmlFor="name" className="text-pink-600">Name</Label>
            <Input 
              id="name" 
              name="name" 
              type="text" 
              value={formData.name} 
              onChange={handleChange} 
              placeholder="Your Name" 
              required 
              className="w-full mt-1 p-2 border rounded focus:border-pink-500"
            />
          </div>
          <div className='mb-3'>
            <Label htmlFor="email" className="text-pink-600">Email</Label>
            <Input 
              id="email" 
              name="email" 
              type="email" 
              value={formData.email} 
              onChange={handleChange} 
              placeholder="Your Email" 
              required 
              className="w-full mt-1 p-2 border rounded focus:border-pink-500"
            />
          </div>
          <div className='mb-3'>
            <Label htmlFor="rating" className="text-pink-600">Rating</Label>
            <StarRating rating={formData.rating} setRating={handleRatingChange} />
          </div>
          <div className='mb-3'>
            <Label htmlFor="comments" className="text-pink-600">Additional Comments</Label>
            <Textarea 
              id="comments" 
              name="comments" 
              value={formData.comments} 
              onChange={handleChange} 
              placeholder="Share your thoughts on the event" 
              required 
              className="w-full mt-1 p-2 border rounded focus:border-pink-500"
            />
          </div>
          <Button type="submit" className="w-full bg-pink-600 text-white p-2 rounded hover:bg-pink-700">Submit Feedback</Button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;

