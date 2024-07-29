import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const Login = () => {
    return (
        <div className='h-full w-full flex justify-center items-center'>
            <Card className="w-1/4">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl">Login</CardTitle>
                    <CardDescription>
                        Enter your email below to login
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t" />
                        </div>
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="Enter email" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password" placeholder="Enter password" />
                    </div>
                </CardContent>
            
                <CardFooter className="flex flex-col items-center">
                    <Button className="w-full mb-2">
                        <Link to="/Register">Login</Link>
                    </Button>
                    <p className="text-sm text-gray-600"> 
                        Don't have an account? <Link to="/register" className="text-blue-500 hover:underline">Register here</Link>
                    </p>
                </CardFooter>
            </Card>
        </div>
    );
}

export default Login;
