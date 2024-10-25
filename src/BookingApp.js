import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import BookingForm from './BookingForm';
import BookingList from './BookingList';
import RestaurantList from './RestaurantList';

const BookingApp = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null); // New state for the image
  const [showForm, setShowForm] = useState(false);
  const [showList, setShowList] = useState(false);

  const handleBook = (restaurantName, restaurantImage) => {
    setSelectedRestaurant(restaurantName);
    setSelectedImage(restaurantImage); // Set the selected image
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setSelectedRestaurant(null);
    setSelectedImage(null); // Reset image state
  };

  const handleShowList = () => {
    setShowList(true);
    setShowForm(false);
  };

  const handleBackToRestaurants = () => {
    setShowList(false);
    setShowForm(false);
  };

  return (
    <Provider store={store}>
      <div className="p-6">
        <h1 className="text-4xl flex w-screen justify-center font-bold mb-4 bg-slate-50 text-[#af7b2d]">Restaurant Booking System</h1>
        {showForm && (
          <BookingForm restaurantName={selectedRestaurant} restaurantImage={selectedImage} onClose={handleCloseForm} />
        )}
        {!showList && !showForm && (
          <RestaurantList onBook={handleBook} />
        )}
        {showList && !showForm && (
          <div>
            <h2 className="text-3xl font-bold border-b pb-2  border-[#F49B33] text-[#5E5E5E] mb-4">History and Recent Bookings</h2>
            <BookingList />
            <button 
              onClick={handleBackToRestaurants} 
              className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
            >
              Back to Restaurant List
            </button>
          </div>
        )}
        {!showForm && !showList && (
          <button 
            onClick={handleShowList} 
            className="mt-4 bg-green-500 flex justify-center w-screen text-white py-2 px-4 rounded hover:bg-green-600"
          >
            Go to Booking List
          </button>
        )}
      </div>
    </Provider>
  );
};

export default BookingApp;