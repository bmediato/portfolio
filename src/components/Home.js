import '../style/Home.css'
import github from '../image/github.png'
import linkedin from '../image/linkedin.png'

export default function Home() {
    return (
      <section id="home" className="home-container">
        <div className='container-sec'>
          <div className='paragrafos'>
            <p className="home-letter primeirop"><span>Olá,</span> meu nome é Beatriz Mediato</p>
          </div>
          <h1 className="home-letter full">FULL-STACK DEVELOPER</h1>
          <div className='rede-social'>
            <a href="https://github.com/bmediato"><img src={github} alt='github' className='github'/></a>
            <a href='https://www.linkedin.com/in/beatrizmediato/'><img src={linkedin} alt='linkedin' className='linkedin'/></a>
          </div>
        </div>
      </section>
    )
}
