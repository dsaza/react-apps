import { useState, useEffect } from 'react'

export function useTargets () {
  const [guessed, setGuessed] = useState([])
  const [selected, setSelected] = useState([])

  const addSelected = (image) => setSelected(selected => {
    if (selected.includes(image)) return selected
    return selected.concat(image)
  })
  const resetSelected = () => setSelected([])

  const addSelectedToGuessed = () => setGuessed(guessed => guessed.concat(selected))

  useEffect(() => {
    if (selected.length === 2) {
      const [a, b] = selected
      const [, aURL] = a.split('|')
      const [, bURL] = b.split('|')

      if (aURL === bURL) {
        addSelectedToGuessed()
        resetSelected()
      }

      const timeout = setTimeout(() => {
        resetSelected()
      }, 800)

      return () => {
        clearTimeout(timeout)
      }
    }
  }, [selected])

  return { guessed, selected, addSelected, resetSelected, addSelectedToGuessed }
}
