// MINUTO 1.27.30

import { useState, useEffect } from 'react'
import './app.css'
import {getRandomFact} from './services/facts.js'


const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'


export function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    getRandomFact().then(newFact => setFact(fact))
}, [])

  useEffect(() => {
    if (!fact) return

    const firstWord = fact.split(' ', 3).join(" ")
    console.log(firstWord) 

    fetch(`https://cataas.com/cat/says/${firstWord}?sie_50&color=red&json=true`)  
    .then(res => res.json())
    .then(response => {
      const { url } = response
      setImageUrl(url)
    })
},  [fact])

  const handleClick = async () => {
  const newFact = await getRandomFact()
  setFact(newFact)
}

  return (
    <main>
      <button onClick={handleClick}>Get new fact</button>
      <h1>App de gatitos</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt={`Image from ${fact}`} />}
    </main>
  )
}
