import React, { useEffect, useState, useRef } from 'react';
import {FaRegHeart, FaHeart, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaRegSmile } from 'react-icons/fa';
import {FaCartPlus, FaCartShopping, FaOpencart,FaMagnifyingGlass,FaHouse } from 'react-icons/fa6';
import {BiCart} from 'react-icons/bi'
import {Modal} from 'bootstrap'
import './products.css'
export default function Products({products,setProducts}){
    const[productPage,setProductPage]=useState('All');
    const filteredData= productPage==="All" ? products : products.filter(item=>item.category===productPage);
      
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
      const addToCart = (index) => {
        console.log((en)=>en.index)
        };
      const modalRef=useRef(null);
      const [boostrapModal,setBoostrapModal]=useState(null)
      const [selectedProduct,setSelectedProduct]=useState(null);
      const [modal,setModal]=useState(null);

      //initialize boostrap shitt
      useEffect(()=>{
        const modalElement=document.getElementById('productModal');
        if(modalRef.current){
          setModal(new Modal(modalRef.current))
        }
      },[]);

      const handleProductClick=(product)=>{
        setSelectedProduct(product);
        if(modal){
          modal.show();
        }
      }
    return(
        <>
        <div className=" container-xxl row d-flex justify-content-evenly align-items-center p-0 m-0 g-1 mb-0  overflow-visible col">
        <nav className="nav justify-content-left navbar-light pt-3 pb-lg-3">
        <div className='d-flex col-12 col-md-12 col-lg-12 mb-0 mb-lg-0 flex-wrap flex-md-nowrap justify-content-between mt-3'>
          <a href="#" className='h3 text-decoration-none mb-3 ms-3 mb-lg-0 mt-sm-3 brandname'>Faoskitchen</a>
        <div className="col-12 col-md-4 col-lg-5 d-flex bg-white align-items-center px-2 py-1 ps-3 rounded-5 border border-1 m-0 ms-0">
        <FaMagnifyingGlass></FaMagnifyingGlass> 
      <input type="text" className='form-control outline-none border-0 bg-transparent' placeholder='Search Faoskitchen' aria-label='Search'/>
      </div>
      </div>
      </nav>

      <div className=' container-fluid py-0 m-0'>
      <div  className="d-flex gap-0 mt-0 navpage bg-transparent gap-2 px-2 py-3 flex-nowrap overflow-auto hide-scrollbar">
      {[
        "All",
        "Meal",
        "Protein",
        "Juice",
        "Snacks",
        "deserts"
      // <li className={productPage==='meal' ?'bg-sam d-flex flex-grow-1 p-1  py-2 d-flex justify-content-center align-items-center  rounded-2':'d-flex flex-grow-1 border p-1 d-flex justify-content-center align-items-center rounded-2 bg-white' } onClick={()=> setProductPage('meal')} ><p className='p-0 m-0'>Meal</p></li>
      ].map((item,i)=>(
        <>
          <li key={i} className={productPage === item ?'bg-sam color-white activenav':''} onClick={()=> setProductPage(item)} style={{padding:'10px 30px',borderRadius:'20px'}}> <p className='p-0 m-0'>{item}</p></li>
          </>
      ))
    }
    </div >
    </div>

        {/* <li className={productPage==='protein' ?'bg-sam d-flex flex-grow-1 p-1 d-flex justify-content-center align-items-center  rounded-2':'d-flex flex-grow-1 border p-1 d-flex justify-content-center align-items-center rounded-2 bg-white'} onClick={()=> setProductPage('protein')}><p className='p-0 m-0 '>Protein</p></li>
        <li className={productPage==='juice' ?'bg-sam d-flex flex-grow-1 p-1 d-flex justify-content-center align-items-center  rounded-2':'d-flex flex-grow-1 border p-1 d-flex justify-content-center align-items-center rounded-2 bg-white' } onClick={()=> setProductPage('juice')}><p className='p-0 m-0'>Juice</p></li>
        <li className={productPage==='snacks' ?'bg-sam d-flex flex-grow-1 p-1 d-flex justify-content-center align-items-center  rounded-2':'d-flex flex-grow-1 border p-1 d-flex justify-content-center align-items-center rounded-2 bg-white'} onClick={()=> setProductPage('snacks')}><p className='p-0 m-0'>Snacks</p></li> */}

      <div className='my-3 container px-3 mb-6'> 
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
  <div className="card bg-white color-dark text-dark border-0 rounded-4 p-0 h-100 product" onClick={()=>handleProductClick(product)}>
    <span onClick={()=> toggleLike(index)} className='likebtn bg-white'>
      {product.like ?(
        <FaHeart className="like-btn " color="red" border="white"></FaHeart>
        
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
          <p className="card-text d-flex align-items-center justify-content-between px-1">{product.price} <div className='text-sam fs-2 px-3 py-0 rounded rounded-5 bg-sam'> <FaCartPlus  size={22} onClick={addToCart} color='white'></FaCartPlus></div></p>
      </div>
  </div>
  </div>
  ))}
  </div>

)}
  </div>


{/* <button
  type="button"
  className="btn btn-primary btn-lg"
  data-bs-toggle="modal"
  data-bs-target="#modalId"
>
  Launch
</button> */}


<div
  className="modal fade"
  id="productModal"
  tabindex="-1"
  role="dialog"
  ref={modalRef}
  aria-labelledby="productModalLabel"
  aria-hidden="true"
>
  <div className="modal-dialog modal-fullscreen-sm-down" role="document">
    <div className="modal-content">
      {selectedProduct&&(
        <>
      <div className="modal-header">
        <h5 className="modal-title" id="productModalLabel">
          {selectedProduct.title}
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div className="modal-body">
        <div className="row">
          <div className='col-md-6'>
            <img src={selectedProduct.src} alt={selectedProduct.title} className='img-fluid rounded'/>
          </div>
          <div className='col-md-6 pt-3'>
            <h2>{selectedProduct.title}</h2>
            <p>${selectedProduct.price}</p>
            <p>{selectedProduct.details}</p>
            <div className='mt-4'>
              <label htmlFor="quantity" className='form-label'>Quantity:</label>
              <select id="quantity" className='form-select w-auto mb-3'>{
                [1,2,3,4,5].map(num=>(
                  <option key={num} value={num}>{num}</option>
                ))
                }</select>
                <button className='btn btn-sam btn-lg w-100'>
                  <BiCart className='bi bi-cart-plus me-2'></BiCart>Add to Cart
                </button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          Continue Shopping
        </button>
        <button type="button" className="btn btn-primary">View Cart</button>
      </div>
       </>
      )}
    </div>
  </div>
</div>

</div>
</>
    )
}