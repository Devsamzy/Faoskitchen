import { useEffect } from 'react'
import { onAuthStateChanged } from "firebase/auth";
import {BrowserRouter as Router} from'react-router-dom';
import {Routes,Route} from'react-router-dom';
import './App.css'
import Login from './components/login/login.jsx'
import Signin from './components/signin/signin.jsx'
import Home from './components/home/home.jsx'
import Landing from './components/andi/home.jsx'
function App() {
  return (
    <Router>
      <div>
        <section>
          <Routes>
            <Route path='/ogin' element={<Login/>}/>
            <Route path='/signin' element={<Signin/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/' element={<Landing/>}/>
          </Routes>
        </section>
      </div>
     </Router>
  )
}

export default App
