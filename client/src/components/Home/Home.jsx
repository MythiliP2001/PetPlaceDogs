import React from 'react'
import Navigation from '../navigation/Navigation'
import Header from '../header/Header'
import Intro from '../intro/Intro'
import Services from '../services/Services'
import Store from '../ProductsCard/products/Products'
import Footer from '../footer/Footer'
// import Categories from '../categories/categories'
import Appointment from '../appointment/Appointment'
import AppDownload from '../AppDownload/AppDownload'
import DogCard from '../dogcard/DogCard'


const Home = () => {
  return (
    <>
    <Navigation/>
    <Header/>
    {/* <Intro/>   */}
    {/* <Categories/> */}
    {/* <DogCard/> */}
    <Store/>  
    <Services/> 
    <AppDownload/>
    <Appointment/>
    <Footer/> 
    </>
  )
}

export default Home
