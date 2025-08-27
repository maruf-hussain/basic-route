import React from 'react'
import { Link, useNavigate } from 'react-router';

export default function Meal({meal}) {
    const {idMeal,strMeal, strMealThumb, strInstructions} = meal;
    const navigate = useNavigate();
    const showDetails = () => {
        navigate(`/meal/${idMeal}`);
    }
  return (
    <div>
        <h2>{strMeal}</h2>
        <img className='w-64' src={strMealThumb} alt="" />
        <p>{strInstructions}</p>
        {/* <Link className='mt-4 bg-amber-600 p-2'  to={`/meal/${idMeal}`}><button>Meal Details</button></Link> */}
        <button className='mt-6 bg-emerald-400 p-4' onClick={showDetails}>Show Meal Details</button>
    </div>
  )
}
