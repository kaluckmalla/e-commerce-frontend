import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import {Home} from './components/Home'
import {ContextProvider}  from './components/ContextProvider'
import SingleProduct from './components/SingleProduct';
import Cart from './components/Cart';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <ContextProvider>
      <Header/>
<BrowserRouter>
<Routes> 
<Route exact path="/" element={<Home />} />

<Route exact path="/" element={<Home />} />
<Route exact path="/product-detail/:id" element={<SingleProduct />} />
<Route exact path="/cart"  element={<Cart />} />

                 </Routes>
  
</BrowserRouter>
</ContextProvider>

<Footer />

</>
  );
}

export default App;
