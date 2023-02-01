import { useState } from 'react'
import confetti from 'canvas-confetti'

import Board from './components/Board'
import MessageGame from './components/MessageGame'
import Header from './components/Header'

import { TURNS } from './constants'
import { checkWinnerBoard } from './logic'

export default function App() {
	const [board, setBoard] = useState(() => {
		const boardFromStorage = window.localStorage.getItem('board')
		if (boardFromStorage) return JSON.parse(boardFromStorage)
		return Array(9).fill(null)
	})

	const [turn, setTurn] = useState(() => {
		const turnFromStorage = window.localStorage.getItem('turn')
		return turnFromStorage ?? TURNS.X
	})

	const [winner, setWinner] = useState(null)

	const updateBoard = (index) => {
		if (board[index] || winner) return

		const newBoard = [...board]
		newBoard[index] = turn
		setBoard(newBoard)

		const newWinner = checkWinnerBoard(newBoard)
		if (newWinner) {
			confetti()
			setWinner(newWinner)

			return
		}

		const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
		setTurn(newTurn)

		window.localStorage.setItem('board', JSON.stringify(newBoard))
		window.localStorage.setItem('turn', newTurn)
	}

	const resetGame = () => {
		setBoard(Array(9).fill(null))
		setTurn(TURNS.X)
		setWinner(null)

		window.localStorage.removeItem('board')
		window.localStorage.removeItem('turn')
	}

  return (
		<main className='h-screen flex justify-center items-center px-3 py-2'>
			<div className='w-full max-w-[320px] bg-white shadow-md rounded-2xl overflow-hidden p-5'>
				<Header board={board} turn={turn} />
				{
					winner
						? <MessageGame
							title={winner}
							message='¡GANADOR!'
							resetGame={resetGame}
						/>
						: board.some(item => item === null)
							? <Board
								board={board}
								updateBoard={updateBoard}
							/>
							: <MessageGame
								title={`${TURNS.X}${TURNS.O}`}
								message='¡EMPATE!'
								resetGame={resetGame}
							/>
				}
			</div>
		</main>
	)
}
