import { useState, useMemo } from "react";
import axios from 'axios';

const backendUrl = 'http://127.0.0.1:5000';

export function TaskSorter({myRef}){
    const [tasks, setTasks] = useState('');
    const [state, setState] = useState(0);
    const [pergunta, setPergunta] = useState('');
    const [ordenada, setOrdenada] = useState([]);

    const listaAtividades = ordenada.map((atv, i) => {
        return (<li key={i}>{atv}</li>);
    })
    const choseOne = pergunta.split('\n').map((qst,i) => {
        return (<li key={i}>{qst}</li>);
    })

    const enviarDados = async (msg) => {
        try{
            const dados = { mensagem: msg };
            const resposta = await axios.post(`${backendUrl}/ordenar-tarefas`,dados);
            //console.log(resposta.data);
            return resposta.data;
        } catch (erro) {
            console.log('erro ao enviar tarefas: ', erro);
        }
    };

    const requisitarOrdem = async () => {
        try{
            const resposta = await axios.get(`${backendUrl}/resultados`)
            //console.log(resposta.data.tasks)
            setOrdenada(resposta.data.tasks)
        } catch (erro){
            //console.log('erro ao pedir resultados: ', erro);
        }
    }

    const requisitarPergunta = async () => {
        try{
            const resposta = await axios.get(`${backendUrl}/perguntar`)
            if(resposta.data.resultado == 'responder'){
                setPergunta(resposta.data.pergunta);
            }else if(resposta.data.resultado == 'pronto'){
                setPergunta(resposta.data.pergunta);
                requisitarOrdem();
                setState(2);
            }
        } catch (erro){
            //console.log('erro ao requisitar perguntas: ', erro);
        }
    }

    const responder = async (msg) => {
        try{
            const dados = {resposta: msg}
            const resposta = await axios.post(`${backendUrl}/responder`,dados)
            if(resposta.data.resultado == 'pergunta'){
                requisitarPergunta();
                setState(1);
            }
        } catch (erro){
            //console.log('erro ao requisitar perguntas: ', erro);
        }
    }

    function sendInformation(){
        let auxMsg = tasks.split('\n')

        auxMsg = auxMsg.filter((el) =>{
            return el != '';
        });

        if(auxMsg.length == 0){
            alert('A lista está vazia');
            return;
        }
        enviarDados(auxMsg).then(resposta =>{
            if(resposta.resultado == 'pergunta'){
                requisitarPergunta();
                setState(1);
            }
        }).catch(erro =>{
            console.error(erro);
        });
    }

    return(
    <>
        
        <TsDescription myRef={myRef}/>
        <div style={{'display': 'block'}}>
            
            <textarea style={{width: '360px', height: '100px'}} onChange={(e) => {setTasks(e.target.value)}}></textarea>
            <div></div>
            <button onClick={sendInformation}>Enviar</button>
            {state == 1 ? 
                (<div>
                    <h5>Qual atividade é mais importante?</h5>
                    <ul>{choseOne}</ul>
                    <button onClick={() => {responder('a')}}>A</button>
                    <button onClick={() => {responder('b')}}>B</button>
                </div>) : (null) }
            {state == 2 ? 
                (<div>
                    <ol>
                        {listaAtividades}
                    </ol>
                </div>)
            :(null)}
        </div>
    </>)
}

function TsDescription({myRef}){
    return(<>
        <h2 ref={myRef}>Task Organizer</h2>
            <ul>
                <li>Alguma vez você tinha diversas tarefas para fazer e estava com dúvida de qual realizar primeiro? O "Task Organizer" lhe entrega uma lista mostrando a ordem que você deve realizar essas tarefas de acordo com a importância que você atrubuiu para cada uma!</li>
                <li>Ao invés de observar entre <strong>TODAS</strong> as tarefas qual é a mais importante, ele lhe permite comparar duas a duas, de forma a obter uma ordem de prioridade de forma simples e rápida!</li>
                <li>Para utilizá-lo basta seguir os seguintes passos:</li>
                <ol>
                    <li>Na área abaixo, escreva cada atividade que você deve fazer pulando uma linha de uma atividade para outra.</li>
                    <li>Clique no botão enviar e responda as perguntas solicitadas.</li>
                    <li>As perguntas irão mostrar duas atividades e você deverá apertar os botões "A" ou "B" dependendo de qual atividade é mais importante.</li>
                    <li>Quando as perguntas acabarem, o software irá mostrar uma lista ordenada das atividades!</li>
                </ol>
            </ul>
    </>)
}

