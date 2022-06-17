import { AiFillPhone } from "react-icons/ai"
import { MdOutlineEmail } from "react-icons/md"

import { Link } from "react-router-dom"
function About() {
  return (
    <main className="about-main">
        <section className="sec-one">
            {/* <h1>Logo</h1> */}
        </section>
        <section className="sec-two">
          <div>
          <h2>About Us</h2>
            <p>We are raising money for the Ukrainine refugee children in Moldova and your contribution will make a great impact, whether you donate $5 or $500. The North Carolina-Moldova Partnership has partnered with Moldova World Children’s Fund to support thousands of the Ukrainian refugee children that arrived and continue to arrive in Moldova seeking shelter, food and a new home. Thank you for your support!</p>
            <Link className="about-btn" to='/donate'>Donate now</Link>
          </div>
        </section>
        <footer className="sec-three">
            <div className="footer-content">
               <h3>Contact Us</h3>
               <div>
                 <div className="item one">
                   <MdOutlineEmail/>
                   <span>donate@gmail.com</span>
                 </div>
                 <div className="item two">
                   <AiFillPhone/>
                   <span>+237 680712829 </span>
                 </div>
               </div>
            </div>
        </footer>
    </main>
  )
}

export default About