import { useState } from "react";
import { sobre } from '../sobre.jsx';
import { ToggleIcon } from "../styles";

export function SobreMim({myRef}){

  const [hide,setHide] = useState(false);
  
  const descricao = hide ? (null) :  sobre.map( (sb, i) => {
    return (<li key={i}>{sb}</li>)
  })

  const op = hide ? 0:1

  return (
  <>
    <h2 ref={myRef} style={{textAlign: 'left', cursor: 'pointer'}} onClick={() => {setHide(!hide)}}>Sobre mim <ToggleIcon style={{fontSize: '0.7em'}} expanded={hide ? 0 : 1 }>
          ▶
      </ToggleIcon></h2>
      
      <ul style={{opacity: op}}>
        {descricao}
      </ul>
      <hr/>
  </>)
}