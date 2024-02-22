import './index.css';
import github from './Imgs/github.png' 
import Linkdin from './Imgs/linkdin.png' 
import Youtube from './Imgs/Youtube.png' 
import Node from './Imgs/Node.png'
import HTML from './Imgs/HTML.png' 
import JavaScript from './Imgs/JavaScript.png' 
import CSS from './Imgs/Css.png'
import SCSS from './Imgs/Scss.png'
import ReactImg from './Imgs/React.png'
import Python from './Imgs/Python.png'
import Gmail from './Imgs/Gmail.png'
import WhatsApp from './Imgs/WhatsApp.png'
function App() {
  return (
    <div className="App">
        <div id='Prefil_Info'>
        <div id="Foto_Perfil"></div>
        <div id="Nome">Rafael</div>
        <div id='Rede_Social'>
        <a href='https://github.com/RafaelHenriqu?tab=repositories' target='_bank'><img src={github} alt='Github' title='GitHub'></img></a>
        <a href='' target='_bank'><img src={Linkdin} alt='Linkdin' title='Linkdin'></img></a>
        <a href='' target='_bank'><img src={Youtube} alt='Youtube' title='Youtube'></img></a>
        </div>
        </div>
        
        <div id="infos"> 
        <div id="Sobre-Mim">Seja bem-vindo(a)! <br></br>Meu nome é Rafael, tenho 18 anos e gostaria de poder ajudá-lo(a) com seus projetos. Utilizando minhas habilidades e conhecimentos, posso oferecer soluções eficientes e criativas. Estou à disposição para discutir suas necessidades e contribuir para o sucesso de seus projetos.</div>
        <div id='Habilidades'>
          <hr></hr>
          <h1>Habilidades</h1>
          <img src={JavaScript} alt='JavaScript' title='JavaScript' className='Redondar'></img>
          <img src={Node} alt='Node' title='Node'></img>
          <img src={Python} alt='Python' title='Python'></img>
          <img src={SCSS} alt='Scss' title='Scss'></img>
          <img src={HTML} alt='HTML' title='HTML'></img>
          <img src={ReactImg} alt='React' title='React'></img>
          

        
        </div>
        <div id="Projetos">
        <h1>Projetos</h1>
        <hr></hr>
        <a className='Projetos' href='https://desafio0001remake.netlify.app/index.html' target='_bank'><div>Advinhe O Numero</div></a> 
        <a className='Projetos' href='https://kuroinumastudios.netlify.app' target='_bank'><div >Portfolio Antigo</div></a>
        <a className='Projetos' href='https://htmt-tags.netlify.app' target='_bank'><div >Aula HTML</div></a>
        </div>  
        <hr></hr>

        <div id='Contate-me'>
           
          <h1>Contate-me</h1>
          <a href='mailto:girafaeoficial@gmail.com?subject=Desenvolvedor Web&body=Olá Gostaria de le contratar' target='_bank'><img src={Gmail} alt='Gmail' title='Gmail'></img></a>
          <a href="https://wa.link/9mzl50" target="_blank"><img src={WhatsApp}></img></a>
        
        </div>


      </div>

        
    </div>
  );
}

export default App;
