import { useEffect } from 'react'
import { useState } from 'react'

import './App.css'

const CAT_ENDPOINT_RANDOMFACT = "https://catfact.ninja/fact"
// const CAT_ENDPOINT_IMAGE = ""

function App() {
  const [fact, setFact] = useState("Lorem ipsum")

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOMFACT)
    .then(resp => resp.json())
    .then(data => {
      const {fact} = data
      setFact(fact)
      const firstWord = fact.split(" ", 3)
      console.log(firstWord);
    })
  }, [])

  return (
    <main>

      <h1>App de gatitos </h1>
      {fact && <p>{fact}</p>}
    </main>
  )
}

export default App
