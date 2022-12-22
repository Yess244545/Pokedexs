import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './styles/PokedexInfo.css'

const PokedexInfo = () => {

    const { id } = useParams()//funcion para capturar el parametro
    const [pokemon, setPokemon] = useState()
    const getPercent=(valuestat)=>{
        const maxValue=150
        return`${(valuestat*100)/maxValue}%`

    }

    useEffect(() => {
        const URL=`https://pokeapi.co/api/v2/pokemon/${id}`
        axios.get(URL)
        .then(res=>setPokemon(res.data))
        .catch(err=>console.log(err))
      
    
    }, [id])
    
  return (
    <main className='poke'>
        
        <section className='pokeId'>
            <section className={`pokeId-header bg-lg-${pokemon?.types[0].type.name}`}></section>
            <img className='pokeId-img' src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
            <h3 className='pokeId-id'> # {pokemon?.id}</h3>
            <h2 className='pokeId-name'>{pokemon?.name}</h2>
            <div className='pokeId-feactures'>
                <div className='pokeId-f'>
                    <p className='pokeId-f-name'>Weight</p>
                    <p className='pokeId-f-value'>{pokemon?.weight}</p>
                </div>
                <div className='pokeId-f'>
                    <p className='pokeId-f-name'>Height</p>
                    <p className='pokeId-f-value'>{pokemon?.height}</p>
                </div>
            </div>
            <section className='pokeId-info'>
                <div className='pokeId-info-container'>
                    <h4 className='pokeId-info-title'>Types</h4>
                    <div className='pokeId-info-data'>
                        {
                            pokemon?.types.map(type=> <p className={`pokeId-info-value bg-${type.type.name}`} key={type.type.name}>{type.type.name}</p>)
                        }
                        
                    </div>
                </div>
                <div className='pokeId-info-container'>
                    <h4 className='pokeId-info-title'>Abilities</h4>
                    <div className='pokeId-info-data'>
                        {
                            pokemon?.abilities.map(ability=> <p className='pokeId-info-value' key={ability.ability.name}>{ability.ability.name}</p>)
                        }
                        
                    </div>
                </div>
            </section>
            
            <section className='pokeId-stats'>
                <h3 className='pokeId-stats-title'>Stats</h3>
                <div className='pokeId-stats-container'>
                        {
                            pokemon?.stats.map(stat=> (
                                <div key={stat.stat.name} className='pokeId-stat'>
                                <div className='pokeId-stat-header'>
                                    <p className='pokeId-stat-name'>{stat.stat.name}</p>
                                    <p className='pokeId-stat-value'>{stat.base_stat} / 150</p>
                                </div>
                                <div className='pokeId-bar'>
                                <div style={{width:getPercent(stat.base_stat)}} className='pokeId-bar-p'> </div>
                                </div>
                                </div>

                            ))
                        }
                    
                </div>
            </section>
        </section>
    </main>
  )
}

export default PokedexInfo
