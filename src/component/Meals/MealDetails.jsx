import React from 'react'
import { useLoaderData, useNavigate } from 'react-router';


export default function MealDetails() {
  const data = useLoaderData();   // { meals: [ {...} ] }
  const meal = data.meals[0];     // প্রথম meal object নেওয়া হলো
  const { strMeal, strMealThumb, strCategory, strArea, strInstructions } = meal;

  const nabigate = useNavigate();
  const goBack = () => {
    nabigate(-1);
  }

  return (
    <div className='m-20'>
        <h2>MealDetails</h2>
        <h3>{strMeal}</h3>
        <img className='w-96' src={strMealThumb} alt="" />
        <p>Category: {strCategory}</p>
        <p>Area: {strArea}</p>
        <p>Instructions: {strInstructions}</p>

        <button className='bg-black p-4 mt-3 text-amber-50' onClick={goBack}>Go Back</button>
        
    </div>
  )
}
