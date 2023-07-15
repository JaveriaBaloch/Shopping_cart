import { Container, Nav, Navbar } from "react-bootstrap"
import { Route, Routes } from "react-router-dom"
import Home from './pages/home.js'
import About from "./pages/about.js"
import Store from "./pages/store.js"
import NavBar from './components/Navbar'
import ItemsView from './pages/itemsView.js'
import { ShoppingCartProvider } from "./context/ShoppingCartContext.js"
function App() {
  return (
   <>
   <ShoppingCartProvider>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Store" element={<Store/>}/>
      <Route path="/Items/:id" element={<ItemsView/>}/>
    </Routes>
    </ShoppingCartProvider>
   </>
  )
}

export default App
