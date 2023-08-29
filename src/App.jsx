import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; // Make sure to import Route
import HomePage from './pagess/homepage'; 
import ProductPage from './pagess/productss';
import "./pagess/homepage/home.css";
import Login from './component/Login/login';
import Register from './component/Register/register';
import TrackOrder from './component/Track Order/trackorder';
import ContactUs from './component/Contact us/contact'; // Import the ContactUs component
import AboutUs from './component/About us/aboutus'; // Import the AboutUs component
import Policies from './component/Policies/policies'; // Import the Policies component
import { CartContainer } from './cart/cartcontext';
import Cart from './pagess/cart/cart';
import Header from './header/header';
import Footer from './footer/footer';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <Header /> 
        <HomePage />
        <Footer /> 
      </div>
    ),
  },
  {
    path: '/products/:name',
    element: (
      <div>
        <Header /> 
        <ProductPage />
        <Footer /> 
      </div>
    ),
  },
  {
    path: '/cart',
    element: (
      <div>
        <Header />
        <Cart />
        <Footer />
      </div>
    ),
  },
  {
    path: '/login',
    element: (
      <div>
        <Header />
        <Login />
        <Footer />
      </div>
    ),
  },
  {
    path: '/register',
    element: (
      <div>
        <Header />
        <Register />
        <Footer />
      </div>
    ),
  },
  {
    path: '/track-order',
    element: (
      <div>
        <Header />
        <TrackOrder />
        <Footer />
      </div>
    ),
  },
  {
    path: '/contact', 
    element: (
      <div>
        <Header />
        <ContactUs />
        <Footer />
      </div>
    ),
  },
  {
    path: '/about', 
    element: (
      <div>
        <Header />
        <AboutUs />
        <Footer />
      </div>
    ),
  },
  {
    path: '/policies', 
    element: (
      <div>
        <Header />
        <Policies />
        <Footer />
      </div>
    ),
  },
]);

function App() {
  return (
    <CartContainer>
      <RouterProvider router={router} />
    </CartContainer>
  );
}

export default App;
