import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/PokeCard.css'

const PokeCard = ({url}) => {

    const [pokemon, setPokemon] = useState()//para guardar los datos
    

    useEffect(()=>{
        axios.get(url)//trabajando con los datos de url de cada pokemon
        .then(res=>setPokemon(res.data))
        .catch(err=>console.log(err))
    },[])

    const navigate=useNavigate()
    const handleClick=()=>{
        navigate(`/pokedex/${pokemon?.id}`)


    }

  return (
    <article className={`pokeCard border-${pokemon?.types[0].type.name}`} onClick={handleClick}>
        <section className={`pokeCard-header bg-lg-${pokemon?.types[0].type.name}`}>
            <img src="/Home/Pokeball.png" alt="" className='pokeCard-ball'/>
        </section>
        <section className='pokeCard-content'>

        <header>
            <img className='pokeCard-img' src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
        </header>
        <section className='pokeCard-section'>
            <h3 className={`pokeCard-name color-${pokemon?.types[0].type.name}`} >{pokemon?.name}</h3>
            <div className='pokeCard-types'>
                {
                    pokemon?.types.map(type=>(
                        <li 
                        className={`pokeCard-types-li `} 
                        key={type.type.name}>{type.type.name}</li>
                    ))
                }
            </div>
        </section>
        <div className='linea'></div>
        <section className='pokeCard-stats'>
            {
                    pokemon?.stats.map(stat=>(
                        <div className='pokeCard-stat' key={stat.stat.name}>
                            <p className='pokeCard-stat-name'>{stat.stat.name}</p>
                            <p className={`pokeCard--stat-value color-${pokemon?.types[0].type.name}`}> {stat.base_stat}</p>
                        </div>
                    ))
            }
            
        </section>
        </section>
    </article>
  )
}

export default PokeCard