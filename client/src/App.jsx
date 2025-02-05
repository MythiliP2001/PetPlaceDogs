import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home'

import Signup from './components/signup/SignUp';
import PetFood from './components/ProductsCard/petfood/PetFood';
import PetAccessories from './components/ProductsCard/pettoys/PetToys';
import ExploreCategory from './components/explorecategory/ExploreCategory';
import PetCloth from './components/ProductsCard/petcloth/PetCloth';
import Dashboard from './components/categories/dashboard/Dashboard';
// import ProtectedRoute from './components/categories/ProtectedRoute';
import AdoptionBanner from './components/adoption/AdoptionBanner';
import About from './components/pages/about/About';
import Contact from './components/pages/contact/Contact';
import Gallery from './components/pages/Gallery/Gallery';
import PetDetails from './components/pages/petdetails/PetDetails';
import Grooming from './components/services/grooming/grooming';
import "@fortawesome/fontawesome-free/css/all.min.css";

import { CartProvider } from './components/context/CartContext';
import PetToys from './components/ProductsCard/pettoys/PetToys';
import PetBed from './components/ProductsCard/petbed/PetBed';
import Cart from './components/cart/Cart';
import Adoption from './components/services/adoption/Adoption';
import Veteniary from './components/services/veteniary/Veteniary';
import Boarding from './components/services/boarding/Boarding';
import Training from './components/services/training/Training';
import Admin from './components/admin/explorecategory/AdminExploreCategory';
import AdminAddPet from './components/admin/addpet/AdminAddPet';
import AdminExploreCategory from './components/admin/explorecategory/AdminExploreCategory';
import AdminLogin from './components/admin/login/AdminLogin';
import AdminDashboard from './components/admin/dashboard/AdminDashboard';
import AdminEditPet from './components/admin/editpet/AdminEditPet';
import AdminProducts from './components/admin/productscard/AdminProducts';

import { AuthProvider } from './components/context/AuthContext';
// import { Store } from '@mui/icons-material';
import SignIn from './components/Signin/Signin';
import Checkout from './components/cartcheckout/Checkout';
import AdminViewOrders from './components/vieworder/AdminViewOrder';
import AdminAdoptPet from './components/admin/adoptpet/AdminAdoptPet';
import Profile from './components/profile/Profile';

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
 
<CartProvider>
  <AuthProvider>
    <Router>
      <Routes>
       
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path ='/petfood' element={<PetFood/>}/>
        <Route path='/pettoys' element={<PetToys/>}/>
        <Route path='/petcloth' element={<PetCloth/>}/>
        <Route path='petbed' element={<PetBed/>}/>
        <Route path='/category/:categoryName' element={<ExploreCategory/>}/>
        <Route path='/store/:categoryName' element={<ExploreCategory/>}/>
        <Route path='/adoptionbanner' element={<AdoptionBanner/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/petdetails' element={<PetDetails/>}/>
        <Route path='/grooming' element={<Grooming/>}/>
        <Route path='/adoption' element={<Adoption/>}/>
        <Route path='/veteniary' element={<Veteniary/>}/>
        <Route path='/boarding' element={<Boarding/>}/>
        <Route path='/training' element={<Training/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path='/Dashboard' element={<Dashboard/>}/>
        <Route path='/adminexplorecategory'
                element={<AdminExploreCategory/>}/>
        <Route path='/adminaddpet' 
               element={<AdminAddPet/>}/>
        <Route path='/admin' element={<AdminLogin/>}/>
        <Route path='/admindashboard' element={<AdminDashboard/>}/>
        <Route path='/admineditpet/:id' element={<AdminEditPet/>}/> 
        <Route path='/adminproducts' element={<AdminProducts/>}/>
         <Route path='/checkout' element={<Checkout/>}/>
         <Route path='/adminvieworders' element={<AdminViewOrders/>}/>
         <Route path='/adminadoptpet' element={<AdminAdoptPet/>}/>
         <Route path='/profile' element={<Profile/>}/>
         
           </Routes>
    </Router>
    </AuthProvider>
    </CartProvider>
  )
}

export default App


