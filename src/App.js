import Navbar from "./components/Navbar"
import Search from "./components/Search"
import Products from "./components/Products"
import Aboutus from "./components/Aboutus"
import Footer from "./components/Footer"
import { Fragment } from "react"

function App()
{
    return(
        //fragments <>
        <>      
        <Navbar></Navbar>
        <Search></Search>
        <Products></Products>
        <Aboutus></Aboutus>
        <Footer></Footer>
      </>
    )
}

export default App