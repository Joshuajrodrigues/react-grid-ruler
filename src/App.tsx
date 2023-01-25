import { useState } from 'react'

import './App.css'
import Ruler from './components/Ruler'

function App() {


  return (
    <div className='  flex justify-center h-96 items-center'>
        <div className=' relative w-40 h-40 border-black border rounded'>
      <Ruler>
          hello

      </Ruler>
        </div>
    </div>
  )
}

export default App
