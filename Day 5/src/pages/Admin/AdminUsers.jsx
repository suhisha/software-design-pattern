import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { BellRing, Check, Edit, Plus, TrashIcon } from "lucide-react";
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

const AdminUsers = () => {
  const [open, setOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    contactNumber: ''
  });
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Doe",
      organization: "EventCorp",
      email: "john@example.com",
      contactNumber: "123-456-7890",
    },
    {
      id: 2,
      name: "Jane Smith",
      organization: "EventsRUs",
      email: "jane@example.com",
      contactNumber: "098-765-4321",
    },
  ]);
  const [currentUserId, setCurrentUserId] = useState(null);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editMode) {
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === currentUserId ? { ...user, ...formData } : user
        )
      );
    } else {
      setUsers((prevUsers) => [
        ...prevUsers,
        { id: users.length + 1, ...formData },
      ]);
    }
    setOpen(false);
    setEditMode(false);
    setFormData({ name: '', organization: '', email: '', contactNumber: '' });
  };

  const handleEdit = (user) => {
    setFormData({
      name: user.name,
      organization: user.organization,
      email: user.email,
      contactNumber: user.contactNumber,
    });
    setCurrentUserId(user.id);
    setEditMode(true);
    setOpen(true);
  };

  const handleDelete = (userId) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  };

  return (
    <div className='m-4 p-6 bg-gray-100 rounded-lg shadow-lg'>
      <Card className='shadow-lg'>
        <CardHeader className='w-full flex flex-row justify-between items-center bg-[#DF425C] p-4 rounded-t-lg'>
          <CardTitle className='text-black'>Event Organizers</CardTitle>
          <Button className='bg-black hover:bg-gray-800 text-white' onClick={() => { setOpen(true); setEditMode(false); }}>
            <Plus className='h-5 w-5 mr-2 text-[#DF425C]' /> Add
          </Button>
        </CardHeader>
        <CardContent className='p-4'>
          <Table className='min-w-full'>
            <TableHeader>
              <TableRow className='bg-gray-200'>
                <TableHead className="w-[100px] p-2">Name</TableHead>
                <TableHead className="p-2">Organization</TableHead>
                <TableHead className="p-2">Email</TableHead>
                <TableHead className="p-2">Contact Number</TableHead>
                <TableHead className="p-2 flex justify-center">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id} className='hover:bg-gray-500'>
                  <TableCell className="font-medium p-2">{user.name}</TableCell>
                  <TableCell className="p-2">{user.organization}</TableCell>
                  <TableCell className="p-2">{user.email}</TableCell>
                  <TableCell className="p-2">{user.contactNumber}</TableCell>
                  <TableCell className="p-2 flex justify-center items-center gap-3">
                    <Edit className='h-6 w-6 text-[#DF425C] cursor-pointer hover:text-[#B03646]' onClick={() => handleEdit(user)} />
                    <TrashIcon className='h-6 w-6 text-black cursor-pointer hover:text-gray-800' onClick={() => handleDelete(user.id)} />
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
            <SheetTitle className='text-[#DF425C]'>{editMode ? "Edit Organizer" : "Add Organizer"}</SheetTitle>
          </SheetHeader>
          <form onSubmit={handleSubmit} className="grid gap-4 py-4">
            <div className="flex flex-col items-start gap-2">
              <Label htmlFor="name" className="text-right font-semibold">
                Name
              </Label>
              <Input id="name" value={formData.name} onChange={handleInputChange} className="col-span-3 border-gray-300 rounded" required />
            </div>
            <div className="flex flex-col items-start gap-2">
              <Label htmlFor="organization" className="text-right font-semibold">
                Organization
              </Label>
              <Input id="organization" value={formData.organization} onChange={handleInputChange} className="col-span-3 border-gray-300 rounded" required />
            </div>
            <div className="flex flex-col items-start gap-2">
              <Label htmlFor="email" className="text-right font-semibold">
                Email
              </Label>
              <Input id="email" value={formData.email} onChange={handleInputChange} className="col-span-3 border-gray-300 rounded" required />
            </div>
            <div className="flex flex-col items-start gap-2">
              <Label htmlFor="contactNumber" className="text-right font-semibold">
                Contact Number
              </Label>
              <Input id="contactNumber" value={formData.contactNumber} onChange={handleInputChange} className="col-span-3 border-gray-300 rounded" required />
            </div>
            <SheetFooter className='flex flex-col flex-1 gap-2 mt-4'>
              <Button className='w-full bg-[#DF425C] hover:bg-[#B03646] text-white' type="button" onClick={() => setOpen(false)}>Cancel</Button>
              <Button type="submit" className='w-full bg-black hover:bg-gray-800 text-white'>{editMode ? "Save changes" : "Add Organizer"}</Button>
            </SheetFooter>
          </form>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default AdminUsers;
