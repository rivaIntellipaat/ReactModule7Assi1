import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBooking } from './redux/action';
import icon1 from './assests/icon1.png'; // Ensure the path is correct
import icon2 from './assests/icon2.png';

const BookingForm = ({ restaurantName, restaurantImage, onClose }) => {
    const [guests, setGuests] = useState(1);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [date, setDate] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const booking = { 
            id: Date.now(), 
            restaurantName, 
            guests, 
            email, 
            name, 
            mobile, 
            date, 
            image: restaurantImage // Ensure this is a valid string
        };
        dispatch(addBooking(booking));
        alert('Booking confirmed!');
        onClose();
    };

    const incrementGuests = () => setGuests((prev) => prev + 1);
    const decrementGuests = () => setGuests((prev) => (prev > 1 ? prev - 1 : 1));

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/3">
                <h2 className="text-2xl font-bold mb-4">Book a Table at {restaurantName}</h2>
                <form onSubmit={handleSubmit}>
                  
           
                  
                    
                    <div className="flex items-center mb-4">
                    <img src={icon2} className='h-6 w-6 ml-2' alt="Guest Icon" />
                    <div   className=' ml-3 ' >

                    <button type="button" onClick={decrementGuests} className="bg-[#F6F7F8] h-6 w-6  text-[#33A0FF] ">
                            -
                        </button>
                        <input
                            type="number"
                            value={guests}
                            readOnly 
                            className=" bg-[#F6F7F8] text-center w-10 h-6outline-none"
                        />
                        <button type="button" onClick={incrementGuests} className="bg-[#F6F7F8] h-6 w-4  text-[#33A0FF] ">
                            +
                        </button>
                    </div>

                    </div>
                    <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required
                            className="m-1 mb-3"
                            min={new Date().toISOString().split('T')[0]} // Prevent past dates
                          
                        />

                    <input
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="border p-2 mb-4 w-full"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="border p-2 mb-4 w-full"
                    />
                    <input
                        type="tel"
                        placeholder="Your Mobile"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        required
                        className="border p-2 mb-4 w-full"
                    />

                    <button type="submit" className="bg-[#F49B33] text-white py-2 px-4 rounded hover:bg-blue-600 w-full">
                        Book Now
                    </button>
                </form>
                <button onClick={onClose} className="mt-4 text-red-500 hover:underline">
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default BookingForm;