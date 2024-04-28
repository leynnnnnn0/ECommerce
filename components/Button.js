import React from 'react'

const Button = ({param}) => {
  return (
    <button className='buttonDesign'>
        {param || "Button"}
    </button>
  )
}

export default Button