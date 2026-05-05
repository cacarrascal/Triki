import React from 'react'
import './Square.css'

/**
 * Componente Square: representa una celda individual del tablero
 * @param {string} value - Valor de la celda ('X', 'O', o null)
 * @param {boolean} isWinning - Indica si esta celda es parte de la línea ganadora
 * @param {function} onClick - Función que se ejecuta al hacer clic en la celda
 */
function Square({ value, isWinning, onClick }) {
  return (
    <button
      className={`square ${value?.toLowerCase()} ${isWinning ? 'winning' : ''}`}
      onClick={onClick}
      aria-label={value ? `Celda con ${value}` : 'Celda vacía'}
    >
      {value}
    </button>
  )
}

export default Square