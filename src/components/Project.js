import React from "react";
import '../style/Project.css'
import entregador from '../image/icones/entregador.png'
import receita from '../image/icones/livro-de-receitas.png'
import fut from '../image/icones/trofeu-de-futebol.png'
import shopp from '../image/icones/compras-online.png'
import ferreiro from '../image/icones/ferreiro.png'
import blog from '../image/icones/blog.png'

export default function Project() {
    return(
      <section className="section-pro">
        <h1 className="title-pro">Projetos</h1>
        <div className="container-pro">
          <div class="card">
            <img src={entregador} class="card-img-top" alt="delivery"/>
            <div class="card-body">
              <h5 class="card-title">App de Delivery</h5>
              <p class="card-text">Delivery App é um projeto que simula um aplicativo de delivery para uma distribuidora de bebidas.</p>
              <a href="https://github.com/bmediato/DeliveryApp" class="btn-primary">Repositório</a>
            </div>
          </div> 

          <div class="card">
            <img src={receita} class="card-img-top" alt="delivery"/>
            <div class="card-body">
              <h5 class="card-title">App de Receitas</h5>
              <p class="card-text">App onde o usuário pode acessar receitas de comidas ou de drinks</p>
              <a href="https://github.com/bmediato/recipesApp" class="btn-primary">Repositório</a>
            </div>
          </div> 

          <div class="card">
            <img src={fut} class="card-img-top" alt="delivery"/>
            <div class="card-body">
              <h5 class="card-title">Torneio Futebol Club</h5>
              <p class="card-text">O TFC é um site informativo sobre partidas e classificações de futebol.</p>
              <a href="https://github.com/bmediato/TFC" class="btn-primary">Repositório</a>
            </div>
          </div> 

          <div class="card">
            <img src={shopp} class="card-img-top" alt="delivery"/>
            <div class="card-body">
              <h5 class="card-title">Front-End Online Store</h5>
              <p class="card-text">Foi desenvolvido uma loja online a partir da API do Mercado Livre</p>
              <a href="https://github.com/bmediato/FrontEndOnlineStore" class="btn-primary">Repositório</a>
            </div>
          </div> 

          <div class="card" >
            <img src={blog} class="card-img-top" alt="delivery"/>
            <div class="card-body">
              <h5 class="card-title">BlogsAPI</h5>
              <p class="card-text">Neste projeto foi criada uma API e um banco de dados para a produção de conteúdo para um blog.</p>
              <a href="https://github.com/bmediato/blogsApi" class="btn-primary">Repositório</a>
            </div>
          </div> 

          <div class="card">
            <img src={ferreiro} class="card-img-top" alt="delivery"/>
            <div class="card-body">
              <h5 class="card-title">Smith</h5>
              <p class="card-text">Neste projeto foi criada uma loga de itens medievais, no formato de uma API.</p>
              <a href="https://github.com/bmediato/smith" class="btn-primary">Repositório</a>
            </div>
          </div> 

        </div>
      </section>
    )
  }

