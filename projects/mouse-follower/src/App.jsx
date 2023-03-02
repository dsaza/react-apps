import { useEffect, useState } from 'react'

function App() {
	const [enabled, setEnabled] = useState(false)
	const [opacity, setOpacity] = useState(0)
	const [position, setPosition] = useState({ x: 0, y: 0 })

	useEffect(() => {
		const handlePointerMove = ({ clientX, clientY }) => {
			setPosition({ x: clientX, y: clientY })
			setOpacity(1)
		}

		if (enabled) {
			setOpacity(0)
			window.addEventListener('pointermove', handlePointerMove)
		}

		return () => {
			setOpacity(0)
			window.removeEventListener('pointermove', handlePointerMove)
		}
	}, [enabled])

	useEffect(() => {
		document.body.classList.toggle('no-cursor', enabled)

		return () => {
			document.body.classList.remove('no-cursor')
		}
	}, [enabled])

	return (
		<main>
			<h3>Mouse follower</h3>
			{enabled && (
				<div
					style={{
						position: 'absolute',
						backgroundColor: 'rgba(255,255,255,.3)',
						borderRadius: '50%',
						opacity: opacity,
						pointerEvents: 'none',
						left: position.x,
						top: position.y,
						width: 40,
						height: 40,
						userSelect: 'none',
						transform: `translate(-50%, -50%)`,
						transition: 'ease opacity .5s'
					}}
				/>
			)}
			<button onClick={() => setEnabled(!enabled)}>
				{enabled ? 'Desactivar' : 'Activar'} seguir puntero
			</button>
		</main>
  )
}

export default App
