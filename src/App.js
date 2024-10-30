import { Button } from '@material-tailwind/react'
import React from 'react'
import Rootlayout from './Pages/Rootlayout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Header } from './Components/Header'
import Home from './Pages/Home'
import FoodCata from './Features/foodMeal/FoodCata'
import CataItems from './Features/foodMeal/CataItems'


function App() {
  const router = createBrowserRouter([{
    path: '/',
    element: <Rootlayout />,
    children: [{
      index: true,
      element: <Home />
    },
    {
      path: 'food-cata',
      element: <FoodCata />
    },
    {
      path: 'cata-items/:category',
      element: <CataItems />
    }

    ]
  }])
  return (
    <RouterProvider router={router} />
  )
}

export default App
