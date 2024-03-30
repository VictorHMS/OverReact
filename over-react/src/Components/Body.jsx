export function Body({children, disp}){

  return (
    <div style={{display: {disp}, width: '70%', userSelect: 'text'}}>
      {children}
    </div>
  )
}

