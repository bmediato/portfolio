import { useState } from 'react'
import '../style/Footer.css'
import emailjs from '@emailjs/browser'

export default function Footer() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function sendEmail(e){
    e.preventDefault();

    const emailRegex = /\S+@\S+\.\S+/;
    if(name.length < 3 || !emailRegex.test(email)) {
      alert('Insira suas informações por favor')
      return 
    }
    const templateParams = {
      from_name: name,
      message: message, 
      email: email
    }

    emailjs.send('service_bwe8djn', 'template_n0ubg3y', templateParams, 'lQ8sYBW6x1rpoJTXr')
    .then((response) => {
      console.log('EMAIL ENVIADO', response.status, response.text)
      setName('')
      setEmail('')
      setMessage('')
    }, (err) => {
      console.log('ERROR:', err)
    })
  }

    return (
      <footer className='foot'>
        <h1 className='contato'>Contato</h1>
        <hr/>
        <form className="form" onSubmit={sendEmail}>
          <input 
            className="input"
            type="text"
            placeholder="Digite seu nome"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        
          <input 
            className="input"
            type="text"
            placeholder="Digite seu email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          <textarea 
            className="textarea"
            placeholder="Digite sua mensagem"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />

          <input className="button" type="submit" value="Enviar" />
        </form>
      </footer>
    )
  }
