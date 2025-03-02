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
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import { FaCartPlus } from 'react-icons/fa';
import { FaCartShopping, FaOpencart } from 'react-icons/fa6';
const Home = () => {
  const products=[{
    'src':car1,
    'title':'Brown-Chocolate Cake',
    'details':'Creamy Chocolate Cake for Events and Ceremonies',
    'price':'#72,0000'
    },
  {
    'src':car2,
    'title':'Birthday Cakes',
    'details':'Varities of Cake for Birthday Parties',
    'price':'Negotiable'
    },
  {
    'src':image2,
    'title':'Wedding Cakes',
    'details':'Stepped Wedding Cakes for Various Events',
    'price':'#50,000'
    },
  {
    'src':car3,
    'title':'Cartoon Cakes',
    'details':'Cakes Based On Your Favourite Cartoons',
    'price':'#30,000'
    },
  {
    'src':image5,
    'title':'chocolTE Cke',
    'details':'ihhwepoiqope'
    },
  {
    'src':image6,
    'title':'chocolTE Cke',
    'details':'ihhwepoiqope'
    },
  {
    'src':image6,
    'title':'chocolTE Cke',
    'details':'ihhwepoiqope'
    },
  {
    'src':image6,
    'title':'chocolTE Cke',
    'details':'ihhwepoiqope'
    },
  {
    'src':image6,
    'title':'chocolTE Cke',
    'details':'ihhwepoiqope'
    },
  ]


  return(
    <>
    
    <div className="home d-flex container-xxl p-0 bg-white justify-content-center ">
      
        <div className="row d-flex justify-content-evenly align-items-center p-0 m-0 g-1 mb-0 gx-5 ">
          <nav className="nav justify-content-left navbar-light bg-light p-3 border-bottom border-1.5 border-grey">
          <div className='d-flex col-12 col-md-12 col-lg-12 mb-2 mb-lg-0 flex-wrap flex-md-nowrap justify-content-between'>
            <a href="#" className='h4 text-decoration-none mb-0 text-size-5px mb-2 mb-lg-0'>Faoskitchen</a>
          <div className="col-12 col-md-4 col-lg-5">
        <input type="text" className='form-control form-control-light border-2 border-grey br-0' placeholder='Search Faoskitchen' aria-label='Search'/>
        </div>
        </div>
        </nav>
<div className="row my-4 " >
     {products.map((product,i)=>(
    <div className=' col-6 col-md-6 col-lg-3 mb-4 mb-lg-0 p-0' key={i}>
    <div className="card p-2 bg-transparent color-dark text-dark border-0">
        
        <img
            src={product.src}
            className="img-fluid card-header p-0"
            alt="image desc"
        />
        <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <small className="card-text text-secondary p-0 mb-1">{product.details}</small>
            <p className="card-text text-wwhite d-flex align-items-center gap-3">{product.price} <FaCartShopping className='text-warning'></FaCartShopping></p>

        </div>
    </div>
    </div>
    ))}
    </div>
    <div className="footer row d-flex justify-content-center col-12 p-1 border border-1.5 border-secondary bg-dark text-white">

      <div className="container col-12" >

      </div>
      <div className='d-flex justify-content-center'>
      <p className='p-0 mb-1'>Faoskitchen&copy;2025</p>
      </div>
      </div>
</div>
    </div>
    </>
  )
};

export default Home;
