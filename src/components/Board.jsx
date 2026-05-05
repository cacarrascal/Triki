import React from 'react'
import Square from './Square'
import './Board.css'

/**
 * Componente Board: representa el tablero de 3x3
 * @param {Array} squares - Array con los valores de las 9 celdas
 * @param {Array} winningLine - Array con los índices de la línea ganadora
 * @param {function} onSquareClick - Función que maneja el clic en una celda
 */
function Board({ squares, winningLine, onSquareClick }) {
  // Renderiza el tablero de 3x3
  const renderSquare = (i) => {
    const isWinning = winningLine && winningLine.includes(i)
    return (
      <Square
        key={i}
        value={squares[i]}
        isWinning={isWinning}
        onClick={() => onSquareClick(i)}
      />
    )
  }

  // Crea las filas del tablero
  const rows = [0, 1, 2].map(row => (
    <div key={row} className="board-row">
      {[0, 1, 2].map(col => renderSquare(row * 3 + col))}
    </div>
  ))

  return <div className="board">{rows}</div>
}

export default Board