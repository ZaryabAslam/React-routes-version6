import React from 'react'
import { Outlet } from 'react-router-dom'


function Product() {
  return (
    <div>
     <h1> hi aim product</h1>
     <hr></hr>
     <div>
       <Outlet></Outlet>
     </div>
    </div>
  );
}

export default Product;