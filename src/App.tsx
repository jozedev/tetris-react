import './App.css'
import Ad from './components/Ad'
import { TetrisGame } from './components/TetrisGame'

function App () {
  return (
    <>
      <main>
        <h1 className="title">TETRIS</h1>
        <TetrisGame />
        <Ad />
      </main>
      <footer>
        <small>You can check out the code <a href='https://github.com/jozedev/tetris-react' target='_blank' rel="noreferrer">here</a>.</small>
      </footer>
    </>
  )
}

export default App