export function TaskSorterOff({myRef}){
    const [tasks, setTasks] = useState('');
    const [taskList, setTL] = useState('');
    const [state, setState] = useState(0);
    const [adjList, setAdj] = useState(null);
    const [itr, setIt] = useState({'pivo': 0, 'it': 1, 'a': 0});

    const pergunta = (state == 1? (setPergunta()) : (''));
    //console.log(pergunta);
    const choseOne = pergunta.split('\n').map((qst,i) => {
        return (<li key={i}>{qst}</li>);
    })

    const ordenada = useMemo(()=>{
        if(state == 2){
            return topoSort();
        }else{
            return [];
        }
    }, [state])
    const listaAtividades = ordenada.map((atv, i) => {
        return (<li key={i}>{atv}</li>);
    })

    function dfs(ind, visited, ordem){
        if(visited[ind])return;
        visited[ind] = true;
       //console.log('acessei: ', ind);
        for(let i=0; i<adjList[ind].adj.length; i++){
            dfs(adjList[ind].adj[i],visited,ordem);
        }
        //console.log('coloquei o: ', adjList[ind].title);
        ordem.push(adjList[ind].title);
    }

    function topoSort(){
        let visited = adjList.map(()=>{
            return false;
        })
        let ordem = [];
        for(let i=0; i<adjList.length; i++){
            dfs(i,visited, ordem);
        }
        return ordem.reverse();
    }

    if(state == 1){
        if(itr.it >= taskList.length){
            setState(2);
        }
    }

    function setPergunta(){
        if(taskList.length > itr.it){
            return 'A. ' + taskList[itr.a] + '\nB. ' + taskList[itr.it];
        }else{
            return '';
        }
    }

    function buildList(){
        
        let auxList = tasks.split('\n')

        auxList = auxList.filter((el) =>{
            return el != '';
        });

        if(auxList.length == 0){
            alert('A lista está vazia');
            return;
        }

        let auxAdj = auxList.map((el, i) => {
            return {'title': el, 'adj': [], 'pai': -1, 'id': i}
        })

        setTL(auxList);
        setAdj(auxAdj);
        setState(1);
        setIt({'pivo': 0, 'it': 1, 'a': 0});
        
    }

    function insertAdj(a,b){
        setAdj(adjList.map((el)=>{
            if(el.id == a){
                let auxL = [...el.adj];
                auxL.push(b);
                //console.log('auxl:',auxL)
                let aux = {...el, 'adj': auxL};
                return aux;
            }else if(el.id == b){
                let aux = {...el, 'pai': a};
                return aux;
            }else{
                return el;
            }
        }))
    }

    function buildAdj(ans){
        let {pivo, it, a} = itr;
        if(ans){
            if(pivo == a){
                //o pai do it é o pivo
                //o it entra pra adjlist do pivo
                //soma o it, atualiza o pivo, pivo = a
                insertAdj(a,it);
                setIt({'pivo': it, 'it': it+1, 'a': it})
            }else{
                // o pai do it é o a
                //o it entra pra adjlist do a
                //soma o it, pivo e o mesmo, pivo = a
                insertAdj(a,it);
                setIt({'pivo': pivo, 'it': it+1, 'a': pivo})
            }
        }else{
            // pivo entra pra adjList do it
            // it pai do pivo
            // atualiza o a
            insertAdj(it,a);
            if(adjList[a].pai != -1){
                setIt({'pivo': pivo, 'it': it, 'a': adjList[a].pai});
            }else{
                setIt({'pivo': pivo, 'it': it+1, 'a': pivo})
            }
        }
    }

    return (<>
        <TsDescription myRef={myRef}/>
        <div style={{'display': 'block'}}>
            <textarea style={{width: '360px', height: '100px'}} onChange={(e) => {setTasks(e.target.value)}}></textarea>
            <div></div>
            <button onClick={buildList}>Enviar</button>
            {state == 1 ? 
                (<div>
                    <h5>Qual atividade é mais importante?</h5>
                    <ul>{choseOne}</ul>
                    <button onClick={() => {buildAdj(true)}}>A</button>
                    <button onClick={() => {buildAdj(false)}}>B</button>
                </div>) : (null) }
            {state == 2 ? 
                (<div>
                    <ol>
                        {listaAtividades}
                    </ol>
                </div>)
            :(null)}
        </div>
    </>);
}