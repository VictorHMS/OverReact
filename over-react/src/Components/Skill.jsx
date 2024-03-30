import { useState } from "react";
import { SkillDiv, SkillContainer } from '../styles'
import { knowledge } from '../linguagens'

const known = knowledge;

function Skill({data, onClick}){

  return(
    <SkillDiv onClick={() => onClick(data.description, data.id)}>
      <img src={data.url} alt={data.name + ' image'} width={90} style={{display: 'flex', marginLeft: 'auto', marginRight: 'auto', maxHeight: '101px'}}></img>
      <h3>{data.name}</h3>
    </SkillDiv>
  )
}

export function Skills({onClick, myRef}){

  return (
    <>
      <h2 ref={myRef}>Habilidades</h2>
      <SkillContainer>
        {known.map((sk, num)=> {
          return (<Skill data={sk} key={num} onClick={onClick} ></Skill>)
        })}
      </SkillContainer>
    </>
    
  )
}