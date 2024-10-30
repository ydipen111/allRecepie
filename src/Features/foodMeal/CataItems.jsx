import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetFoodCataQuery, } from './foodMealApi';
import { CataItemsCard } from '../../Components/CataItemsCard';

function CataItems() {
  const { category } = useParams();
  console.log(category);
  const { data } = useGetFoodCataQuery(category);
  // const daata = data.meals;
  // console.log(daata);


  return (
    <div className='grid grid-cols-3'>
      Cataitems
      <CataItemsCard data={data} />
    </div>
  )
}

export default CataItems
