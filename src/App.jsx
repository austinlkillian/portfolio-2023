import { useState } from 'react'
import componentData from './data/componentData'
import { Container } from '@mui/material';
import Hero from './components/Hero'

function App() {
  return (
    <div className="App">
      <Container>
        <Hero data={componentData.heroText}/>
      </Container>
    </div>
  )
}

export default App
