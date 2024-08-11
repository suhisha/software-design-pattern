// import React, { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';

// const Register = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleRegister = () => {
//     // Simulate successful registration
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <div className='h-full w-full flex justify-center items-center'>
//       <Card className="w-1/4">
//         <CardHeader className="space-y-1">
//           <CardTitle className="text-2xl">Register</CardTitle>
//         </CardHeader>
//         <CardContent className="grid gap-4">
//           <div className="relative">
//             <div className="absolute inset-0 flex items-center">
//               <span className="w-full border-t" />
//             </div>
//           </div>
//           <div className="grid gap-2">
//             <Label htmlFor="name">Name</Label>
//             <Input id="name" type="text" />
//           </div>
//           <div className="grid gap-2">
//             <Label htmlFor="roll">Email</Label>
//             <Input id="roll" type="text" />
//           </div>
//           <div className="grid gap-2">
//             <Label htmlFor="email">Password</Label>
//             <Input id="email" type="email" />
//           </div>
//           <div className="grid gap-2">
//             <Label htmlFor="phone">Phone no</Label>
//             <Input id="phone" type="text" />
//           </div>
//         </CardContent>
//         <CardFooter>
//           <Button className="w-full" onClick={handleRegister}>Create account</Button>
//         </CardFooter>
//       </Card>

//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white p-6 rounded shadow-md text-center">
//             <h2 className="text-xl font-bold mb-4">Success</h2>
//             <p className="text-green-600 font-semibold mb-4">Registration successful!</p>
//             <Button onClick={closeModal}>Close</Button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// // export default Register;
// import React, { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';

// const Register = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleRegister = () => {
//     // Simulate successful registration
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   const backgroundImage = 'https://ik.imagekit.io/ro4fvocfb/Home/we.jpg?updatedAt=1722328033150'; // Replace with your image URL

//   return (
//     <div className='h-screen flex'>
//       <div
//         className='w-1/2 bg-cover bg-center'
//         style={{ backgroundImage: `url(${backgroundImage})` }}
//       >
//         {/* Optional: You can add overlay or text here */}
//       </div>

//       <div className='w-1/2 flex justify-center items-center bg-black bg-opacity-50'>
//         <Card className="w-3/4 md:w-1/3">
//           <CardHeader className="space-y-1">
//             <CardTitle className="text-2xl">Register</CardTitle>
//           </CardHeader>
//           <CardContent className="grid gap-4">
//             <div className="relative">
//               <div className="absolute inset-0 flex items-center">
//                 <span className="w-full border-t" />
//               </div>
//             </div>
//             <div className="grid gap-2">
//               <Label htmlFor="name">Name</Label>
//               <Input id="name" type="text" />
//             </div>
//             <div className="grid gap-2">
//               <Label htmlFor="email">Email</Label>
//               <Input id="email" type="email" />
//             </div>
//             <div className="grid gap-2">
//               <Label htmlFor="password">Password</Label>
//               <Input id="password" type="password" />
//             </div>
//             <div className="grid gap-2">
//               <Label htmlFor="phone">Phone no</Label>
//               <Input id="phone" type="text" />
//             </div>
//           </CardContent>
//           <CardFooter>
//             <Button className="w-full" onClick={handleRegister}>Create account</Button>
//           </CardFooter>
//         </Card>

//         {isModalOpen && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//             <div className="bg-white p-6 rounded shadow-md text-center">
//               <h2 className="text-xl font-bold mb-4">Success</h2>
//               <p className="text-green-600 font-semibold mb-4">Registration successful!</p>
//               <Button onClick={closeModal}>Close</Button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Register;
// import React, { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';

// const Register = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleRegister = () => {
//     // Simulate successful registration
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   const backgroundImage = 'https://ik.imagekit.io/ro4fvocfb/Home/we.jpg?updatedAt=1722328033150'; // Replace with your image URL

