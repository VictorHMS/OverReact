import './App.css'
import foto from './assets/fotoeu.png'
import { Conteudo } from './Components/Conteudo'
import linkedin from './assets/linkedin.png'

function Details({children}){

  return(
    <div style={{display: 'flex', padding: 20, flexWrap: 'wrap', gap: '30px', borderRadius: 25, borderTop: 'solid gray', borderLeft: 'solid gray', backgroundImage: 'linear-gradient(to bottom right, #19197059, #cc99ff)' }}>
      <div style={{borderRadius: '50%', overflow: 'hidden', width:'120px', height:'120px'}}>
        <img src={foto} alt='Víctor Hugo' width={'100%'} style={{ objectFit: 'cover' }}/>
      </div>
      {children}
    </div>
  )
}

function Links(){

  return(
  <div style={{marginLeft: 'auto' }}>
    <a href="https://www.linkedin.com/in/victor-hugo-meirelles-silva-057823220/" target='_blank'>
      <img src={linkedin} alt="linkedin" width={30}/>
    </a>
  </div>
  )
}


function App() {
  

  return (
    <>
      <div>
        <Details>
          <>
            <div>
              <h2>Víctor Hugo Meirelles Silva</h2>
              <h4>Estudante de Engenharia da computação UFPE</h4>
            </div>
            <Links></Links>
          </>
        </Details>
        <Conteudo></Conteudo>
        
      </div>
    </>
  )
}

export default App