import { useFactCat } from './hooks/useFactCat'

export default function App () {
  const { fact, imageUrl, refreshFact } = useFactCat()

  return (
    <main>
      <h1>Imágenes de gatitos</h1>
      {fact && <p><strong>Pálabra aleatoria:</strong> {fact}</p>}
      {imageUrl && <img src={imageUrl} alt={`Imagen extraída de: ${fact}`} />}
      {imageUrl && <button type='button' onClick={refreshFact}>Refresh image</button>}
    </main>
  )
}
