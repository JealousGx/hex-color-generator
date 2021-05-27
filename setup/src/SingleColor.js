import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(', ');
  const hex = rgbToHex(...rgb); /// An alternate to print the hex value, replace {hexVal} return ith this variable name
  const hexVal = `#${hexColor}`;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [alert])

  return (
    <article
      className={`color ${index > 10 && 'color-light' }`} 
      style={{ backgroundColor: `rgb(${bcg})` }} 
      onClick={() => { 
        setAlert(true);
        navigator.clipboard.writeText(hexVal); 
      }}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hexVal}</p>
      {
        alert && <p className='alert'>copied to clipboard</p>
      }
    </article>
  )
}

export default SingleColor
