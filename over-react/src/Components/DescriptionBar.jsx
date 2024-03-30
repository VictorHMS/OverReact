import { useEffect, useState } from 'react'

export function DescriptionBar({line}){
    const [msg, setMsg] = useState('');

    function escreve(){
        
        if(msg.length < line.length){  
            setMsg(c => c + line[c.length]);
        }
    }

    useEffect(()=>{
        let id = setInterval(escreve,20);
        
        return () => {
            clearInterval(id);
        }
    },[msg]);

    return(
        <>
            <h4>{msg}</h4>
        </>
    );
}