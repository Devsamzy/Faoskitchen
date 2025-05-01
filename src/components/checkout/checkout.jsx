import React, { useState } from 'react';
import './checkout.css'
import 'bootstrap/dist/css/bootstrap.css'
import { FaPlus, FaTimes,FaMinus } from 'react-icons/fa';
const Checkout = () => {

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
                <h1 className='head text-grad mt-3 p-3'>CheckOut</h1>
            <h1 className="p-3 pt-5">Billing Address</h1>
                <div className="bg-white p-30 m-3 mb-5 border">
                    <div className="row">
                        <div className="col-md-6 form-group">
                            <label>First Name</label>
                            <input className="form-control" type="text" placeholder="John"/>
                        </div>
                        <div className="col-md-6 form-group">
                            <label>Last Name</label>
                            <input className="form-control" type="text" placeholder="Doe"/>
                        </div>
                        <div className="col-md-6 form-group">
                            <label>E-mail</label>
                            <input className="form-control" type="text" placeholder="example@email.com"/>
                        </div>
                        <div className="col-md-6 form-group">
                            <label>Mobile No</label>
                            <input className="form-control" type="text" placeholder="+123 456 789"/>
                        </div>
                        <div className="col-md-6 form-group">
                            <label>Address Line 1</label>
                            <input className="form-control" type="text" placeholder="123 Street"/>
                        </div>
                        <div className="col-md-6 form-group">
                            <label>Address Line 2</label>
                            <input className="form-control" type="text" placeholder="123 Street"/>
                        </div>
                        <div className="col-md-6 form-group">
                            <label>City</label>
                            <input className="form-control" type="text" placeholder="New York"/>
                        </div>
                        <div className="col-md-6 form-group">
                            <label>State</label>
                            <input className="form-control" type="text" placeholder="New York"/>
                        </div>
                        <div className="col-md-6 form-group">
                            <label>ZIP Code</label>
                            <input className="form-control" type="text" placeholder="123"/>
                        </div>
                    </div>
                </div>
                <div className="collapse mb-5" id="shipping-address">
                    <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Shipping Address</span></h5>
                    <div className="bg-light p-30">
                        <div className="row">
                            <div className="col-md-6 form-group">
                                <label>First Name</label>
                                <input className="form-control" type="text" placeholder="John"/>
                            </div>
                            <div className="col-md-6 form-group">
                                <label>Last Name</label>
                                <input className="form-control" type="text" placeholder="Doe"/>
                            </div>
                            <div className="col-md-6 form-group">
                                <label>E-mail</label>
                                <input className="form-control" type="text" placeholder="example@email.com"/>
                            </div>
                            <div className="col-md-6 form-group">
                                <label>Mobile No</label>
                                <input className="form-control" type="text" placeholder="+123 456 789"/>
                            </div>
                            <div className="col-md-6 form-group">
                                <label>Address Line 1</label>
                                <input className="form-control" type="text" placeholder="123 Street"/>
                            </div>
                            <div className="col-md-6 form-group">
                                <label>Address Line 2</label>
                                <input className="form-control" type="text" placeholder="123 Street"/>
                            </div>

                            <div className="col-md-6 form-group">
                                <label>City</label>
                                <input className="form-control" type="text" placeholder="New York"/>
                            </div>
                            <div className="col-md-6 form-group">
                                <label>State</label>
                                <input className="form-control" type="text" placeholder="New York"/>
                            </div>
                            <div className="col-md-6 form-group">
                                <label>ZIP Code</label>
                                <input className="form-control" type="text" placeholder="123"/>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <div className="col-lg-4">
                <h1 className="p-3 pt-5">Order Total</h1>
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
                        <button className="btn btn-block btn-grad font-weight-bold my-3 py-3">Place Order Now</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="container pt-5 pb-3">
                <div className="row g-5">
                    <div className="col-lg-6 col-md-6">
                        <h4 className="ff-secondary text-start text-warning fw-normal mb-4">My Account</h4>
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
                            <button type="button" className="btn btn-sam py-2 w-100 bottom-0 end-0 mt-2 sendbn">Send</button>
                        </div>
                    </div>
                </div>
            </div>
                <div className='text-align-center p-3 m-0 justify-content-center d-flex footer-copy'>faoskitchen&copy;2025, All Rights Reserved</div>

        </div>
    </div>
    </>
  )
};

export default Checkout;
