
import './App.css'
import Home from './pages/Home'
import MovieDetails from './pages/MovieDetails'
import Error from './pages/Error'
import { Routes,Route } from 'react-router-dom'
import { useEffect } from 'react'
function App() {
  // Inside the iframe
      useEffect(
        ()=>{
          !function(e,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports.$=o():e.$=o()}(self,(()=>(window.onload=function(){var e=document.location.href,o=document.querySelector("body");new MutationObserver((function(o){if(e!==document.location.href){e=document.location.href;var t=JSON.parse(JSON.stringify(e));parent.postMessage(t,"http://localhost:2222/")}})).observe(o,{childList:!0,subtree:!0})},{})));
        },[]
      )
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
