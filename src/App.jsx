import { useEffect,useState } from 'react'
import './App.css'
import Home from './pages/Home'
import MovieDetails from './pages/MovieDetails'
import Error from './pages/Error'
import { Routes,Route } from 'react-router-dom'
function App() {
  const [urlChanges, setUrlChanges] = useState([]); // Array to track URL changes

  useEffect(() => {
    const handleUrlChange = () => {
      const currentUrl = window.location.href;
      setUrlChanges((prevUrlChanges) => [...prevUrlChanges, currentUrl]);
    };
  
    // Listen for the 'popstate' event, which indicates a change in URL
    window.addEventListener('popstate', handleUrlChange);
  
    // Initial URL capture
    handleUrlChange();
  
    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('popstate', handleUrlChange);
    };
  }, []);
  
  // Listen for messages from the parent window
  window.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'requestClickInfo') {
      const clickInfo = {
        urlChanges,
      };
      
      // Send click information back to the parent window
      window.parent.postMessage({ type: 'iframeClick', clickInfo }, '*');
    }
  });

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
