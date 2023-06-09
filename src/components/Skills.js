import js from '../image/logo-javascript-256.png'
import html from '../image/logo-html-5-256.png'
import css from '../image/logo-css-3-256.png'
import react from '../image/logo-react-256.png'
import mysql from '../image/mysql-256.png'
import docker from '../image/docker-256.png'
import node from '../image/logo-node-js-1024.png'
import git from '../image/git-256.png'
import typescript from '../image/typescript-256.png'
import mongo from '../image/mongodb-256.png'
import python from '../image/logo-python-1024.png'
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