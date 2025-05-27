import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
    Outlet
  } from "react-router";
  import Nav from '../component/Nav';
import Home from '../Pages/Home';
import Details from '../Pages/Details';
import Footer from '../component/Footer';

function Layout(){
    return(
        <>
        
<Nav/>
<Outlet/>
<Footer/>
      </>
    )
}
const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        { 
            path: "/", element: <Home/>
        },
        { 
            path: "/details/:id", element: <Details/>
        },

      ]
    },
  ]);


function Router() {
  return (
    <RouterProvider router={router} />
  )
}

export default Router