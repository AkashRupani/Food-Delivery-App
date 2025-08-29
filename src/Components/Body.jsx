import React from 'react'
import RestaurantCard from './RestaurantCard'

const Body = () => {
  return (
    <div className='body'>
        <div className='search'>Search</div>
        <div className='res-container'>
            <RestaurantCard
                image="https://www.poojn.in/wp-content/uploads/2025/04/The-Business-of-Indian-Cuisine-Restaurants-Catering-Explained.jpeg.jpg"
                name="Great Indian Restaurant"
                cuisine="Indian Thali"
                rating="4.5"
                deliveryTime="30"
            />

        </div>
    </div>
  )
}

export default Body