//   return (
//     <div
//       className='h-screen flex items-center justify-center'
//       style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
//     >
//       <div className='bg-black bg-opacity-50 p-8 rounded-lg shadow-lg'>
//         <Card className="w-full max-w-md mx-auto">
//           <CardHeader className="space-y-1">
//             <CardTitle className="text-2xl text-black">Register</CardTitle>
//           </CardHeader>
//           <CardContent className="grid gap-4">
//             <div className="relative">
//               <div className="absolute inset-0 flex items-center">
//                 <span className="w-full border-t border-gray-500" />
//               </div>
//             </div>
//             <div className="grid gap-2">
//               <Label htmlFor="name" className="text-black">Name</Label>
//               <Input id="name" type="text" />
//             </div>
//             <div className="grid gap-2">
//               <Label htmlFor="email" className="text-black">Email</Label>
//               <Input id="email" type="email" />
//             </div>
//             <div className="grid gap-2">
//               <Label htmlFor="password" className="text-black">Password</Label>
//               <Input id="password" type="password" />
//             </div>
//             <div className="grid gap-2">
//               <Label htmlFor="phone" className="text-black">Phone no</Label>
//               <Input id="phone" type="text" />
//             </div>
//           </CardContent>
//           <CardFooter>
//             <Button className="w-full" onClick={handleRegister}>Create account</Button>
//           </CardFooter>
//         </Card>

//         {isModalOpen && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//             <div className="bg-white p-6 rounded shadow-md text-center">
//               <h2 className="text-xl font-bold mb-4">Success</h2>
//               <p className="text-green-600 font-semibold mb-4">Registration successful!</p>
//               <Button onClick={closeModal}>Close</Button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Register;






// import React, { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';

// const Register = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleRegister = () => {
//     // Simulate successful registration
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <div className='h-full w-full flex justify-center items-center'>
//       <Card className="w-1/4">
//         <CardHeader className="space-y-1">
//           <CardTitle className="text-2xl">Register</CardTitle>
//         </CardHeader>
//         <CardContent className="grid gap-4">
//           <div className="relative">
//             <div className="absolute inset-0 flex items-center">
//               <span className="w-full border-t" />
//             </div>
//           </div>
//           <div className="grid gap-2">
//             <Label htmlFor="name">Name</Label>
//             <Input id="name" type="text" />
//           </div>
//           <div className="grid gap-2">
//             <Label htmlFor="roll">Email</Label>
//             <Input id="roll" type="text" />
//           </div>
//           <div className="grid gap-2">
//             <Label htmlFor="email">Password</Label>
//             <Input id="email" type="email" />
//           </div>
//           <div className="grid gap-2">
//             <Label htmlFor="phone">Phone no</Label>
//             <Input id="phone" type="text" />
//           </div>
//         </CardContent>
//         <CardFooter>
//           <Button className="w-full" onClick={handleRegister}>Create account</Button>
//         </CardFooter>
//       </Card>

//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white p-6 rounded shadow-md text-center">
//             <h2 className="text-xl font-bold mb-4">Success</h2>
//             <p className="text-green-600 font-semibold mb-4">Registration successful!</p>
//             <Button onClick={closeModal}>Close</Button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Register;




// import React, { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';

// const Register = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleRegister = () => {
//     // Simulate successful registration
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <div className='h-screen w-full flex'>
//       {/* Left Side - Registration Form */}
//       <div className='w-full md:w-1/2 flex justify-center items-center'>
//         <Card className="w-full max-w-md shadow-lg">
//           <CardHeader className="space-y-1">
//             <CardTitle className="text-2xl">Register</CardTitle>
//           </CardHeader>
//           <CardContent className="grid gap-4">
//             <div className="relative">
//               <div className="absolute inset-0 flex items-center">
//                 <span className="w-full border-t" />
//               </div>
//             </div>
//             <div className="grid gap-2">
//               <Label htmlFor="name">Name</Label>
//               <Input id="name" type="text" />
//             </div>
//             <div className="grid gap-2">
//               <Label htmlFor="email">Email</Label>
//               <Input id="email" type="email" />
//             </div>
//             <div className="grid gap-2">
//               <Label htmlFor="password">Password</Label>
//               <Input id="password" type="password" />
//             </div>
//             <div className="grid gap-2">
//               <Label htmlFor="phone">Phone no</Label>
//               <Input id="phone" type="text" />
//             </div>
//           </CardContent>
//           <CardFooter>
//             <Button className="w-full" onClick={handleRegister}>Create account</Button>
//           </CardFooter>
//         </Card>
//       </div>

//       {/* Right Side - Circle Image */}
//       <div className='hidden md:flex md:w-1/2 justify-center items-center bg-gray-200'>
//         <img
//           src='https://i.pinimg.com/474x/ce/be/cd/cebecd6b6d5425e3dac00dfe006c983a.jpg' // Replace with your image URL
//           alt='Profile'
//           className='w-96 h-96 rounded-full object-cover border-4 border-white shadow-lg'
//         />
//       </div>

