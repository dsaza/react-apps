export function Form ({ game, images }) {
  const { time, lessTime, plussTime, startGame } = game
  const { type, types, changeType } = images

  const handleSubmit = (event) => {
    event.preventDefault()
    startGame()
  }

  return (
    <div className='max-w-[530px] mx-auto'>
      <form className='text-center' onSubmit={handleSubmit}>
        <div className='mb-6'>
          <label htmlFor='duration-targets' className='inline-block mb-4'>¿En cuánto tiempo piensas terminar tu memotest?</label>
          <div className='grid grid-cols-[1fr,2fr,1fr] gap-5 h-12'>
            <button
              type='button'
              onClick={lessTime}
              className={`h-full border border-white rounded-lg text-xl font-bold hover:bg-[rgba(0,0,0,.1)] ${time === 50 ? 'opacity-50 pointer-events-none' : ''}`}
            >-
            </button>
            <span className='h-full bg-transparent border border-white text-white rounded-lg pointer-events-none select-none text-center text-lg font-semibold flex justify-center items-center'>
              {`${time} seg.`}
            </span>
            <button
              type='button'
              onClick={plussTime}
              className={`h-full border border-white rounded-lg text-xl font-bold hover:bg-[rgba(0,0,0,.1)] ${time === 150 ? 'opacity-50 pointer-events-none' : ''}`}
            >+
            </button>
          </div>
        </div>
        <div>
          <label htmlFor='theme-targets' className='inline-block mb-4'>Escoge el tema de tu preferencia:</label>
          <select
            value={type}
            onChange={(e) => changeType(e.target.value)}
            className='block w-full bg-transparent border border-white rounded-lg h-12 px-4 cursor-pointer appearance-none'
          >
            <option value='' className='text-indigo-900'>Selecciona una opción...</option>
            {types.map(type => <option key={type.id} value={type.id} className='text-indigo-900'>{type.label}</option>)}
          </select>
        </div>
        {type !== '' && (
          <div className='mt-14'>
            <button type='submit' className='border border-white bg-[rgba(0,0,0,.3)] px-10 py-3 rounded-lg font-bold hover:bg-[rgba(0,0,0,.4)] w-full'>Empezar</button>
          </div>
        )}
      </form>
    </div>
  )
}
