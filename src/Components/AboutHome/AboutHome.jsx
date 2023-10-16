import "./aboutHome.css"
import Astronauta2 from '../../assets/images/astronauta2.jpg'

export function AboutHome() {

    function handleContact() {
        window.open("https://wa.me/+5522999813420")
      }


    return (
        <div className="AboutHome">
            <div className="imageAbout">
                <img src={Astronauta2} alt="" />
            </div>

            <div className="textAbout">
                <h5>SoftMark - Marketing Digital & Soluções Web</h5>

                <h2>Junte-se a nós</h2>
                <h2> e explore</h2>
                <h2> novos horizontes</h2>

                <h4>Não deixe sua empresa ficar para trás na corrida digital. <br />
                O céu não é o limite quando se trata dos seus negócios
                e na SoftMark, ajudamos você a decolar e voar alto como um foguete.
                <br /><br />
                Afinal, o espaço é o nosso destino!</h4>

                <button onClick={handleContact}>Quero impulsionar meu negócio</button>
            </div>
        </div>
    )
}