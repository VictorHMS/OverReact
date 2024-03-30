import cpp_logo from './assets/cpp_logo.png'
import python_logo from './assets/python_logo.png'
import c_sharp_logo from './assets/c_sharp_logo.png'
import java_logo from './assets/java_logo.png'
import javaScript_logo from './assets/javaScript_logo.png'
import html_logo from './assets/HTML5_logo.png'
import css_logo from './assets/css_logo.png'
import react_logo from './assets/react.svg'

const cppDesc = "Uma das primeiras linguagens que eu tive contato. Utilizei ela principalmente em programação competitiva e para aprender estruturas de dados. Ela apresenta uma grande vantagem quando se trata de atividades que exigem boa eficiência temporal!";
//const pythonDesc = "Linguagem de programação de alto nível com diversas aplicações. É muito simples de escrever, o que favorece uma codificação bem rápida. É utilizada em diversas áreas diferentes, como ciência de dados, machine learning, desenvolvimento de softwares. Eu gosto de usar ela em diversos projetos, inclusive essa página usa um servidor em python utilizando Flask para a aplicação abaixo!";
const pythonDesc = "Linguagem de programação de alto nível com diversas aplicações. É muito simples de escrever, o que favorece uma codificação bem rápida. É utilizada em diversas áreas diferentes, como ciência de dados, machine learning, desenvolvimento de softwares. Eu gosto de usar ela em diversos projetos, inclusive para fazer a parte de backend de páginas na web!";
const cSharpDesc = "Linguagem orientada a objetos muito utilizada no .NET. Utilizei ela principalmente enquanto utilizava a plataforma Unity que permite o desenvolvimento de jogos.";
const javaDesc = "Java é uma das linguagens mais utilizadas no mundo, por ser confiável para codificar diversos tipos de aplicação e sua capacidade de ser executada em diferentes plataformas. Uma das linguagens que eu utilizei para me familiarizar com o Paradigma Orientado a Objetos, juntamente com Python.";
const javaScriptDesc = "Linguagem interpretada multiparadigma muito utilizada para desenvolvimento web. Utilizei para fazer projetos que envolvessem aplicações web, inclusive essa página!. Ela consegue manipular os elementos da página e modificá-los para promover interação com o usuário.";
const htmlDesc = "HTML é a linguagem de marcação utilizada na web. Utilizando os elemento html é possível estruturar e construir páginas na internet. Utilizo HTML em conjunto com CSS e JavaScript em aplicações web.";
const cssDesc = "Esse é o responsável pelos estilos que você está vendo nessa página agora! O CSS é quem diz as características dos elementos que você vê na tela. Lá está definido cores, tamanhos e até animações do que tem num site!";
const reactDesc = "Uma biblioteca de JavaScript para desenvolvimento front-end. O front-end dessa página foi feito em react, biblioteca muito boa que agiliza muito no desenvolvimento, principalmento pelo fato de que seus componentes podem ser reutilizados. Olha esses cards aqui em cima! Todos eles possuem a mesma lógica, portanto são feitos usando o mesmo tipo de componente!";

export const knowledge = [{'name': 'C++', 'url': cpp_logo, 'description': cppDesc, 'id': 0 },
    {'name': 'C#', 'url': c_sharp_logo, 'description': cSharpDesc, 'id': 1 },
    {'name': 'Python', 'url': python_logo, 'description': pythonDesc, 'id': 2 },
    {'name': 'Java', 'url': java_logo, 'description': javaDesc, 'id': 3 },
    {'name': 'JavaScript', 'url': javaScript_logo, 'description': javaScriptDesc, 'id': 4 },
    {'name': 'HTML', 'url': html_logo, 'description': htmlDesc, 'id': 5 },
    {'name': 'CSS', 'url': css_logo, 'description': cssDesc, 'id': 6 },
    {'name': 'React', 'url': react_logo, 'description': reactDesc, 'id': 7 }
]