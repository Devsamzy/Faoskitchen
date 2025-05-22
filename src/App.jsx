import { useEffect } from 'react'
import { onAuthStateChanged } from "firebase/auth";
import {BrowserRouter as Router} from'react-router-dom';
import {Routes,Route} from'react-router-dom';
import './App.css'
import Login from './components/login/login.jsx'
import Signin from './components/signin/signin.jsx'
import Home from './components/main/main.jsx'
import Checkout from './components/checkout/checkout.jsx'
import Landing from './components/andi/home.jsx'
import Cart from './components/main/cart/cart.jsx'
import Admin from './components/admin/admin.jsx'
function App() {
  return (
    <Router>
      <div className='mainpage'>
        <section>
          <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signin' element={<Signin/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/' element={<Landing/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='/adminpage' element={<Admin/>}/>
          </Routes>
        </section>
      </div>
     </Router>
  )
}

export default App
