import React, {useContext, useState} from 'react'
import { CgShoppingCart } from "react-icons/cg";
import {TbSearch } from 'react-icons/tb'
import Cart from './Cart';
import { Context } from './ContextProvider';
// import Search from './Search';

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const {cartItemIndex} = useContext(Context);

  return (
    <>
<header className='min-header bg-blue-900 flex' >
<div className="text-center p-2">
            <a href="/assests/images/logo.png" className="flex items-center mb-4 sm:mb-0">
                <img src="/assests/images/logo.png" className="h-12 mr-3" alt="Logo" />
            </a>
            </div>
  <div className='header-content '>
<nav>
   <ul className='left flex text-lg  text-white m-4'>
      <li className='mr-7 hover:text-green-300'>Home</li>
      <li className='mr-7  hover:text-green-300'>About </li>
      <li className='mr-7  hover:text-green-300'>Contact</li>
    </ul>
    </nav>
  </div>
  <div className='  text-white flex  '>
    <TbSearch onClick={()=> setShowSearch(true)} className='text-4xl mr-6 mt-3' />
                <span onClick={()=> setShowCart(true)} className='card-icon font-bold text-center text-lg mt-1 '>
                 <span >{cartItemIndex}</span>
 <CgShoppingCart/>
        </span>
  </div>
</header>
{showCart && <Cart setShowCart={setShowCart}/> }
{/* {showSearch && <Search setShowSearch={setShowSearch}/> } */}

</>
  )
}

export default Header
