import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Catalog } from './components/Catalog';
import { User } from './pages/User';
import { SignUp } from './pages/SignUp';
import { SignIn } from './pages/SignIn';
import { Home } from './pages/Home';

const router = createBrowserRouter ([
   {
      path: '/',
      element: <App/>,  
      children:[
        {
        index: true,
        element: <Home/>
      },
        {
          path: 'products',
          element: <Catalog/>
        },
        {
          path: 'user/me',
          element: <User/>
        },
        {
          path: '/signin',
          element: <SignIn/>
        },
        {
          path: '/signup',
          element: <SignUp/>
        },
        // {
        //   path: 'products/:idOfProduct',
        //   element: <CurrentProduct/>
        // },
      ]
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root'));
root.render(
  <React.StrictMode>
    
     
    <RouterProvider router={router} />
    
    
  </React.StrictMode>
);