//       {/* Modal for Registration Success */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white p-6 rounded shadow-md text-center">
//             <h2 className="text-xl font-bold mb-4">Success</h2>
//             <p className="text-green-600 font-semibold mb-4">Registration successful!</p>
//             <Button onClick={closeModal}>Close</Button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Register;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';

// const Register = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const navigate = useNavigate(); // Initialize useNavigate

//   const handleRegister = () => {
//     // Simulate successful registration
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     navigate('/event'); // Redirect to the event page when closing the modal
//   };

//   return (
//     <div className='h-screen w-full flex'>
//       {/* Left Side - Registration Form */}
//       <div className='w-full md:w-1/2 flex justify-center items-center'>
//         <Card className="w-full max-w-md shadow-lg">
//           <CardHeader className="space-y-1">
//             <CardTitle className="text-2xl">Register</CardTitle>
//           </CardHeader>
//           <CardContent className="grid gap-4">
//             <div className="relative">
//               <div className="absolute inset-0 flex items-center">
//                 <span className="w-full border-t" />
//               </div>
//             </div>
//             <div className="grid gap-2">
//               <Label htmlFor="name">Name</Label>
//               <Input id="name" type="text" />
//             </div>
//             <div className="grid gap-2">
//               <Label htmlFor="email">Email</Label>
//               <Input id="email" type="email" />
//             </div>
//             <div className="grid gap-2">
//               <Label htmlFor="password">Password</Label>
//               <Input id="password" type="password" />
//             </div>
//             <div className="grid gap-2">
//               <Label htmlFor="phone">Phone no</Label>
//               <Input id="phone" type="text" />
//             </div>
//           </CardContent>
//           <CardFooter>
//             <Button className="w-full" onClick={handleRegister}>Create account</Button>
//           </CardFooter>
//         </Card>
//       </div>

//       {/* Right Side - Circle Image */}
//       <div className='hidden md:flex md:w-1/2 justify-center items-center bg-gray-200'>
//         <img
//           src='https://i.pinimg.com/474x/ce/be/cd/cebecd6b6d5425e3dac00dfe006c983a.jpg' // Replace with your image URL
//           alt='Profile'
//           className='w-96 h-96 rounded-full object-cover border-4 border-white shadow-lg'
//         />
//       </div>

//       {/* Modal for Registration Success */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white p-6 rounded shadow-md text-center">
//             <h2 className="text-xl font-bold mb-4">Success</h2>
//             <p className="text-green-600 font-semibold mb-4">Registration successful!</p>
//             <Button onClick={closeModal}>Close</Button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Register;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: ''
  });
  const [errors, setErrors] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate(); 

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    return newErrors;
  };

  const handleRegister = () => {
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      setIsModalOpen(true);
    } else {
      setErrors(newErrors);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    navigate('/Login'); 
  };

  return (
    <div className='h-screen w-full flex'>
      {/* Left Side - Registration Form */}
      <div className='w-full md:w-1/2 flex justify-center items-center'>
        <Card className="w-full max-w-md shadow-lg">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">Register</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                className={errors.name ? 'border-red-500' : ''}
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                className={errors.email ? 'border-red-500' : ''}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={formData.password}
                onChange={handleInputChange}
                className={errors.password ? 'border-red-500' : ''}
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone">Phone no</Label>
              <Input
                id="phone"
                type="text"
                value={formData.phone}
                onChange={handleInputChange}
                className={errors.phone ? 'border-red-500' : ''}
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" onClick={handleRegister}>Create account</Button>
          </CardFooter>
        </Card>
      </div>

      {/* Right Side - Circle Image */}
      <div className='hidden md:flex md:w-1/2 justify-center items-center bg-gray-200'>
        <img
          src='https://i.pinimg.com/474x/ce/be/cd/cebecd6b6d5425e3dac00dfe006c983a.jpg'
          alt='Profile'
          className='w-96 h-96 rounded-full object-cover border-4 border-white shadow-lg'
        />
      </div>

      {/* Modal for Registration Success */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-md text-center">
            <h2 className="text-xl font-bold mb-4">Success</h2>
            <p className="text-green-600 font-semibold mb-4">Registration successful!</p>
            <Button onClick={closeModal}>Close</Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Register;
