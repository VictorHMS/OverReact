import { useState } from 'react'
import './App.css'

function App() {
  const [hide,setHide] = useState(true);

  return (
    <>
      <div>
        <h1>CHEGOU CEDO! PASSA OUTRO DIA QUE PODE ESTAR MAIS BONITO</h1>
        <button onClick={() => setHide(!hide)}>Mensagem</button>
        {hide == false ? 
          (<h2>Obrigado pela paciência! Você é uma pessoa incrível!</h2>):
          ''
        }
      </div>
    </>
  )
}

export default App
