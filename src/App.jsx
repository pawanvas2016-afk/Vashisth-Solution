import {createBrowserRouter , createRoutesFromElements , Route , RouterProvider} from "react-router-dom"
import { useEffect } from "react"
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import  Home from './components/Mainpage/Home'
import Services from "./components/Mainpage/Services"
import Administrators from "./components/Mainpage/Administrator"
import Fillform from "./components/Mainpage/Fillform"
import Admin from "./components/Admin"
import NotFound from "./components/NotFound"

function App() {

  const Url = import.meta.env.VITE_ADMIN;

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Main/>}>
          <Route index element={<Home/>}/>
          <Route path="services" element={<Services/>}/>
          <Route path="admin" element={<Administrators/>}/>
          <Route path="form" element={<Fillform/>}/>
          <Route path={Url} element={<Admin/>}/>
           <Route path="*" element={<NotFound/>}/>
      </Route>
    )
  )


  return (
    <>
      <Header/>
      <RouterProvider router={router}/>  
      <Footer/>
    </>
  )
}

export default App
