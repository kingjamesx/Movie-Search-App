import React from 'react'

const Hero = () => {
  return (
    <div className='hero'>
        <header className='header'>
          <div> <h2 className='header-title'>SearchFlix</h2></div>
           
           <div><button className='header-btn'>Sign In</button></div> 
        </header>
           <section className='action'>
              <h1 className='action-title'>Unlimited movies,Tv shows, and more.</h1>
              <p className='action-text1'>Search anywhere cancel anytime.</p>
              <p className='action-text2'>Ready to Search? Enter your email to create or restart your membership.</p>
              <div className='action-box'>
                <input type="text" placeholder='Email Address' />
                <button>Get Started</button>
              </div>
           </section>
    </div>
  )
}

export default Hero