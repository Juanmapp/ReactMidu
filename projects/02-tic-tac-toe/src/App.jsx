// MINUTO 50:00  https://www.twitch.tv/videos/1711159530?filter=archives&sort=time

import { useState } from "react"

const TURNS = {
  X: "x",
  O:"0"
}


// creamos las casillas
const Square = ({children, isSelected, updateBoard, index}) => {
// hacemos el condicional para indicar de quien es el turno
  const className=`square ${isSelected ? 'is-selected': ''}`

  const handleClick = () => {
    updateBoard(index)
  }

  return (
  <div onClick={handleClick} className={className}>
    {children}
  </div>
  )
}

const WINNER_COMBOS = [
  [3,4,5]]

function App() {
// Creamos el tablero y la configuracion del mismo
const [board, setBoard] = useState(Array(9).fill(null))
// creamos los turnos y la modificacion de los mismos
const [turn, setTurn] = useState(TURNS.X)
// creamos al wanador y la modificacion del mismo, null no hay ganador, y false es un empate
const [winner, setWinner] = useState(null)

const updateBoard = (index) => {
// noa actualizar si la posicion tiene algo
  if(board[index]) return
// actualizar el tablero
  const newBoard = [...board]
  newBoard[index] = turn
  setBoard(newBoard)
// cambiar el turno
  const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
  setTurn(newTurn)
}

  return (
    <main className="board">
      <h1>TIC TAC TOE</h1>
      <section className="game">
        {
          board.map((_, index) => {
            return(
              <Square
              key={index}
              index={index}
              updateBoard={updateBoard}
              >
                {board[index]}
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
    </main>
    
  )
}

export default App
