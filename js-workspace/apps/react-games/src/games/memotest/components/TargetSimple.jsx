export function TargetSimple ({ image, guessed, selected, onClickTarget }) {
  const [, imageURI] = image.split('|')

  return (
    <li
      onClick={() => onClickTarget(image)}
      className={`aspect-square bg-[rgba(0,0,0,.2)] hover:bg-[rgba(0,0,0,.25)] text-[rgba(0,0,0,.2)] p-3 sm:p-5 rounded-lg cursor-pointer flex items-center justify-center border-2 ${guessed.includes(image) ? 'border-green-200' : 'border-transparent'} ${selected.length === 2 ? 'pointer-events-none' : ''}`}
    >
      {guessed.includes(image) || selected.includes(image)
        ? <img src={imageURI} alt={`Icon from ${image}`} className='w-full h-full object-contain' />
        : <span className='w-[10px] h-[10px] bg-[rgba(255,255,255,.4)] block rounded-full' />}
    </li>
  )
}
