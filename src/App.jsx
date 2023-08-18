import { useEffect } from 'react'
import './App.css'
import Home from './pages/Home'
import MovieDetails from './pages/MovieDetails'
import Error from './pages/Error'
import { Routes,Route } from 'react-router-dom'
function App() {
  useEffect(() => {
    const handleUrlChange = () => {
      const currentUrl = window.location.href;

      // Send the URL change info to the parent window
      window.parent.postMessage({ type: 'iframeUrlChange', url: currentUrl }, '*');
    };

    const handleClick = (event) => {
      const clickedElement = event.target;
      const clickedInfo = {
        tag: clickedElement.tagName,
        id: clickedElement.id,
        classList: Array.from(clickedElement.classList),
      };

      // Send the click info to the parent window
      window.parent.postMessage({ type: 'iframeClick', clickInfo: clickedInfo }, '*');
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
