
import { useState } from "react";
import "./contactHome.css";

export function ContactHome() {
    const [name, setName] = useState();
    const [whatsapp, setWhatsapp] = useState();
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();

    function handleContact() {
        window.open(`https://wa.me/5522999813420?text=Olá, meu nome é ${name}, ${message}. Meu whats 55${whatsapp}, meu e-mail: ${email}`)
      }

      999813420


    return (
        <div className="ContactHome">
            <div className="blockContactHome">
                <div className="textContactHome">
                        <h2>Entre em contato</h2>
                        <h5>Para falar com a equipe de atendimento, <br /> preencha o formlario para falar via WhatsApp.</h5>
                </div>

                <div className="formContactHome">
                    <input type="text" placeholder="Nome"  value={name} onChange={e => setName(e.target.value)}/>
                    <input type="text" placeholder="Email"  value={whatsapp} onChange={e => setEmail(e.target.value)}/>
                    <input type="text" placeholder="Whatsapp"  value={email} onChange={e => setWhatsapp(e.target.value)}/>
                    <textarea placeholder="Mensagem" value={message} onChange={e => setMessage(e.target.value)}></textarea>
                    <button onClick={handleContact}>Enviar</button>
                </div>
            </div>
        </div>
    )
}