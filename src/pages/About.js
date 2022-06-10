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
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis voluptate vitae voluptates iste nihil, nesciunt quos sunt corrupti. Qui ut non rerum laborum ratione earum beatae iusto nostrum eum ex!</p>
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