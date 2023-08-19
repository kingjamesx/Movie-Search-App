import {useEffect} from 'react'
import Hero from '../component/Hero'
import Footer from '../component/Footer'
import Content from '../component/Content'
const Home = () => {
//   useEffect(
//     ()=>{
//       window.parent.postMessage('Hello from iframe', '*');
//     },[]
// )


  return (
    <div className='home'>
        <Hero/>
        <Content/>
      <Footer/>
    </div>
  )
}

export default Home