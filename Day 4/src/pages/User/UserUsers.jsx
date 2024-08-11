// import React, { useState } from 'react';
// import {
//     Table,
//     TableBody,
//     TableCell,
//     TableHead,
//     TableHeader,
//     TableRow,
// } from "@/components/ui/table";

// import { Edit, Bookmark, Calendar, Ticket } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import {
//     Card,
//     CardContent,
//     CardHeader,
//     CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import {
//     Sheet,
//     SheetContent,
//     SheetFooter,
//     SheetHeader,
//     SheetTitle,
// } from "@/components/ui/sheet";

// const UserUsers = () => {
//     const [open, setOpen] = useState(false);
//     const [formData, setFormData] = useState({
//         name: 'John Doe',
//         email: 'john@example.com',
//         contactNumber: '123-456-7890',
//     });
//     const [editMode, setEditMode] = useState(false);

//     const eventsAttended = [
//         { id: 1, name: "Event A", date: "2023-01-01" },
//         { id: 2, name: "Event B", date: "2023-02-01" },
//     ];

//     const bookmarkedEvents = [
//         { id: 1, name: "Event C", date: "2023-03-01" },
//         { id: 2, name: "Event D", date: "2023-04-01" },
//     ];

//     const ticketsPurchased = [
//         { id: 1, name: "Event A", ticketCount: 2 },
//         { id: 2, name: "Event B", ticketCount: 1 },
//     ];

//     const handleInputChange = (e) => {
//         const { id, value } = e.target;
//         setFormData((prevData) => ({ ...prevData, [id]: value }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setOpen(false);
//         setEditMode(false);
//     };

//     return (
//         <div className='m-4 p-6 bg-gray-100 rounded-lg shadow-lg'>
//             <Card className='shadow-lg mb-4'>
//                 <CardHeader className='w-full flex flex-row justify-between items-center bg-[#DF425C] p-4 rounded-t-lg'>
//                     <CardTitle className='text-black'>User Profile</CardTitle>
//                     <Button className='bg-black hover:bg-gray-800 text-white' onClick={() => { setOpen(true); setEditMode(true); }}>
//                         <Edit className='h-5 w-5 mr-2 text-[#DF425C]' /> Edit Profile
//                     </Button>
//                 </CardHeader>
//                 <CardContent className='p-4'>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                         <div>
//                             <Label className="text-gray-700 font-semibold">Name:</Label>
//                             <div>{formData.name}</div>
//                          </div>
//                         <div>
//                             <Label className="text-gray-700 font-semibold">Email:</Label>
//                             <div>{formData.email}</div>
//                         </div>
//                         <div>
//                             <Label className="text-gray-700 font-semibold">Contact Number:</Label>
//                             <div>{formData.contactNumber}</div>
//                         </div>
//                     </div>
//                 </CardContent>
//             </Card>

//             <Card className='shadow-lg mb-4'>
//                 <CardHeader className='bg-gray-200 p-4'>
//                     <CardTitle className='text-gray-800'>Events Attended</CardTitle>
//                 </CardHeader>
//                 <CardContent className='p-4'>
//                     <Table className='min-w-full'>
//                         <TableHeader>
//                             <TableRow>
//                                 <TableHead className="p-2">Event Name</TableHead>
//                                 <TableHead className="p-2">Date</TableHead>
//                             </TableRow>
//                         </TableHeader>
//                         <TableBody>
//                             {eventsAttended.map((event) => (
//                                 <TableRow key={event.id} className='hover:bg-gray-500'>
//                                     <TableCell className="p-2">{event.name}</TableCell>
//                                     <TableCell className="p-2">{event.date}</TableCell>
//                                 </TableRow>
//                             ))}
//                         </TableBody>
//                     </Table>
//                 </CardContent>
//             </Card>

//             <Card className='shadow-lg mb-4'>
//                 <CardHeader className='bg-gray-200 p-4'>
//                     <CardTitle className='text-gray-800'>Bookmarked Events</CardTitle>
//                 </CardHeader>
//                 <CardContent className='p-4'>
//                     <Table className='min-w-full'>
//                         <TableHeader>
//                             <TableRow>
//                                 <TableHead className="p-2">Event Name</TableHead>
//                                 <TableHead className="p-2">Date</TableHead>
//                             </TableRow>
//                         </TableHeader>
//                         <TableBody>
//                             {bookmarkedEvents.map((event) => (
//                                 <TableRow key={event.id} className='hover:bg-gray-500'>
//                                     <TableCell className="p-2">{event.name}</TableCell>
//                                     <TableCell className="p-2">{event.date}</TableCell>
//                                 </TableRow>
//                             ))}
//                         </TableBody>
//                     </Table>
//                 </CardContent>
//             </Card>

