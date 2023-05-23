import { Routes, Route} from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"
import Store from "./components/Store"
import Footer from "./components/Footer"
import Single from './components/Single'
import Contact from './components/Contact'
import Blog from './components/Blog'


export default function App() {
    const [product, setproduct] = useState([])

    useEffect(()=> {
        const url = 'http://localhost:3000/api/product'

        axios.get(url).then(res => setproduct(res.data))
    },[])
    return (
        <>
        <Header />
        <Routes>
        <Route path= '/' element= { <Home /> } />
        <Route path= 'about' element= { <About /> } />
        <Route path= 'store' element= { <Store /> } />
        <Route path= 'contact' element= { <Contact /> } />
        <Route path= 'blog' element= { <Blog /> } />
        <Route path= {`/store/${product.id}`} element= { <Single key={product.id} name={product.name} /> } />
        {/* <Route path= '*' element= { <h1>Error</h1> } /> */}
        </Routes>
        {/* <Footer /> */}
        </>
    )
}
