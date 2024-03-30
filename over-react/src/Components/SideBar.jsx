import { useState } from 'react'
import { ToggleIcon } from '../styles.js'

export function SideBarContent({children, label}){
  const [isExpanded, setExpanded] = useState(false);
  const fontColor = isExpanded ? '#7880f1c5' : '';
  const bgColor = isExpanded ? '#484c816f' : '';

  return(
    <div>
      <div style={{cursor: 'pointer', display: 'flex', flexWrap: 'wrap', alignItems: 'center', borderTopRightRadius: '10px', borderBottomRightRadius: '10px'}} onClick={()=>{setExpanded(!isExpanded)}}>
        <h3 style={{cursor: 'pointer', userSelect: 'none', color: fontColor }} >
          {label}
        </h3>
        <ToggleIcon style={{color: fontColor}} expanded={isExpanded ? 1 : 0 }>
            ▶
        </ToggleIcon>
      </div>
      {isExpanded ? children : null}
    </div>
  );
}

//{isExpanded ? (<span>▶</span>) : (<span>▶</span>) }

export function SideBar({children}){
  return(
    <div style={{position: 'sticky', top: 0, minWidth: '20%', borderRight: '0px solid gray', marginRight: '2%'}}>
      <div style={{position: 'sticky', top: 0}}>
        {children}
      </div>
    </div>
  );
}
