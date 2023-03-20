// MINUTO 1:16:30  https://www.twitch.tv/videos/1711159530?filter=archives&sort=time

import { useState } from "react"
import confetti from "canvas-confetti"

import { Square } from "./components/Square"
import { TURNS } from "./constants"
import {checkWinnerFrom} from "./logic/board"
import { WinnerModal } from "./components/WinnerModal"


function App() {
// Creamos el tablero y la configuracion del mismo
const [board, setBoard] = useState(Array(9).fill(null))
// creamos los turnos y la modificacion de los mismos
const [turn, setTurn] = useState(TURNS.X)
// creamos al wanador y la modificacion del mismo, null no hay ganador, y false es un empate
const [winner, setWinner] = useState(null)

const resetGame = () => {
  setBoard(Array(9).fill(null))
  setTurn(TURNS.X)
  setWinner(null)

}

const checkEndGame = (newBoard) => {
  // Si todos los casilleros tienen algo, entonces true
  return newBoard.every((square) => square !== null)
}

const updateBoard = (index) => {
// no actualizar si la posicion tiene algo
  if(board[index] || winner) return
// actualizar el tablero
  const newBoard = [...board]
  newBoard[index] = turn
  setBoard(newBoard)
// cambiar el turno
  const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
  setTurn(newTurn)
// Revisar si hay ganador
const newWinner = checkWinnerFrom(newBoard)
if(newWinner) {
  confetti()
  setWinner(newWinner)
} else if (checkEndGame(newBoard)) {
  setWinner(false) //empate
}

}

  return (
    <main className="board">
      <h1>TIC TAC TOE</h1>
      <button onClick={resetGame}>Resetear juego</button>
      <section className="game">
        {
          board.map((square, index) => {
            return(
              <Square
              key={index}
              index={index}
              updateBoard={updateBoard}
              >
                {square}
              </Square>
            )
          })
        }
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
          </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
          </Square>
      </section>
      <section>
        <WinnerModal resetGame={resetGame} winner={winner}/>
      </section>
    </main>
    
  )
}

export default App
