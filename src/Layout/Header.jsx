import React from 'react'
import "./styles/Header.css"

const Header = () => {
  return (
    <header className='header'>
        <div className='header-black'></div>
        <img className='header-img' src="/Home/poke.png" alt="" />
        <div className='header-circle'>
          <div className='header-circle-int'></div>
        </div>
        
    </header>
  )
}

export default Header