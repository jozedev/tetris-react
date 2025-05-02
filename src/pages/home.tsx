import './home.css'
import Ad from '../components/Ad'
import { TetrisGame } from '../components/TetrisGame'
import { Link } from 'react-router-dom'

function HomePage () {
  return (
    <>
      <main>
        <h1 className="title">TETRIS</h1>
        <TetrisGame />
        <Ad />
      </main>
      <footer>
        <p><small>You can check out the code <a href='https://github.com/jozedev/tetris-react' target='_blank' rel="noreferrer">here</a>.</small></p>
        <p><Link to="/about"><small>About us</small></Link></p>
      </footer>
    </>
  )
}

export default HomePage
