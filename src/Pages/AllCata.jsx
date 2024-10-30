import React from 'react'
import FoodCata from '../Features/foodMeal/FoodCata'
import { useNavigate } from 'react-router-dom'

function AllCata() {
  const nav = useNavigate();
  return (
    <div>
      <ul className='space-y-2 px-4 py-4'>
        <li className='bg-orange-400 max-w-[200px] px-4 py-3 rounded-md text-white cursor-grab text-xl' onClick={() => nav('/food-cata')}>Food-catageory</li>
        <li>Juice-catageory</li>
        <li>Drinks-catageory</li>
        <li>Country-catageory</li>
      </ul>

    </div>
  )
}

export default AllCata
