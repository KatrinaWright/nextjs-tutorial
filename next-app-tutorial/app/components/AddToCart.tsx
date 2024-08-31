'use client'
import React from 'react'

const AddToCart = () => {
  return (
    <div>
        <a href="http://localhost:3000/users" target="_blank">
          <button className='btn btn-primary' id='open-window-button' onClick={() => console.log('Click')}>Add to Cart</button>
        </a>
    </div>
  )
}
 
export default AddToCart