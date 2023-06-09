import js from '../image/skills/logo-javascript-256.png'
import html from '../image/skills/logo-html-5-256.png'
import css from '../image/skills/logo-css-3-256.png'
import react from '../image/skills/logo-react-256.png'
import mysql from '../image/skills/mysql-256.png'
import docker from '../image/skills/docker-256.png'
import node from '../image/skills/logo-node-js-1024.png'
import git from '../image/skills/git-256.png'
import typescript from '../image/skills/typescript-256.png'
import mongo from '../image/skills/mongodb-256.png'
import python from '../image/skills/logo-python-1024.png'
import '../style/Skills.css'

export default function Habilidades() {
  return (
    <section className='section-hab' id='skills'>
      <h1 className='hab'>Habilidades</h1>
      <div className='div-hab'>
        <img src={js} alt='js' className="img-hab"></img>
        <img src={html} alt='html' className="img-hab"></img>
        <img src={css} alt='css' className="img-hab"></img>
        <img src={react} alt='react' className="img-hab"></img>
        <img src={mysql} alt='mysql' className="img-hab"></img>
        <img src={docker} alt='docker' className="img-hab"></img>
        <img src={node} alt='node' className="img-hab"></img>
        <img src={typescript} alt='typescript' className="img-hab"></img>
        <img src={python} alt='python' className="img-hab"></img>
        <img src={mongo} alt='mongo' className="img-hab"></img>
        <img src={git} alt='git' className="img-hab"></img>
      </div>
    </section>
  )
}