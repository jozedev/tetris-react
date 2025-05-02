import './about.css'
import { Link } from "react-router-dom"

function AboutPage () {
  return (
    <div>
      <h1>About Us</h1>
      <p className="about-text">
        Hi, I'm Amadeus. I'm a software developer and I love to build cool stuff and share it with the world. 
        I love to play Tetris and I'm always looking for new challenges to push myself. Hope you like it!
      </p>
      <Link to="/">Go to Home Page</Link>
    </div>
  )
}

export default AboutPage
