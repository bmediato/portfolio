import React from "react";
import '../style/AboutMe.css'
import be from '../image/be.png'

export default function AboutMe(){
    return(
      <section id="about" className="section-container">
        <h1 className="aboutme">Sobre Mim</h1>
          <div className="container-about">
            <img src={be} alt='beatriz' className="image-container"/>
            <div className="descricao">
              <p>Olá! Sou Beatriz Mediato de Aquino, uma entusiasta de desenvolvimento web natural de Volta Redonda, 
                Rio de Janeiro. Atualmente, sou estudante de Desenvolvimento Web na Trybe, onde aprofundo meus conhecimentos em programação 
                e construção de sites interativos. Valorizo a colaboração em equipe, a resolução de problemas e a criatividade. 
                Estou animada para enfrentar novos desafios no desenvolvimento web e contribuir para projetos que tragam valor e impacto positivo.
                Se você está interessado em trabalhar juntos ou trocar ideias, entre em contato. 
                Estou aberta a novas oportunidades e colaborações enriquecedoras. Obrigada por visitar meu portfolio!</p>
            </div>
          </div>
      </section>
    )
  }
