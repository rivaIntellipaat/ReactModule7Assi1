import React from 'react';
import { useSelector } from 'react-redux';
import icon1 from './assests/icon1.png'
import icon2 from './assests/icon2.png'


const BookingList = () => {
  const bookings = useSelector((state) => state.bookings);



  return (
    <div>
      <ul className="space-y-4">
        {bookings.length ? (
          bookings.map((booking) => (
            <li key={booking.id} className=" border-b border-[#F49B33] p-4  flex">
              <img src={booking.image} alt={booking.restaurantName} className="w-[200px] h-[144px] rounded-md object-cover mr-4" />
              <div>
                <h3 className="font-bold text-2xl text-[#5E5E5E] ">{booking.restaurantName}</h3>


                <div className=' flex flex-col '>
                  <div className=' text-[#F49B33] ml-1 ' >
                    Reserved
                  </div>
                  <div className=' flex items-center '>
                    <img src={icon1}  alt='date ' className=' w-6 h-5 mr-3 ' />
                    {booking.date} | 12:15 PM
                  </div>
                  <div className=' flex items-center '>
                    <img src={icon2}  alt='date ' className=' w-6 h-5 mr-3 ' />
                    {booking.guests}
                  </div>


            



                </div>
              </div>
            </li>
          ))
        ) : (
          <li className="p-4 text-gray-500">No bookings available.</li>
        )}
      </ul>
    </div>
  );
};

export default BookingList;