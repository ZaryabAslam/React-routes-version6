import React from 'react'
import { useParams } from 'react-router-dom';


function Details() {
    const {detailsproduct} = useParams();
  return (
    <div>
      product details of item no {detailsproduct} 
    </div>
  );
}

export default Details;