import { useState } from 'react'
import confetti from 'canvas-confetti'

import Board from './components/Board'
import MessageGame from './components/MessageGame'
import { Header } from './components/Header'

import { TURNS } from './constants'
import { checkWinnerBoard } from './logic'
import { Title } from '../../components/Title'

export function Triqui() {
	const [board, setBoard] = useState(Array(9).fill(null))
	const [turn, setTurn] = useState(TURNS.X)
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
	}

	const resetGame = () => {
		setBoard(Array(9).fill(null))
		setTurn(TURNS.X)
		setWinner(null)
	}

	return (
		<div className="container mx-auto px-6 pb-20">
			<Title text='Triqui' />
			<main className='w-full max-w-[530px] mx-auto'>
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
			</main>
		</div>
	)
}
