import styled from 'styled-components';
 
export const SkillDiv = styled.div`
  /*background-color: #00009314;*/
  background-image: linear-gradient(to bottom right, #19197059, #cc99ff);
  border-radius: 15px;
  border: 2px solid;
  border-right: none;
  border-bottom: none;
  border-color: gray;
  padding: 20px;
  margin: 20px;
  display: block;
  text-align: center;
  width: 100px;
  cursor: pointer;
`;

export const SkillContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 90%;
`;

export const ToggleIcon = styled.span`
  display: inline-block;
  transition: transform 0.1s ease;
  transform: ${(props) => ((props.expanded == 1) ? 'rotate(90deg)' : 'rotate(0deg)')};
  user-select: none;
  margin-left: 10px;
`;

export const Locate = styled.li`
  cursor: pointer;
`


/*
export const Container = styled.div`
  // Estilos para o contêiner 
  padding: 16px;
  background-color: #f0f0f0;
`;

export const Titulo = styled.h1`
  // Estilos para o título
  color: #333;
  font-size: 24px;
`;
*/