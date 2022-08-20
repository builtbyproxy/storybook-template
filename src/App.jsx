import './App.css'
import { useState, useEffect } from 'react'

import SearchBar from './components/searchBar'

function App() {
  const [availablePokemon, setAvailablePokemon] = useState([])
  const [pokemon, setPokemon] = useState({ name: '', apiUrl: '' })

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1154")
      .then(res => res.json())
      .then(data => setAvailablePokemon(data.results))
  }, [])

  function handleSubmit (pokemon, apiUrl) {
    setPokemon({ name: pokemon, apiUrl })
  }

  return (
    <div className="App">
      {
        pokemon.name
          ? <div>Pokemon Loads Here</div>
          : <SearchBar dataToSearch={availablePokemon} handleSubmit={handleSubmit} />
      }
    </div>
  )
}

export default App
