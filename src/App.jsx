import './App.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Listings from './components/Listings'
import AboutUs from './components/AboutUs'
import Contact from './components/Contact'
import CTA from './components/CTA'
import Footer from './components/Footer'
import About from './pages/about/About'
import ContactPage from './pages/contact/ContactPage'
import Teams from './pages/team/Teams'
import Services from './pages/services/Services'
import ProperyListings from './pages/listings/PropertyListings'
import PropertyDetails from './pages/listings/PropertyDetails'
import AgentProfile from './pages/team/AgentProfile'
import GetPropertyValuation from './pages/services/GetPropertyValuation'
import SellProperty from './pages/services/SellProperty'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={
        <>
          <NavBar/>
          <Hero/>
          <Listings/>
          <AboutUs/>
          <Contact/>
          <CTA/>
          <Footer/>
        </>

        }/>
        
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<ContactPage/>}/>

        <Route path='/team' element={<Teams/>}/>
        <Route path='/team/:id' element={<AgentProfile/>}/>

        <Route path='/services' element={<Services/>}/>
        <Route path='/services/valuation' element={<GetPropertyValuation/>}/>
        <Route path='/services/sell' element={<SellProperty/>}/>

        <Route path='/listings' element={<ProperyListings/>}/>
        <Route path='/listings/:id' element={<PropertyDetails/>}/>


      </Routes>
    </>
  )
}

export default App
