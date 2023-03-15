import { IMAGE_API_URL } from '../../config'

export async function getImageByFact ({ fact }) {
  console.log(fact)

  try {
    const response = await fetch(`${IMAGE_API_URL}/${encodeURIComponent(fact)}?json=true`)
    const result = await response.json()

    return {
      success: true,
      data: `https://cataas.com${result.url}`
    }
  } catch (error) {
    return {
      success: false
    }
  }
}
