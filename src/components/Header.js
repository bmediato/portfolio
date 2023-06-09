import '../style/Header.css'
import bm from '../image/logo2.png'

export default function Header() {
    return (
      <header className="header"> 
          <a href="#home">
            <img src={bm} alt="logo" className="imgLogo"></img>
          </a>
        <nav className="nav-container">
          <p><a href="#home" className="colorLetter">Home</a></p>
          <p><a href="#about" className="colorLetter">Sobre</a></p>
          <p><a href="#skills" className="colorLetter">Habilidades</a></p>
          <p><a href="#projects" className="colorLetter">Projetos</a></p>
          <p><a href="contact" className="colorLetter">Contato</a></p>
        </nav>
      </header>
    )
  }
