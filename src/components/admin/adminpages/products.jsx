import React,{useState} from 'react'
import image2 from '../../../assets/5.jpg'
import image5 from '../../../assets/1.jpg'
import image6 from '../../../assets/8.jpg'
import car2 from '../../../assets/car1.png'
import car1 from '../../../assets/car2.png'
import car3 from '../../../assets/car3.png'
import '../../../../node_modules/bootstrap/dist/css/bootstrap.css'
import { FaCartPlus, FaRegHeart, FaPlus, FaHeart, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaRegSmile } from 'react-icons/fa';
import { FaPencil, FaTrashCan } from 'react-icons/fa6'
function Products(){
  const [products,setProducts]=useState([
    {
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
        // const filteredData= productPage==="all" ? products : products.filter(item=>item.category===productPage);
        const removeProduct = (indextodel) => {
            const updatedProducts = products.filter((_,index) =>index !== indextodel);
            setProducts(updatedProducts);
          };
    return(
        <>
            <div className="row g-3 products p-3" >
              <div className='px-3'>
              <FaPlus className='bg-black text-light py-3 rounded w-100' size={60}></FaPlus>
              </div>
                 {products.map((product,index)=>(
                <div className=' col-6 col-md-4 col-lg-3  p-2'  key={index}>
                <div className="card bg-white color-dark text-dark border-0 rounded-4 p-0 h-100">
                    <img
                        src={product.src}
                        className="img-fluid card-header p-0"
                        alt="image desc"
                    />
                    <div className="card-body px-3">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text d-flex align-items-center justify-content-between px-1">
                            {product.price} 
                            <div>
                            <FaTrashCan className='text-danger me-2' onClick={ ()=> removeProduct(index)}></FaTrashCan>
                            <FaPencil className='text-danger'></FaPencil>
                            </div>
                            </p>
                    </div>
                </div>
                </div>
                ))}
                </div>
        </>
    )
}
export default Products