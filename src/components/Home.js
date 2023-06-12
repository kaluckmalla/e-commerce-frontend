import  React,{ useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Context } from './ContextProvider';


export const Home = () => {

 const {products, getProducts}=useContext(Context);
 useEffect(()=> {
  getProducts();
},[]);

const navigate=useNavigate();

    const Truncate = (string, number) => {
        if (!string) {
          return null;
        }
        if (string.length <= number) {
          return string;
        }
        return string.slice(0, number) + "...";
      };
      

  return (
    <>
<section className="home mt-3" > 
        <div className="container mx-auto">
          <h1 className='product-header font-bold text-purple-600 text-2xl ps-3'>Available Products</h1>
         
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-5
          ">
            {products?.map((singleProduct) => (
              <div className="card  group border border-gray-300 mx-3 my-3 rounded"  key={singleProduct.id}>

                <img 
                  className="card-image h-48 justify-items-center mx-auto mb-3 mt-3 hover:scale-110 transition duration-300"
                  src={singleProduct.image}
                  alt={singleProduct.title}
                />
                <div className="card-body mx-3">
                  <h5 
                    className="card-title font-bold text-lg "
                    title={singleProduct.title.length >= 50 ? singleProduct.title : null}
                  >
                    {Truncate(singleProduct.title, 55)}
                  </h5>
                  <p key={singleProduct.description} className="card-description mb-3 ">
                    {Truncate(singleProduct.description, 55)}
                  </p>
              </div>
<div className='bottom-0'>
                  <div className='flex mb-3'>
                  <p className="card-price text-xl w-6/12 font-bold  text-red-500 text-start">${singleProduct.price}</p>
                <button onClick={()=>{   
navigate('/product-detail/'+singleProduct.id);
                }} className='font-bold me-3 w-6/12 text-end  hover:scale-110 transition duration-300'> Go</button>
          </div>
          </div>
                </div>
            ))}
          </div> 
        </div>
      </section>
   </>
  )
}
