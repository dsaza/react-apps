export default function MessageGame({ resetGame, title, message }) {
	return (
		<>
			<section className='aspect-square border-2 border-slate-400 rounded-md flex items-center justify-center flex-col select-none'>
				<strong className='text-6xl mb-3'>{title}</strong>
				<span className='text-xl'>{message}</span>
			</section>
			<section className='mt-4'>
				<button onClick={resetGame} type='button' className='w-full text-center border border-gray-200 p-2 rounded-lg font-semibold text-blue-400'>Reiniciar partida</button>
			</section>
		</>
	)
}
