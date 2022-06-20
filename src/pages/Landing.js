import React from 'react'

import { Link } from 'react-router-dom'

function Landing() {

  return (
    <main className="landing-main">
        <img src="/image/donate.jpg" alt="donate" />  

        <div className="landing-container">
            <nav>
                <h1 className="logo">
                    Save<span style={{color:"#2cb1bc"}}>.</span>
                </h1>
                <ul>
                    <li><Link to='/donate'>Donate now</Link></li>
                </ul>
            </nav> 

            <main className="hero">
                <h1>
                    Small Effort <br/> Make Big Change.
                </h1>
                <p> Volonteers do not necessarily have the time, <br/>they have the heart.</p>

                <Link to='/about'>About Us</Link>
            </main>
        </div>
    </main>
  )
}

export default Landing