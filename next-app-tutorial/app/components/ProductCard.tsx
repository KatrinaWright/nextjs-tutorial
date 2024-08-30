import React from 'react'
import AddToCart from './AddToCart';
// import styles from './ProductCard.module.css';

const ProductCard = () => {
  return (
    <div className='p-5 my-5 bg-sky-400 text-white texl-xl hover:bg-sky-500'>
        <div>ProductCard</div>
        <AddToCart/>
    </div>
)
}

export default ProductCard