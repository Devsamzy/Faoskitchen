import React, { useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {MdMoreVert} from 'react-icons/md'
import './admin.css'
import {FaTimes} from 'react-icons/fa';
import Productspage from './adminpages/products'
import Users from './adminpages/users'
function Admin(){
    const [page,setPage]=useState(<Productspage/>);
    const [sidenav,setSidenav]=useState(true)
    return(
        <>
        <main>
            <section className='admin bg-background m-0 p-0 h-100'>
                <div className='container-xxl p-0 row m-0'  > 
            <div className={sidenav?"sidenav text-dark bg-background col-lg-3 col-sm-0 m-0 p-4 pt-5":"d-none"} >
                    <h1 className='p-2 py-4'>Faoskitchen.</h1>

                    <li  className={page.type===Productspage?'activebg':' bg-menu'} onClick={()=>setPage(<Productspage/>)}>Manage Products</li>
                    <li className={page.type === Users?'activebg':'bg-menu '} onClick={()=>setPage(<Users/>)}>Users</li>

                    <div id='closebn' onClick={()=>setSidenav(false)}><FaTimes className="closebn menubn" size={65}></FaTimes></div>
                </div>
                <div className='main col-lg-9 m-0 p-0 bg-light'  >
                <nav className='p-3 bg-white border border-bottom m-0 p-lg-4 pt-sm-6'  >
                    <h1 className='pt-lg-4'>Admin Dashboard</h1>
                    <MdMoreVert size={25} className='menubn' onClick={()=> setSidenav(true)}></MdMoreVert>
                </nav>
                {page}
                </div>
                </div>
            </section>
        </main>
        </>
    )
}
export default Admin