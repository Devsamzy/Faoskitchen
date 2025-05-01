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
import { FaCartPlus, FaRegHeart, FaHeart, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaRegSmile } from 'react-icons/fa';
import { FaCartShopping, FaOpencart,FaMagnifyingGlass } from 'react-icons/fa6';
const Home = () => {
  const addToCart = (index) => {
    // var categoryin=allcategory.value.trim();
    //     // console.log(categoryin)
    //     setCategory(categoryin);
    //     const newEntry={id: Date.now(), category:categoryin, amount:Number(amount)};
    //     const updatedBudget = [...newbudget, newEntry];
    //     // console.log(category);
    //     setNewbudget(updatedBudget);
    //     setCategory("");
    //     setAmount("");
    console.log((en)=>en.index)
    };
  
    // Function to remove a specific item
    const removeBudgetItem = (id) => {
      const updatedBudget = newbudget.filter((entry) => entry.id !== id);
      setNewbudget(updatedBudget);
    };
  const [products,setProducts]=useState([{
    'src':car1,
    'title':'Vegetable Soup',
    'details':'Creamy Chocolate Cake for Events and Ceremonies',
    'price':'#72,0000',
    'category':'meal',
    'like':true,
    },
  {
    'src':car2,
    'title':'Nigerian Jollof Rice',
    'details':'Varities of Cake for Birthday Parties',
    'price':'Negotiable',
    'category':'protein',
    'like': false,
    },
  {
    'src':image2,
    'title':'Wedding Cakes',
    'details':'Stepped Wedding Cakes for Various Events',
    'price':'#50,000'
    },
  {
    'src':car3,
    'title':'Stew',
    'details':'Cakes Based On Your Favourite Cartoons',
    'price':'#30,000'
    },
  {
    'src':image5,
    'title':'Fruit Cake',
    'details':'ihhwepoiqope'
    },
  {
    'src':image6,
    'title':'Chocolate Cake',
    'details':'ihhwepoiqope'
    },
  ]);
  // set product page
  const[productPage,setProductPage]=useState('all');
  const[cart,SetCart]=useState([]);
  const filteredData= productPage==="all" ? products : products.filter(item=>item.category===productPage);
  
  const toggleLike=(index)=>{
    const updatedProducts=
    products.map((product,i)=>{
      if(i===index){
        return{...product,like:!product.like};
      }
      return product;
    });
    setProducts(updatedProducts)
  }
  return(
    <>
    
    <div className="home d-flex container-xxl p-0 justify-content-center bg-background">
      
        <div className="row d-flex justify-content-evenly align-items-center p-0 m-0 g-1 mb-0 gx-5">
          <nav className="nav justify-content-left navbar-light py-3">
          <div className='d-flex col-12 col-md-12 col-lg-12 mb-0 mb-lg-0 flex-wrap flex-md-nowrap justify-content-between mt-3'>
            <a href="#" className='h4 text-decoration-none fs-1 mb-3 ms-3 mb-lg-0 mt-sm-3'>Faoskitchen</a>
          <div className="col-12 col-md-4 col-lg-5 d-flex bg-white align-items-center px-2 py-1 ps-3 rounded-5 border border-1 m-0 ms-0">
          <FaMagnifyingGlass></FaMagnifyingGlass> 
        <input type="text" className='form-control outline-none border-0 bg-transparent' placeholder='Search Faoskitchen' aria-label='Search'/>
        </div>
        </div>
        </nav>
        <div className="container nav d-flex gap-0 justify-content-between mt-2 navpage bg-transparent gap-2 px-2">
          <li className={productPage==='all' ?'bg-sam color-white d-flex flex-grow-1 p-1 d-flex justify-content-center align-items-center rounded-2':'d-flex flex-grow-1 border p-1 d-flex justify-content-center align-items-center rounded-2 bg-white'} onClick={()=> setProductPage('all')} ><p className='p-0 m-0'>All</p></li>
          <li className={productPage==='meal' ?'bg-sam d-flex flex-grow-1 p-1 d-flex justify-content-center align-items-center  rounded-2':'d-flex flex-grow-1 border p-1 d-flex justify-content-center align-items-center rounded-2 bg-white' } onClick={()=> setProductPage('meal')} ><p className='p-0 m-0'>Meal</p></li>
          <li className={productPage==='protein' ?'bg-sam d-flex flex-grow-1 p-1 d-flex justify-content-center align-items-center  rounded-2':'d-flex flex-grow-1 border p-1 d-flex justify-content-center align-items-center rounded-2 bg-white'} onClick={()=> setProductPage('protein')}><p className='p-0 m-0 '>Protein</p></li>
          <li className={productPage==='juice' ?'bg-sam d-flex flex-grow-1 p-1 d-flex justify-content-center align-items-center  rounded-2':'d-flex flex-grow-1 border p-1 d-flex justify-content-center align-items-center rounded-2 bg-white' } onClick={()=> setProductPage('juice')}><p className='p-0 m-0'>Juice</p></li>
          <li className={productPage==='snacks' ?'bg-sam d-flex flex-grow-1 p-1 d-flex justify-content-center align-items-center  rounded-2':'d-flex flex-grow-1 border p-1 d-flex justify-content-center align-items-center rounded-2 bg-white'} onClick={()=> setProductPage('snacks')}><p className='p-0 m-0'>Snacks</p></li>
        </div >

        <div className='my-3 container'> 
        {filteredData.length===0?(
          <div className='row container d-flex justify-content-center align-items-center text-center'>
          <FaRegSmile size={60}></FaRegSmile>
          <p className='fs-3 p-3'>Item Not Available At The Moment</p>
          </div>
        ):
        (
          <div className="row g-3 products" >
     {filteredData.map((product,index)=>(
    <div className=' col-6 col-md-4 col-lg-3  p-2'  key={index}>
    <div className="card bg-white color-dark text-dark border-0 rounded-4 p-0 h-100">
      <span onClick={()=> toggleLike(index)}>
        {product.like ?(
          <FaHeart className="like-btn" color="red" border="white"></FaHeart>
          
        ):
        (
          <FaRegHeart className="like-btn" ></FaRegHeart>

        )

        }
      </span>
        <img
            src={product.src}
            className="img-fluid card-header p-0"
            alt="image desc"
        />
        <div className="card-body px-3">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text d-flex align-items-center justify-content-between px-1">{product.price} <FaCartPlus className='text-sam' onClick={addToCart}></FaCartPlus></p>
        </div>
    </div>
    </div>
    ))}
    </div>

  )}
    </div>
    {/* footer */}
<div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="container pt-5 pb-3">
                <div className="row g-5">
                    <div className="col-lg-6 col-md-6">
                        <h4 className="ff-secondary text-start text-sam fw-normal mb-4">My Account</h4>
                        <a  className="btn btn-link" href="#">Home</a>
                        <a  className="btn btn-link" href="#">Carts</a>
                        <a  className="btn btn-link" href="#">Settings</a>
                        <a  className="btn btn-link" href="#">Cart Out</a>
                        <a  className="btn btn-link" href="#">Contact Us</a>
                        <a  className="btn btn-link" href="#">Logout</a>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <h4 className="ff-secondary text-start text-sam fw-normal mb-4">Send Us a Feedback</h4>
                        <div className="position-relative mx-auto">
                            <textarea className="form-control border-primary w-100 py-3 ps-4 pe-5" id="" placeholder='Send us a Feedback'></textarea>
                            <button type="button" className="btn btn-grad py-2 w-100 bottom-0 end-0 mt-2 sendbn">Send</button>
                        </div>
                    </div>
                </div>
            </div>
                <div className='text-align-center p-3 m-0 justify-content-center d-flex footer-copy'>faoskitchen&copy;2025, All Rights Reserved</div>

        </div>
</div>
    </div>
    </>
  )
};

export default Home;
