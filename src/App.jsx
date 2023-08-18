import { useEffect } from 'react'
import './App.css'
import Home from './pages/Home'
import MovieDetails from './pages/MovieDetails'
import Error from './pages/Error'
import { Routes,Route } from 'react-router-dom'
function App() {
  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data && event.data.type === 'requestClickInfo') {
        const clickInfo = {
          urlChanges: window.location.href,
        };

        window.parent.postMessage({ type: 'iframeClick', clickInfo }, '*');
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

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
