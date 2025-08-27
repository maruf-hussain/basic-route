
import { useLoaderData } from 'react-router'
import Meal from './Meal';

export default function Meals() {
    const Meals = useLoaderData();
    console.log(Meals);
    
  return (
    <div className='grid grid-cols-3 gap-4 m-20'>
        {
            Meals.meals.map(meal => <Meal
            key={meal.idMeal}
            meal={meal}
            ></Meal>)
        }
    </div>
  )
}
