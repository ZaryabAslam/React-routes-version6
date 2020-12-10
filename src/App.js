import React from 'react'
import './App.css';
import { Routes, Route, useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import Home from './components/home'
import About from './components/about'
import Product from './components/product'
import Details from './components/details'
import Not from './components/not'
import Productcontent from './components/productcontent'

function App() {
  const navigate = useNavigate();
  return (
    <div>


      <div>
        <Link to='/'>Home</Link> {' '}
        <Link to='/about'>About</Link>{' '}
        <Link to='/product'>Product</Link>{' '}
        <Link to='/product/mobile'>mobile</Link>
        <Link to='/product/laptop'>laptop</Link>
        <button onClick={()=>{
          navigate('/about')
        }}>
    display about page
        </button>
      </div>

      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='product' element={<Product />} >
          <Route path='/' element={<Productcontent></Productcontent>}></Route>
            <Route path=':detailsproduct' element={<Details></Details>}></Route>
          </Route>
          <Route path='*' element={<Not />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
