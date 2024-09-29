import "./App.css"
import { BrowserRouter , Routes , Route } from "react-router-dom"
import Header from "./components/header/Header.jsx"
import Home from "./components/pages/home/Home.jsx"
import About from "./components/pages/about/About.jsx"
import Products from "./components/pages/products/Products.jsx"
import Error from "./components/pages/error/Error.jsx"
import Footer from "./components/footer/Footer.jsx"
import ProductDetail from "./components/pages/ProductDetail/ProductDetail.jsx"
import Contactus from "./components/pages/Contactus/Contactus.jsx"
import Login from "./components/pages/Login/Login.jsx"

import { useState , createContext } from "react"

export const changeNumber = createContext() 

const App = () => {

    const [ number , setNumber ] = useState(0)

    return (
        <BrowserRouter>
        <changeNumber.Provider value={{number , setNumber}}>
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>} />
                <Route path="/products" element={<Products/>} />
                <Route path="/product/:id" element={<ProductDetail/>} />
                <Route path="/contactus" element={<Contactus/>} />
                <Route path="/login" element={<Login/>}/>
                <Route path="/*" element={<Error/>} />
            </Routes>
            <Footer/>
        </div>
        </changeNumber.Provider>
        </BrowserRouter>
    )
}

export default App 