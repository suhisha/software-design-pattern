import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const Register = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRegister = () => {
    // Simulate successful registration
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='h-full w-full flex justify-center items-center'>
      <Card className="w-1/4">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Register</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" type="text" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="roll">Email</Label>
            <Input id="roll" type="text" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Password</Label>
            <Input id="email" type="email" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="phone">Phone no</Label>
            <Input id="phone" type="text" />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={handleRegister}>Create account</Button>
        </CardFooter>
      </Card>

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
