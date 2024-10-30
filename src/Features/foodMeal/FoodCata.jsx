import React from 'react'
import { useGetFoodMealQuery } from './foodMealApi.js'
import { ShowCata } from '../../Components/ShowCata.jsx';

function FoodCata() {
  const { data } = useGetFoodMealQuery();
  // console.log(data);

  // const daata = data.categories[0];
  // console.log(daata);

  ;

  return (
    <div className='px-[2%] w-screen '>
      {data && <ShowCata data={data} />}

      {/* {data.categories.map((data, key) => {
        return <div key={key}>
          <h1>{data.strCategory}</h1>

        </div>
      })} */}


    </div>
  )
}

export default FoodCata
