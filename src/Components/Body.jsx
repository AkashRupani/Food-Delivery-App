import React, { useState } from 'react'
import RestaurantCard from './RestaurantCard'
import resList from '../utils/mockData'

const Body = () => {
  const [resData, setResData] = useState(resList);
    
  return (
    <div className='body'>
        <div className='filter'>
          <button 
            className='filter-btn m-10 cursor-pointer border-2' 
            onClick={() => setResData(resData.filter((res) => res.info.avgRating >= 4))} 
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className='res-container'>
            {resData.map((restaurant) =>
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
            )}

        </div>
    </div>
  )
}

export default Body