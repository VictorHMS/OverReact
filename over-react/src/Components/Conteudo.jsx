import { SideBar, SideBarContent } from "./SideBar";
import { Body } from "./Body";
import { Skills } from "./Skill";
import { DescriptionBar } from "./DescriptionBar";
import { useState, useRef, useEffect } from "react";
import { TaskSorter, TaskSorterOff } from "./TaskSorter";
import { SobreMim } from "./SobreMim";
import { Locate } from "../styles";

const desc = 'Clique em uma das Habilidades! Sua descrição aparecerá aqui!'

export function Conteudo({children}){
    const [description, setDescription] = useState(desc);
    const [id, setId] = useState('');
    const [idRef, setIdRef] = useState('');
    const [click, setClick] = useState(true);
    const [scroll, setScroll] = useState(true);

    const ref = useRef(null);
    
    const chave = id.toString() + click.toString();
    
    useEffect(()=>{
        if(ref.current != null){
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    },[idRef, scroll])

    return(

        <div style={{display: 'flex', userSelect: 'none', marginTop:'20px'}}>
            <SideBar>
                <SideBarContent label={'Menu'}>
                    <ul>
                        <Locate onClick={() => {setIdRef('SobreMim'); setScroll(!scroll)}}>Sobre Mim</Locate>
                        <Locate onClick={() => {setIdRef('Skills'); setScroll(!scroll)}}>Habilidades</Locate>
                        <Locate onClick={() => {setIdRef('TaskSorter'); setScroll(!scroll)}}>Task Organizer</Locate>
                    </ul>
                </SideBarContent>
            
            </SideBar>
            
            <Body disp={'block'}>
                <SobreMim myRef={idRef == 'SobreMim' ? ref : null }></SobreMim>
                <Skills myRef={idRef == 'Skills' ? ref : null } onClick={(msg, myid) => {setDescription(msg); console.log(description); setId(myid); setClick(!click)}}></Skills>
                <div style={{minHeight: '120px', borderRadius:'10px', paddingTop: 1, paddingBottom: 1, paddingLeft:20, backgroundColor: '#240f2ba7'}}>
                    <h4>Descrição:</h4>
                    <DescriptionBar line={description}  key={chave}></DescriptionBar>
                </div>
                <hr />
                <TaskSorterOff myRef={idRef == 'TaskSorter' ? ref : null }></TaskSorterOff>
            </Body>
        </div>
        
    );
  }