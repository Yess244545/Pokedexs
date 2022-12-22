import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Footer from '../Layout/Footer'
import { setTrainerGlobal } from '../store/slices/trainer.slice'
import "./styles/Home.css"

const Home = () => {

    //dispatch=despachador
    const dispatch=useDispatch()
    const navigate=useNavigate()//navigate es una funcion

    const handleSubmit=e=>{// captura los datos del input 
        e.preventDefault()
        dispatch(setTrainerGlobal(e.target.name.value.trim()))
        //captura datos sin espaciocon el  trim
        e.target.name.value=''//Se borre los datos una vez que se envie del input
        navigate('/pokedex')//para navegar hacia pokedex, una vez se da el nombre 


    }
  return (
    <div className='home'>
        <img className='home-img' src="/Home/poke.png" alt="" />
        <h1 className='home-subtitle'>Hi Trainer!</h1>
        <p className='home-text'>give me your name to start</p>
        <form className='home-form' onSubmit={handleSubmit}>
            <input className='home-input' id='name' type="text" />
            <button className='home-btn'>Start</button>
        </form>
        
    </div>
    
  )
}

export default Home