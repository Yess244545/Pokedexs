import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Pagination from '../components/Pokedex/Pagination'
import PokeCard from '../components/Pokedex/PokeCard'
import './styles/Pokedex.css'

const Pokedex = () => {
    const [pokemons, setPokemons] = useState([])
    const [pokemonsFilter, setPokemonsFilter] = useState([])
    const [types, setTypes] = useState([])
    const [namePokemon, setNamePokemon] = useState("")
    const [pokemonType, setPokemonType] = useState()

    const trainer=useSelector(state=>state.trainer) 

    const handleSubmit=e=>{
        e.preventDefault()
        const name=e.target.namePokemon.value
        setNamePokemon(name)
    }

    const handlechangeSelect=e=>{
        setPokemonType(e.target.value)
        setPage(1)
    }
    useEffect(()=>{
        const URL=`https://pokeapi.co/api/v2/${pokemonType? `type/${pokemonType}/`: "pokemon/?limit=99999"}`
        axios.get(URL)
        .then(res=>{
            if(pokemonType){
                const newPokemons=res.data.pokemon.map(pokemon=>pokemon.pokemon)
                setPokemons(newPokemons)
            }else{
                setPokemons(res.data.results)
            }
        })
        .catch(err=>console.log(err))
    },[pokemonType])

    useEffect(()=>{
        const URL='https://pokeapi.co/api/v2/type'
        axios.get(URL)
        .then(res=>setTypes(res.data.results))
        .catch(err=>console.log(err))
    },[])
    useEffect(()=>{
        const newPokemon= pokemons.filter(pokemon => pokemon.name.includes(namePokemon))
        setPokemonsFilter(newPokemon)
    },[namePokemon,pokemons])
    
    const [page, setPage] = useState(1)
    const [pokePerPage, setPokePerPage] = useState(8)//cantidad de pokemons por pagina
    const initialPoke=(page-1)*pokePerPage
    const finalPoke=page*pokePerPage
    const maxPage=pokemonsFilter && Math.ceil(pokemonsFilter.length/pokePerPage)

  return (
    <div className='poke-header'>
        
        <h3 > <span className='pok-h2'>Welcome {trainer}, </span>here you can find your favorite pokemon.</h3>
        <div className='poke-all'>
        <form className='poke-form' onSubmit={handleSubmit}>
            <input className='poke-input' id='namePokemon' type="text" />
            <button className='poke-btn'>Search</button>
        </form>
        <select  className='poke-select' onChange={handlechangeSelect}>
            <option className='poke-option' value="">All pokemons</option>
            {
                types?.map(type=> <option value={type.name} key={type.url}>{type.name}</option>)
            }
        </select>
        </div>

        <div className='poke-container'>

            {
                pokemonsFilter?.slice(initialPoke,finalPoke).map(poke=>(
                    <PokeCard 
                    key={poke.url}
                    url={poke.url}
                    />
                    
                ))
            }

        </div>
        <Pagination page={page} maxPage={maxPage} setPage={setPage}/>
    </div>
  )
}

export default Pokedex