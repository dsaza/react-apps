import { useEffect, useState } from 'react'

import { TARGET_IMAGES } from '../constans'

export function useImages () {
  const [type, setType] = useState('')
  const [images, setImages] = useState([])

  const types = TARGET_IMAGES.map(({ id, label }) => ({ id, label }))

  const changeType = (type) => {
    setType(type)
  }

  useEffect(() => {
    const findImages = TARGET_IMAGES.find(target => target.id === type)
    if (findImages) setImages(findImages.images)
    else setImages([])
  }, [type])

  return { type, types, images, changeType }
}
