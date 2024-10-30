import React from 'react'
import { useGetFoodMealQuery } from '../Features/foodMeal/foodMealApi';
import AllCata from './AllCata';

function Home() {
  const { data, isError, isLoading, isFetching, isSuccess } = useGetFoodMealQuery();
  console.log(data);

  return (
    <div className='px-[10%]'>

      <AllCata />



    </div>
  )
}

export default Home