//             <Card className='shadow-lg mb-4'>
//                 <CardHeader className='bg-gray-200 p-4'>
//                     <CardTitle className='text-gray-800'>Tickets Purchased</CardTitle>
//                 </CardHeader>
//                 <CardContent className='p-4'>
//                     <Table className='min-w-full'>
//                         <TableHeader>
//                             <TableRow>
//                                 <TableHead className="p-2">Event Name</TableHead>
//                                 <TableHead className="p-2">Tickets</TableHead>
//                             </TableRow>
//                         </TableHeader>
//                         <TableBody>
//                             {ticketsPurchased.map((ticket) => (
//                                 <TableRow key={ticket.id} className='hover:bg-gray-500'>
//                                     <TableCell className="p-2">{ticket.name}</TableCell>
//                                     <TableCell className="p-2">{ticket.ticketCount}</TableCell>
//                                 </TableRow>
//                             ))}
//                         </TableBody>
//                     </Table>
//                 </CardContent>
//             </Card>

//             <Sheet open={open} onOpenChange={setOpen}>
//                 <SheetContent className='p-4'>
//                     <SheetHeader>
//                         <SheetTitle className='text-[#DF425C]'>{editMode ? "Edit Profile" : "Add Organizer"}</SheetTitle>
//                     </SheetHeader>
//                     <form onSubmit={handleSubmit} className="grid gap-4 py-4">
//                         <div className="flex flex-col items-start gap-2">
//                             <Label htmlFor="name" className="text-right font-semibold">
//                                 Name
//                             </Label>
//                             <Input id="name" value={formData.name} onChange={handleInputChange} className="col-span-3 border-gray-300 rounded" required />
//                         </div>
//                         <div className="flex flex-col items-start gap-2">
//                             <Label htmlFor="email" className="text-right font-semibold">
//                                 Email
//                             </Label>
//                             <Input id="email" value={formData.email} onChange={handleInputChange} className="col-span-3 border-gray-300 rounded" required />
//                         </div>
//                         <div className="flex flex-col items-start gap-2">
//                             <Label htmlFor="contactNumber" className="text-right font-semibold">
//                                 Contact Number
//                             </Label>
//                             <Input id="contactNumber" value={formData.contactNumber} onChange={handleInputChange} className="col-span-3 border-gray-300 rounded" required />
//                         </div>
//                         <SheetFooter className='flex flex-col flex-1 gap-2 mt-4'>
//                             <Button className='w-full bg-[#DF425C] hover:bg-[#B03646] text-white' type="button" onClick={() => setOpen(false)}>Cancel</Button>
//                             <Button type="submit" className='w-full bg-black hover:bg-gray-800 text-white'>{editMode ? "Save changes" : "Add Organizer"}</Button>
//                         </SheetFooter>
//                     </form>
//                 </SheetContent>
//             </Sheet>
//         </div>
//     );
// };

