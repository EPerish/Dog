import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { User } from './pages/User';
import { SignUp } from './pages/SignUp';
import { SignIn } from './pages/SignIn';
import { Home } from './pages/Home';
import { Catalog } from './pages/Catalog';
import {CurrentProduct} from './pages/CurrentProduct/index'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { store } from './redux/store';

const queryClient = new QueryClient()

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
          element: <Catalog />
        },
        {
          path: 'products/:idOfProduct',
          element: <CurrentProduct/>
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
       
      ]
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store = {store}>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);


