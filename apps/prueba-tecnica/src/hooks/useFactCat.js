import { useState, useEffect } from 'react'
import { getFact } from '../services/facts'
import { getImageByFact } from '../services/images'

export function useFactCat () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    getFact().then(result => {
      setFact(result.data)
    })
  }, [])

  useEffect(() => {
    if (!fact) return

    getImageByFact({ fact }).then(result => {
      setImageUrl(result.data)
    })
  }, [fact])

  const refreshFact = () => {
    getFact().then(result => {
      setFact(result.data)
    })
  }

  return { fact, imageUrl, refreshFact }
}
