// import React, { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const ContactForm = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         phone: '',
//         message: ''
//     });
//     const [loading, setLoading] = useState(false);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);

//         // Simulate form submission
//         try {
//             // You can replace this with actual API call
//             await new Promise((resolve) => setTimeout(resolve, 2000));

//             toast.success('Message sent successfully!', {
//                 position: toast.POSITION.TOP_RIGHT,
//                 autoClose: 3000,
//             });
//             setFormData({ name: '', email: '', phone: '', message: '' });
//         } catch (error) {
//             toast.error('Failed to send message', {
//                 position: toast.POSITION.TOP_RIGHT,
//                 autoClose: 3000,
//             });
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="p-4 max-w-lg mx-auto">
//             <ToastContainer />
//             <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
//             <form onSubmit={handleSubmit} className="space-y-4">
//                 <div className="grid gap-2">
//                     <Label htmlFor="name">Name</Label>
//                     <Input
//                         id="name"
//                         name="name"
//                         type="text"
//                         placeholder="Your Name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div className="grid gap-2">
//                     <Label htmlFor="email">Email</Label>
//                     <Input
//                         id="email"
//                         name="email"
//                         type="email"
//                         placeholder="Your Email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div className="grid gap-2">
//                     <Label htmlFor="phone">Phone</Label>
//                     <Input
//                         id="phone"
//                         name="phone"
//                         type="text"
//                         placeholder="Your Phone Number"
//                         value={formData.phone}
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <div className="grid gap-2">
//                     <Label htmlFor="message">Message</Label>
//                     <textarea
//                         id="message"
//                         name="message"
//                         placeholder="Your Message"
//                         value={formData.message}
//                         onChange={handleChange}
//                         rows="4"
//                         className="w-full border rounded-md p-2"
//                         required
//                     />
//                 </div>
//                 <Button type="submit" className="w-full" disabled={loading}>
//                     {loading ? 'Sending...' : 'Send Message'}
//                 </Button>
//             </form>
//         </div>
//     );
// };

// export default ContactForm;


import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Simulate form submission
        try {
            // You can replace this with actual API call
            await new Promise((resolve) => setTimeout(resolve, 2000));

            toast.success('Message sent successfully!', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
            });
            setFormData({ name: '', email: '', phone: '', message: '' });
        } catch (error) {
            toast.error('Failed to send message', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-4 max-w-2xl mx-auto">
            <ToastContainer />
            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold">Contact Us</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid gap-2">
                            <Label htmlFor="name">Name</Label>
                            <Input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="phone">Phone</Label>
                            <Input
                                id="phone"
                                name="phone"
                                type="text"
                                placeholder="Your Phone Number"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="message">Message</Label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="4"
                                className="w-full border rounded-md p-2"
                                required
                            />
                        </div>
                        <Button type="submit" className="w-full" disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default ContactForm;

