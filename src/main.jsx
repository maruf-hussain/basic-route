import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './component/Home/Home';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Meals from './component/Meals/Meals';
import MealDetails from './component/Meals/MealDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
  {
    path:"/about",
    element: <About></About>
  },
  {
    path:"/contact",
    element: <Contact></Contact>
  },
  {

  path:"/meals",
  element: <Meals></Meals>,
  loader: ()=> fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=All')
  },
  {
  path: "/meal/:id",
  element: <MealDetails />,
  loader: async ({ params }) => {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`
    );
    return res.json(); // 👈 response কে json এ convert করে return করতে হবে
  }
}
    ]
  },
 
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
