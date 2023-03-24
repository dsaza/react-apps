export default function MessageGame({ resetGame, title, message }) {
	return (
		<>
			<section className='aspect-square bg-[rgba(0,0,0,.15)] rounded-md flex items-center justify-center flex-col select-none'>
				<strong className='text-6xl mb-3'>{title}</strong>
				<span className='text-xl'>{message}</span>
			</section>
			<section className='mt-4'>
				<button onClick={resetGame} type='button' className='w-full text-center bg-[rgba(0,0,0,.15)] hover:bg-[rgba(0,0,0,.2)] p-2 rounded-lg font-semibold text-white'>Reiniciar partida</button>
			</section>
		</>
	)
}
