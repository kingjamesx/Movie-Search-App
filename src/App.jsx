import { useEffect,useState } from 'react'
import './App.css'
import Home from './pages/Home'
import MovieDetails from './pages/MovieDetails'
import Error from './pages/Error'
import { Routes,Route } from 'react-router-dom'
function App() {
  const [urlChanges, setUrlChanges] = useState([]); // Array to track URL changes
  const [realClicks, setRealClicks] = useState(0); // Count of real clicks
  const [missedClicks, setMissedClicks] = useState(0); // Count of missed clicks

  useEffect(() => {
    const handleUrlChange = () => {
      const currentUrl = window.location.href;

      // Add the new URL to the urlChanges array
      setUrlChanges((prevUrlChanges) => [...prevUrlChanges, currentUrl]);
    };

    const handleClick = () => {
      const currentUrl = window.location.href;

      // Increment realClicks if the URL changes on click
      if (urlChanges[urlChanges.length - 1] !== currentUrl) {
        setRealClicks((prevRealClicks) => prevRealClicks + 1);
      } else {
        // Increment missedClicks if the URL doesn't change on click
        setMissedClicks((prevMissedClicks) => prevMissedClicks + 1);
      }
    };

    // Listen for the 'popstate' event, which indicates a change in URL
    window.addEventListener('popstate', handleUrlChange);

    // Listen for the 'click' event to capture clicks within the iframe
    window.addEventListener('click', handleClick);

    // Initial URL capture
    handleUrlChange();

    // Cleanup the event listeners when the component unmounts
    return () => {
      window.removeEventListener('popstate', handleUrlChange);
      window.removeEventListener('click', handleClick);
    };
  }, [urlChanges]);

  // Send information to the parent window
  useEffect(() => {
    const info = {
      urlChanges,
      realClicks,
      missedClicks,
    };

    window.parent.postMessage({ type: 'iframeInfo', info }, '*');
  }, [urlChanges, realClicks, missedClicks]);

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
