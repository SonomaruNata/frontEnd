import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import mongoose from'mongoose';
import cors from 'cors';

// Import Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import Pages
import Home from './pages/Home/Home';
import AboutMe from './pages/AboutMe/AboutMe';
import Cart from './pages/Cart/Cart';
import Shop from './pages/Shop/Shop';
import ShoppingSchool from './pages/ShoppingSchool/ShoppingSchool';
import SignIn from './pages/SignIn/SignIn';
import NotFound from './pages/NotFound/NotFound'; 
// Import Admin and User Pages
import ProtectedRoute from './components/ProtectedRoute';

import AdminDashboard from './pages/Admin/AdminDashboard';
import ManageProducts from './pages/Admin/ManageProducts';
import ManageOrders from './pages/Admin/ManageOrders';
import ManageUsers from './pages/Admin/ManageUsers';

import Profile from './pages/User/Profile';
import Orders from './pages/User/Orders';

const currentUser = JSON.parse(localStorage.getItem('user'));
async function main() {

  await mongoose.connect('mongodb://127.0.0.1:27017/juliaraskin');

  
}
main().catch(err => console.log(err));
function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar is displayed on all pages */}
      
      <main className="py-4">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/shopping-school" element={<ShoppingSchool />} />

          {/* Admin Routes */}
       
<Route
  path="/admin"
  element={
    <ProtectedRoute user={currentUser}>
      <AdminDashboard />
    </ProtectedRoute>
  }
/>

          <Route
  path="/admin"
  element={
    <ProtectedRoute user={currentUser}>
      <AdminDashboard />
    </ProtectedRoute>
  }
/>

          <Route path="/admin/Admindashboard" element={<AdminDashboard />} />
          <Route path="/admin/manage-products" element={<ManageProducts />} />
          <Route path="/admin/manage-orders" element={<ManageOrders />} />
          <Route path="/admin/manage-users" element={<ManageUsers />} />

          {/* User Routes */}
          <Route path="/user/profile" element={<Profile />} />
          <Route path="/user/orders" element={<Orders />} />
           {/* Catch-All Route for Undefined Paths */}
           <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      
      <Footer /> {/* Footer is displayed on all pages */}
    </Router>
  );
}

export default App;
