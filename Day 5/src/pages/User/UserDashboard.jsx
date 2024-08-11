// import React from 'react';
// import {
//     Card,
//     CardContent,
//     CardHeader,
//     CardTitle,
// } from "@/components/ui/card";
// import { Calendar, Ticket, Star, DollarSign } from 'lucide-react';

// const UserDashboard = () => {
//     return (
//         <div className="flex flex-row p-4 gap-4">
//             <Card className='w-1/4 border border-primary'>
//                 <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//                     <CardTitle className="text-sm font-medium">
//                         Upcoming Events
//                     </CardTitle>
//                     <Calendar className="h-6 w-6 text-primary" />
//                 </CardHeader>
//                 <CardContent>
//                     <div className="text-2xl font-bold">3</div>
//                 </CardContent>
//             </Card>
//             <Card className='w-1/4 border border-primary'>
//                 <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//                     <CardTitle className="text-sm font-medium">
//                         Tickets Purchased
//                     </CardTitle>
//                     <Ticket className="h-6 w-6 text-primary" />
//                 </CardHeader>
//                 <CardContent>
//                     <div className="text-2xl font-bold">12</div>
//                 </CardContent>
//             </Card>
//             <Card className='w-1/4 border border-primary'>
//                 <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//                     <CardTitle className="text-sm font-medium">
//                         Favorite Events
//                     </CardTitle>
//                     <Star className="h-6 w-6 text-primary" />
//                 </CardHeader>
//                 <CardContent>
//                     <div className="text-2xl font-bold">5</div>
//                 </CardContent>
//             </Card>
//             <Card className='w-1/4 border border-primary'>
//                 <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//                     <CardTitle className="text-sm font-medium">
//                         Total Spending
//                     </CardTitle>
//                     <DollarSign className="h-6 w-6 text-primary" />
//                 </CardHeader>
//                 <CardContent>
//                     <div className="text-2xl font-bold">$1,200</div>
//                 </CardContent>
//             </Card>
//         </div>
//     );
// };

// export default UserDashboard;
import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, Heart, Ticket } from 'lucide-react';

const UserDashboard = () => {
  const eventsAttended = [
    { id: 1, name: "Event X", date: "2024-05-10" },
    { id: 2, name: "Event Y", date: "2024-06-15" },
  ];

  const bookmarkedEvents = [
    { id: 1, name: "Event Z", date: "2024-07-01" },
    { id: 2, name: "Event W", date: "2024-08-10" },
  ];

  const ticketsPurchased = [
    { id: 1, name: "Event X", ticketCount: 3 },
    { id: 2, name: "Event Y", ticketCount: 2 },
  ];

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {/* Events Attended Card */}
      <Card className='border border-primary'>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Events Attended</CardTitle>
          <Calendar className="h-6 w-6 text-primary" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{eventsAttended.length}</div>
        </CardContent>
      </Card>

      {/* Bookmarked Events Card */}
      <Card className='border border-primary'>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Bookmarked Events</CardTitle>
          <Heart className="h-6 w-6 text-primary" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{bookmarkedEvents.length}</div>
        </CardContent>
      </Card>

      {/* Tickets Purchased Card */}
      <Card className='border border-primary'>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Tickets Purchased</CardTitle>
          <Ticket className="h-6 w-6 text-primary" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{ticketsPurchased.reduce((acc, ticket) => acc + ticket.ticketCount, 0)}</div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserDashboard;
