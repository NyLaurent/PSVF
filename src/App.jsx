
import Landing from './Components/Landing Page/Landing'
import Apply from './Components/Other Routes/Apply'
import Articles from './Components/Other Routes/Articles'
import History from './Components/Other Routes/History'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider
}from 'react-router-dom';


const router =createBrowserRouter([
  {
  path:'/',
  element: <div><Landing></Landing></div>
},
{
  path:'/Apply',
  element: <div><Apply/></div>
},
{
  path:'/Articles',
  element: <div><Articles/></div>
},
{
  path:'/History',
  element: <div><History/></div>
},

])






function App() {
  
  return (
   <div>
    <RouterProvider router={router}/>
   
   </div>
    
    
    
    );
    }

export default App

