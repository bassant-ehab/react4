import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Layout from './Components/Layout/Layout'
import About from './Components/About/About'
import Footer from './Components/Footer/Footer'
import Contact from './Components/Contact/Contact'
import Portfolio from './Components/Portfolio/Portfolio'

let routes = createBrowserRouter([
  { path: '/', element: <Layout />, children: [
    {index:true , element:<Home/>},
    {path:'Navbar' , element:<Navbar/>},
    {path:'About' , element:<About/>},
    {path:'Portfolio' , element:<Portfolio/>},
    {path:'Contact' , element:<Contact/>},
    {path:'Footer' , element:<Footer/>},
   
  ] }
])

function App() {
  return <RouterProvider router={routes}></RouterProvider>
}

export default App;
