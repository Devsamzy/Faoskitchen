import React, { useState } from 'react';
import './cart.css'
import img from '../../../assets/1.jpg'
import 'bootstrap/dist/css/bootstrap.css'
import { FaPlus, FaTimes,FaMinus } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';
const Cart = () => {

  // set product page
//   const[productPage,setProductPage]=useState('all');
//   const addToCart = () => {
//     var categoryin=allcategory.value.trim();
//       console.log(categoryin)
//       setCategory(categoryin);
//       if (categoryin && amount) {
//         const newEntry = { id: Date.now(), category:categoryin , amount: Number(amount) };
//         const updatedBudget = [...newbudget, newEntry];
//         console.log(category);
        
//         setNewbudget(updatedBudget);
//         setCategory("");
//         setAmount("");
//       }
    
//       closeadd();
//     };
  
//     // Function to remove a specific item
//     const removeBudgetItem = (id) => {
//       const updatedBudget = newbudget.filter((entry) => entry.id !== id);
//       setNewbudget(updatedBudget);
//     };
  return(
    <>
        
    <div className='cart container-xxl p-0 bg-light'>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-4 py-lg-0">
            <a className="navbar-brand p-0 px-3" href="#"><h1 className=' m-0 brandname'>Faoskitchen</h1></a>
            <button
              className="navbar-toggler d-lg-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavId"
              aria-controls="collapsibleNavId"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
              <ul className="navbar-nav ms-auto py-0 pe-4 mt-2 mt-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" href="#" aria-current="page">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" aria-current="page">Cart</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" aria-current="page">CheckOut</a>
                </li> 
              </ul>
                  <a href="#" className="btn btn-grad py-2 px-4">CheckOut</a>
              
            </div>
        </nav>

        <div className='container-fluid m-0'>
        <div className="row px-xl-5 ">
            <div className=" col-lg-8 table-responsive mb-5">
              <h1 className='head p-3 mt-2 mt-lg-5 text-grad'>Cart Out</h1>
              <table className="table table-hover text-center table-light table-borderless border mb-0">
              <thead className="thead-dark ">
                        <tr>
                            <th>Products</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                <tbody className="align-middle">
                        <tr>
                            <td className="align-middle"><img src={img} alt="" style={{width: "50px"}} className='mr-1'/>Product Name</td>
                            <td className="align-middle">$150</td>
                            <td className="align-middle">
                                <div className="input-group quantity mx-auto" style={{width: "100px"}}>
                                    <div className="input-group-btn">
                                        <button className="btn btn-sm btn-sam btn-minus" >
                                        <FaMinus></FaMinus>
                                        </button>
                                    </div>
                                    <input type="text" className="form-control form-control-sm bg-secondary border-0 text-center" value={1}/>
                                    <div className="input-group-btn">
                                        <button className="btn btn-sm btn-sam btn-plus">
                                            <FaPlus></FaPlus>
                                        </button>
                                    </div>
                                </div>
                            </td>
                            <td className="align-middle">$150</td>
                            <td className="align-middle"><button className="btn btn-sm btn-danger"><FaTimes></FaTimes></button></td>
                        </tr>
                    </tbody>
              </table>
            </div>
            <div className="col-lg-4">
                <h5 className="position-relative text-uppercase mb-3 mt-5"><span className=" pr-3">Cart Summary</span></h5>
                <div className="bg-white p-30 mb-5 border border-2 mt-3">
                    <div className="border-bottom pb-2">
                        <div className="d-flex justify-content-between mb-3">
                            <h6>Sub Total</h6>
                            <h6>$150</h6>
                        </div>
                        <div className="d-flex justify-content-between">
                            <h6 className="font-weight-medium">Shipping Fee</h6>
                            <h6 className="font-weight-medium">$10</h6>
                        </div>
                    </div>
                    <div className="pt-2">
                        <div className="d-flex justify-content-between mt-2">
                            <h5>Total</h5>
                            <h5>$160</h5>
                        </div>
                        <NavLink to="/checkout"><button className="btn btn-block btn-grad font-weight-bold my-3 py-3">Proceed To Checkout</button></NavLink>
                    </div>
                </div>
            </div>
        </div>
        </div>

    </div>
    </>
  )
};

export default Cart;
