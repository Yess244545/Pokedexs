import { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom';
import './App.css'
import ProtectedRoutes from './components/ProtectedRoutes';
import Footer from './Layout/Footer';
import Home from './pages/Home';
import Pokedex from './pages/Pokedex';
import PokedexInfo from './pages/PokedexInfo';

function App() {

  const trainer=useSelector(state=>state.trainer)


  

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>

        {/*Rutas protejidas*/}
        <Route element={<ProtectedRoutes/>}>
          <Route path='/pokedex' element={<Pokedex />}/>
          <Route path='/pokedex/:id' element={<PokedexInfo />}/>
        </Route>
        
      </Routes>
      <Footer/>
      
    </div>
  )
}

export default App
