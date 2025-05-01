import React, { useState, useEffect } from 'react';
import {FaAlignJustify, FaAngrycreative, FaArrowRight, FaCartPlus, FaEnvelope, FaFacebookF, FaInstagram, FaMapMarker, FaMapMarkerAlt, FaPhoneAlt, FaPlusCircle, FaRegUserCircle, FaStar, FaTwitter, FaUser, FaUserTie, FaUtensils, FaYoutube, FaRegPlayCircle} from 'react-icons/fa'
import './home.css';
import './bod.css';
import {useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import car2 from '../../assets/car1.png'
import car1 from '../../assets/car2.png'
import car3 from '../../assets/car3.png'
import logo from '../../assets/logo.png'
import hero1 from '../../assets/hero1.png'
import hero2 from '../../assets/hero2.png'
const Home = () => {
  // triggerEl = document.querySelector("#navId a");
  // bootstrap.Tab.getInstance(triggerEl).show(); // Select tab by name
  // const pag
//   const('[data-toggle="counter-up"]').counterUp({
//     delay: 10,
//     time: 2000
// });
  return (
    <>
    <div className='container-xxl bg-white p-0'>
      <div id='spinner' className='hide bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center'>
        <div className='spinner-border text-primary' style={{width:'3rem', height: '3rem'}} role='status'>
          <span className='sr-only'>loading...</span>
        </div>
      </div>

      <div className='container-xxl position-relative p-0'>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3 px-lg-5 py-4 py-lg-0 ">
    <a className="navbar-brand p-0" href="#"><h1 className='text-warning m-0 brandname'><img src={logo} alt="" className='logo me-3'/>Faoskitchen</h1></a>
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
          <a className="nav-link" href="#about" aria-current="page">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#team" aria-current="page">Our Team</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" aria-current="page">Menu</a>
        </li>
        
        
      </ul>
          <a href="#" className="btn btn-warning py-2 px-4">Order Now</a>
      
    </div>
</nav>

<div className='container-xxl py-5 bg-dark hero-header mb-5'>
  <div className='container my-5 py-'>
    <div className='row align-items-center g-5'>
      <div className='col-lg-6 text-center text-lg-start'>
        {/* <h1 className='display-3 text-white animatedslideInLeft'>Experience the <br /> Taste    of Africa</h1> */}
        <h1 className='display-3 text-white animated slideInLeft h1'>Enjoy the True<br/>Flavors of Africa</h1>
        <p className='text-white mb-4 pb-2 hero-text animated slideInLeft'>We bring to you the finest African products and catering services, sourced sustainably and crafted with care.</p>
        <a href="#" className='btn btn-warning py-sm-3 px-sm-5 me-3 animated slideInLeft h1'>Place An Order</a>
      </div>

      <div className='col-lg-6 text-center text-lg-end overflow-hidden'>
        <img src={hero2} className='img-fluid w-75 hero-image' alt="" />
      </div>
      <div className="play-btn d-flex justify-content-end me-3">
        <FaRegPlayCircle color='white' size="70px"></FaRegPlayCircle>
      </div>
    </div>
  </div>
</div>
</div>


<div className='menu container-xxl py-5'>
{/* services start */}
<div className="container-xxl py-5">
  <div className="container">
    <div className="row g-4">
      <div className="col-lg-4 col-sm-6 wowfadeInUp" data-wow-delay="0.1s">
      <div className="service-item rounded pt-3">
        <div className="p-4">
          <FaUserTie className='mb-4 text-warning card-icon'></FaUserTie>
          <h5>Authenticity Guaranteed</h5>
          <p>Our products and services are rooted in the rich traditions and flavors of Africa. Every time we offer is carefully sourced to ensure authenticity and quality, so you can experience the true essence of African culure.</p>
        </div>
      </div>
      </div>
      <div className="col-lg-4 col-sm-6 wowfadeInUp" data-wow-delay="0.3s">
      <div className="service-item rounded pt-3">
        <div className="p-4">
          <FaUtensils className='mb-4 text-warning card-icon'></FaUtensils>
          <h5>Exceptional Catering Service</h5>
          <p>Our Catering Services are designed to make your Events unforgettable. From traditional African dishes to mordern fusion cuisine, we create menus that delight your taste buds and leave a lasting impression on your guests.</p>
        </div>
      </div>
      </div>
      <div className="col-lg-4 col-sm-6 wowfadeInUp" data-wow-delay="0.5s">
      <div className="service-item rounded pt-3">
        <div className="p-4">
          <FaCartPlus className='mb-4 text-warning card-icon'></FaCartPlus>
          <h5>Online Order</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt laudantium veniam aut? Illum nesciunt accusamus, asperiores voluptatum eveniet veniam placeat quia laudantium eos quod odit eum rem reprehenderit eaque delectus.</p>
        </div>
      </div>
      </div>
    </div>

  </div>
</div>




<div className='row gap-5 px-3 d-flex align-items-center justify-content-center'>
<div id="carouselId" className="carousel slide col-lg-5" data-bs-ride="carousel">
  <ol className="carousel-indicators">
    <li
      data-bs-target="#carouselId"
      data-bs-slide-to="0"
      className="active"
      aria-current="true"
      aria-label="First slide"
    ></li>
    <li
      data-bs-target="#carouselId"
      data-bs-slide-to="1"
      aria-label="Second slide"
    ></li>
    <li
      data-bs-target="#carouselId"
      data-bs-slide-to="2"
      aria-label="Third slide"
    ></li>
  </ol>
  <div className="carousel-inner" role="listbox">
    <div className="carousel-item active">
      <img
        src={car1}
        className="w-100 d-block"
        alt="First slide"
      />
    </div>
    <div className="carousel-item">
      <img
        src={car2}
        className="w-100 d-block"
        alt="Second slide"
      />
    </div>
    <div className="carousel-item">
      <img
        src={car3}
        className="w-100 d-block"
        alt="Third slide"
      />
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselId"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselId"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


<div className="col-lg-6" id="about">
  <h5 className='section-title ff-secondary text-start text-warning fw-normal' id='about'>About Us</h5>
  <h1 className='mb-4 d-flex  align-items-center'>Welcome To Faoskitchen</h1>
  <p className='mb-4'>
    Welcome to Faoskitchen, where the vibrant flavors, rich traditions, and warm hospitality of Africa come to life. We are passionate about sharing the beauty of African culture through our authentic products and excptional catering service.
  </p>
  <p className='mb-4'>Our Mission is to Celebrate Africa Culture through Food and Produts that tell a Story. And to make Africa food and products available <strong> Everywhere, Anytime</strong>.
  </p>
  <div className="row g-4 mb-4">
    <div className="col-sm-6">
      <div className="d-flex align-items-center border-start border-5 border-warning px-3">
        <h1 className='flex-shrink-0 display-5 text-warning mb-0' data-toggle="couunter-up">15</h1>
        <div className="ps-4">
          <p className="mb-0">Years Of</p>
          <h6 className='text-capitalize mb-0  h6'><strong> Experience</strong></h6>
        </div>
      </div>
    </div>
    <div className="col-sm-6">
      <div className="d-flex align-items-center border-start border-5 border-warning px-3">
        <h1 className='flex-shrink-0 display-5 text-warning mb-0' data-toggle="couunter-up">50</h1>
        <div className="ps-4">
          <p className="mb-0">Popular</p>
          <h6 className='text-capitalize mb-0  h6'><strong> Meals & Products</strong></h6>
        </div>
      </div>
    </div>
  </div>
    <a href="#" className="btn btn-warning py-3 px-5 mt-2">Read More</a>
</div>
</div>


<div className="container mt-5 text-center " id='team'>
  <div className='row d-flex align-items-center justify-content-center'>
    <div className="col-lg-6">
  <h4 className='section-title ff-secondary text-center  text-warning fw-normal  mb-5'>Our Team</h4>
  <p className="text-start mb-5">Behind Your faoskitchen is a team of passionate individuals who share a common goal: to share the beauty of Africa with the World. Get to know the faces behind our business and the stories that inspires us everyday.</p>
  <p className="text-start"> We invite you to explore our product, savour our flavors and experience the warmth of African culture. Whether you are here to shop, plan an event, or simply learn more about Africa, we are thrilled to have you as a part of our story. Thank you for choosing faoskitchen - <strong> where Africa comes to you.</strong></p>
  </div>
  <div className="team-card text-center rounded overflow-hidden pb-5 col-10 col-lg-4">
    <div className="rounded-circle overflow-hidden m-5">
      <img className="img-fluid bg-white userimg" src={logo} alt="Title" />
      </div>
        <h4 className="mb-0">Fatimah Oredolapo</h4>
        <p className="card-text">CEO-chef</p>

    
  </div>
  </div>
</div>
<div className="container mt-5 text-center">
  <h4 className='section-title ff-secondary text-center  text-warning fw-normal  mb-4'>Testimonials</h4>
  <div className="p-o row d-flex justify-content-center align-items-center gap-3">
      <div className='border bg-white testi mb-3 col-lg-5'>
        <div className="header d-flex justify-content-between mt-5 px-3 mx-3 mb-3">
          <p><FaUser size={30} className='rounded bg-secondary p-1 me-1' ></FaUser> Adewale Jesudunni</p>
          <div className='stars'>
            <FaStar color='yellow'></FaStar>
            <FaStar color='yellow'></FaStar>
            <FaStar color='yellow'></FaStar>
            <FaStar color='yellow'></FaStar>
            <FaStar color='yellow'></FaStar>
          </div>
        </div>
        <p className='p-3'>Faoskitchen is undeniable one of the best places where you can find African products and meals. I have been looking for a place to order African meals so I can feel that taste of home after a long time, and faoskitchen perfectly satisfied my yearnings. Their food unequivocally reminds me of home.</p>
      </div>
      <div className='border bg-white testi col-lg-5 mb-3'>
        <div className="header d-flex justify-content-between mt-5 px-3 mx-3 mb-3">
          <p><FaUser size={30} className='rounded bg-secondary p-1 me-1' ></FaUser> Lisa Marshal</p>
          <div className='stars'>
            <FaStar color='yellow'></FaStar>
            <FaStar color='yellow'></FaStar>
            <FaStar color='yellow'></FaStar>
            <FaStar color='yellow'></FaStar>
            <FaStar color='grey'></FaStar>
          </div>
        </div>
        <p className='p-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam labore ratione eaque ad explicabo, voluptatum vero, id reiciendis dolor tenetur dicta tempore non expedita. Optio ab expedita ullam voluptatem ratione?</p>
      </div>
  </div>

</div>

</div>
<div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="container pt-5 pb-3">
                <div className="row g-5">
                    <div className="col-lg-4 col-md-6">
                        <h4 className="section-title ff-secondary text-start text-warning fw-normal mb-4">Company</h4>
                        <a className="btn btn-link" href="#about">About Us</a>
                        <a className="btn btn-link" href="#team">Our Team</a>
                        <a className="btn btn-link" href="#">Signup</a>
                        <a className="btn btn-link" href="#">Privacy Policy</a>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <h4 className="section-title ff-secondary text-start text-warning fw-normal mb-4">Contact</h4>
                        <p className="mb-2"><FaMapMarkerAlt className=" me-3"></FaMapMarkerAlt>18115 Golden Falls Ln spring Tx 7739.</p>
                        <p className="mb-2"><FaPhoneAlt className=' me-3'></FaPhoneAlt>8322798130</p>
                        <p className='mb-2'><FaInstagram className='me-3'></FaInstagram>faoskitchen</p>
                        <p className="mb-2"><FaEnvelope className='me-3'></FaEnvelope>foredolappo@gmail.com</p>
                    </div>
                    {/* <div className="col-lg-3 col-md-6">
                        <h4 className="section-title ff-secondary text-start text-warning fw-normal mb-4">Opening</h4>
                        <h5 className="text-light fw-normal">Monday - Saturday</h5>
                        <p>09AM - 09PM</p>
                        <h5 className="text-light fw-normal">Sunday</h5>
                        <p>10AM - 08PM</p>
                    </div> */}

                    <div className="col-lg-4 col-md-6">
                        <h4 className="section-title ff-secondary text-start text-warning fw-normal mb-4">Send Us a Message</h4>
                        <div className="position-relative mx-auto">
                            {/* <input className="form-control border-primary w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email"/> */}
                            <textarea className="form-control border-primary w-100 py-3 ps-4 pe-5" id="" placeholder='Send us a Message'></textarea>
                            <button type="button" className="btn btn-warning py-2 w-100 bottom-0 end-0 mt-2 sendbn">Send</button>
                        </div>
                    </div>
                </div>
            </div>
                <div className='text-align-center p-3 m-0 justify-content-center d-flex footer-copy'>faoskitchen&copy;2025, All Rights Reserved</div>

        </div>
    </div>

    </>
     );
};

export default Home;