// export default UserUsers;
import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Edit, Plus, TrashIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const UserDashboard = () => {
  const [open, setOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: ''
  });
  const [activities, setActivities] = useState([
    {
      id: 1,
      title: "Joined Event",
      date: "2024-07-01",
      details: "Attended the Summer Gala."
    },
    {
      id: 2,
      title: "Created Event",
      date: "2024-07-15",
      details: "Organized a workshop on React."
    },
  ]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editMode) {
      // Update profile details or activities
    } else {
      // Add new activity
      setActivities((prevActivities) => [
        ...prevActivities,
        { id: activities.length + 1, ...formData },
      ]);
    }
    setOpen(false);
    setEditMode(false);
    setFormData({ name: '', email: '', contactNumber: '' });
  };

  const handleEditActivity = (activity) => {
    setFormData({
      title: activity.title,
      date: activity.date,
      details: activity.details,
    });
    setOpen(true);
    setEditMode(true);
  };

  const handleDeleteActivity = (activityId) => {
    setActivities((prevActivities) => prevActivities.filter((activity) => activity.id !== activityId));
  };

  return (
    <div className='m-4 p-6 bg-gray-100 rounded-lg shadow-lg'>
      <Card className='shadow-lg'>
        <CardHeader className='w-full flex flex-row justify-between items-center bg-[#DF425C] p-4 rounded-t-lg'>
          <CardTitle className='text-black'>My Dashboard</CardTitle>
          <Button className='bg-black hover:bg-gray-800 text-white' onClick={() => { setOpen(true); setEditMode(false); }}>
            <Plus className='h-5 w-5 mr-2 text-[#DF425C]' /> Add Activity
          </Button>
        </CardHeader>
        <CardContent className='p-4'>
          <Table className='min-w-full'>
            <TableHeader>
              <TableRow className='bg-gray-200'>
                <TableHead className="w-[200px] p-2">Title</TableHead>
                <TableHead className="p-2">Date</TableHead>
                <TableHead className="p-2">Details</TableHead>
                <TableHead className="p-2 flex justify-center">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {activities.map((activity) => (
                <TableRow key={activity.id} className='hover:bg-gray-500'>
                  <TableCell className="font-medium p-2">{activity.title}</TableCell>
                  <TableCell className="p-2">{activity.date}</TableCell>
                  <TableCell className="p-2">{activity.details}</TableCell>
                  <TableCell className="p-2 flex justify-center items-center gap-3">
                    <Edit className='h-6 w-6 text-[#DF425C] cursor-pointer hover:text-[#B03646]' onClick={() => handleEditActivity(activity)} />
                    <TrashIcon className='h-6 w-6 text-black cursor-pointer hover:text-gray-800' onClick={() => handleDeleteActivity(activity.id)} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent className='p-4'>
          <SheetHeader>
            <SheetTitle className='text-[#DF425C]'>{editMode ? "Edit Activity" : "Add Activity"}</SheetTitle>
          </SheetHeader>
          <form onSubmit={handleSubmit} className="grid gap-4 py-4">
            {!editMode && (
              <>
                <div className="flex flex-col items-start gap-2">
                  <Label htmlFor="title" className="text-right font-semibold">
                    Title
                  </Label>
                  <Input id="title" value={formData.title} onChange={handleInputChange} className="col-span-3 border-gray-300 rounded" required />
                </div>
                <div className="flex flex-col items-start gap-2">
                  <Label htmlFor="date" className="text-right font-semibold">
                    Date
                  </Label>
                  <Input id="date" type="date" value={formData.date} onChange={handleInputChange} className="col-span-3 border-gray-300 rounded" required />
                </div>
                <div className="flex flex-col items-start gap-2">
                  <Label htmlFor="details" className="text-right font-semibold">
                    Details
                  </Label>
                  <Input id="details" value={formData.details} onChange={handleInputChange} className="col-span-3 border-gray-300 rounded" required />
                </div>
              </>
            )}
            {editMode && (
              <>
                <div className="flex flex-col items-start gap-2">
                  <Label htmlFor="name" className="text-right font-semibold">
                    Title
                  </Label>
                  <Input id="name" value={formData.name} onChange={handleInputChange} className="col-span-3 border-gray-300 rounded" required />
                </div>
                <div className="flex flex-col items-start gap-2">
                  <Label htmlFor="email" className="text-right font-semibold">
                    Date
                  </Label>
                  <Input id="email" value={formData.email} onChange={handleInputChange} className="col-span-3 border-gray-300 rounded" required />
                </div>
                <div className="flex flex-col items-start gap-2">
                  <Label htmlFor="contactNumber" className="text-right font-semibold">
                    Details
                  </Label>
                  <Input id="contactNumber" value={formData.contactNumber} onChange={handleInputChange} className="col-span-3 border-gray-300 rounded" required />
                </div>
              </>
            )}
            <SheetFooter className='flex flex-col flex-1 gap-2 mt-4'>
              <Button className='w-full bg-[#DF425C] hover:bg-[#B03646] text-white' type="button" onClick={() => setOpen(false)}>Cancel</Button>
              <Button type="submit" className='w-full bg-black hover:bg-gray-800 text-white'>{editMode ? "Save changes" : "Add Activity"}</Button>
            </SheetFooter>
          </form>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default UserDashboard;
;
