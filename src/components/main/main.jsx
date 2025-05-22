import React, { useState } from 'react';
import './home.css'
import image1 from '../../assets/8.jpg'
import image2 from '../../assets/5.jpg'
import image3 from '../../assets/7.jpg'
import image4 from '../../assets/main.jpg'
import image5 from '../../assets/1.jpg'
import image6 from '../../assets/8.jpg'
import car2 from '../../assets/car1.png'
import car1 from '../../assets/car2.png'
import car3 from '../../assets/car3.png'
import 'bootstrap/dist/css/bootstrap.css'

import { BsHouseDoor, BsCart} from 'react-icons/bs';
import { BiMessageRounded, BiUser } from 'react-icons/bi';
import { LuHouse, LuShoppingCart, LuUser } from 'react-icons/lu';
import { PiChatTeardropTextBold } from 'react-icons/pi';
import Products from './products/products'
import Cart from './cart/cart'
const Home = () => {

  
    // Function to remove a specific item
    const removeBudgetItem = (id) => {
      const updatedBudget = newbudget.filter((entry) => entry.id !== id);
      setNewbudget(updatedBudget);
    };
  const [products,setProducts]=useState([{
    'src':car1,
    'title':'Vegetable Soup',
    'details':'Creamy Chocolate Cake for Events and Ceremonies',
    'price':'$72,0000',
    'category':'Meal',
    'like':true,
    },
  {
    'src':car2,
    'title':'Jollof Rice',
    'details':'Varities of Cake for Birthday Parties',
    'price':'$50,000',
    'category':'Protein',
    'like': false,
    },
  {
    'src':image2,
    'title':'Wedding Cakes',
    'details':'Stepped Wedding Cakes for Various Events',
    'price':'$50,000'
    },
  {
    'src':car3,
    'title':'Stew',
    'details':'Cakes Based On Your Favourite Cartoons',
    'price':'$30,000'
    },
  {
    'src':image5,
    'title':'Fruit Cake',
    'details':'ihhwepoiqope',
    'price':'$30,000'
    },
  {
    'src':image6,
    'title':'Chocolate Cake',
    'details':'ihhwepoiqope',
    'price':'$30,000'
    },
  ]);
  // set product page

  const[cart,SetCart]=useState([]);
  const[page,setPage]=useState('home')
  

  return(
    <>
    <div className="home d-flex container-xxl p-0 justify-content-center bg-background overflow-visible">
        <div className="sidebar col-0 col-lg-3 py-5 p-0">
        <ul className="d-flex pt-5 sticky-top">
            <li className={page==='home' ?'li active':'active'} onClick={()=>setPage('home')}> <div className='iconbg'> <LuHouse className='icon'></LuHouse></div><div className='text'>Home</div></li>
            <li  className={page==='cart' ?'li active':'active'} onClick={()=>setPage('cart')}><div className='iconbg'><LuShoppingCart className='icon'></LuShoppingCart></div><div className='text'>Cart</div></li>
            <li  className={page==='user' ?'li active':'active'} onClick={()=>setPage('user')}><div className='iconbg'><LuUser className='icon'></LuUser></div><div className='text'>User</div></li>
            <li  className={page==='message' ?'li active':'active'} onClick={()=>setPage('message')}><div className='iconbg'><PiChatTeardropTextBold className='icon'></PiChatTeardropTextBold></div><div className='text'>Customer Service</div></li>
          </ul>
        </div>
        {page==='home'&&(
          <Products products={products} setProducts={setProducts}/>
        )}
        {page==='cart'&&(
          <Cart/>
        )}

        </div>
        <div className="footnav p-1 pt-4 justify-content-center">
          <ul className="d-flex justify-content-around col-12">
            <li className={page==='home' ?'li active':'active'} onClick={()=>setPage('home')}><LuHouse className='icon'></LuHouse><div className='dot'></div></li>
            <li  className={page==='cart' ?'li active':'active'} onClick={()=>setPage('cart')}><LuShoppingCart className='icon'></LuShoppingCart><div className='dot'></div></li>
            <li  className={page==='user' ?'li active':'active'} onClick={()=>setPage('user')}><LuUser className='icon'></LuUser><div className='dot'></div></li>
            <li  className={page==='message' ?'li active':'active'} onClick={()=>setPage('message')}><PiChatTeardropTextBold className='icon'></PiChatTeardropTextBold><div className='dot'></div></li>
            {/* <li></li> */}
          </ul>
    </div>
    </>
  )
};

export default Home;
