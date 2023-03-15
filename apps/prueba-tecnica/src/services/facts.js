import { FACT_API_URL } from '../../config'

export async function getFact () {
  try {
    const response = await fetch(FACT_API_URL)
    const result = await response.json()

    return {
      success: true,
      data: result.fact.split(' ', 3).join(' ')
    }
  } catch (error) {
    return {
      success: false
    }
  }
}
