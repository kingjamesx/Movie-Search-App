import { useEffect } from 'react'
import './App.css'
import Home from './pages/Home'
import MovieDetails from './pages/MovieDetails'
import Error from './pages/Error'
import { Routes,Route } from 'react-router-dom'
import { useEffect } from 'react'
function App() {
  // Inside the iframe
        window.parent.postMessage('Hello from iframe', '*');

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:id' element={<MovieDetails/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
      
    </div>
  )
}

export default App
