import React from 'react';
import re1 from './assests/re1.png';
import re2 from './assests/re2.png';
import re3 from './assests/re3.png';
import re4 from './assests/re4.png';
import re5 from './assests/re5.png';
import re6 from './assests/re6.png';
import re7 from './assests/re7.png';
import re8 from './assests/re8.png';
import re9 from './assests/re9.png';

const RestaurantList = ({ onBook }) => {
  const restaurants = [
    {
      id: 1,
      name: 'Italian Bistro',
      image: re1,
      description: 'A cozy place serving authentic Italian cuisine with a modern twist.',
    },
    {
      id: 2,
      name: 'Sushi Place',
      image: re2,
      description: 'Fresh sushi and sashimi, prepared by experienced chefs in a vibrant setting.',
    },
    {
      id: 3,
      name: 'Steak House',
      image: re3,
      description: 'Prime cuts of meat grilled to perfection, complemented by a fine selection of wines.',
    },
    {
      id: 4,
      name: 'Vegan Cafe',
      image: re4,
      description: 'Delicious plant-based dishes that are both healthy and satisfying.',
    },
    {
      id: 5,
      name: 'Mexican Grill',
      image: re5,
      description: 'A fiesta of flavors with traditional Mexican dishes and vibrant atmosphere.',
    },
    {
      id: 6,
      name: 'Indian Spice',
      image: re6,
      description: 'Rich spices and bold flavors in a range of traditional Indian dishes.',
    },
  
    {
      id: 7,
      name: 'Vegan Cafe',
      image: re7,
      description: 'Delicious plant-based dishes that are both healthy and satisfying.',
    },
    {
      id: 8,
      name: 'Mexican Grill',
      image: re8,
      description: 'A fiesta of flavors with traditional Mexican dishes and vibrant atmosphere.',
    },
    {
      id: 9,
      name: 'Indian Spice',
      image: re9,
      description: 'Rich spices and bold flavors in a range of traditional Indian dishes.',
    },
    {
      id: 10,
      name: 'Italian Bistro',
      image: re1,
      description: 'A cozy place serving authentic Italian cuisine with a modern twist.',
    },
    {
      id: 11,
      name: 'Sushi Place',
      image: re2,
      description: 'Fresh sushi and sashimi, prepared by experienced chefs in a vibrant setting.',
    },
    {
      id: 12,
      name: 'Steak House',
      image: re3,
      description: 'Prime cuts of meat grilled to perfection, complemented by a fine selection of wines.',
    },



  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {restaurants.map((restaurant) => (
        <div key={restaurant.id} className="border hover:shadow-lg p-4 flex flex-col text-left">
          <img src={restaurant.image} alt={restaurant.name} className="w-full h-32 object-cover" />
          <h3 className="mt-2 text-lg font-bold text-[#5E5E5E]">{restaurant.name}</h3>
          <p className="mt-1 text-sm text-[#5E5E5E] text-left">{restaurant.description}</p>
          <button 
onClick={() => onBook(restaurant.name, restaurant.image) }        
    className="mt-4 bg-[#FFAD33] text-white py-2 px-4 w-8/12 hover:bg-[#b78b4a]"
          >
            Book Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default RestaurantList;