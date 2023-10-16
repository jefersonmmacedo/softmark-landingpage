import "./infosHome.css"
import Astronauta from '../../assets/images/astronauta.png'
import Foguete from '../../assets/images/foguete.png'


export function InfosHome() {
    return (
        <div className="infosHome">
           <div className="image">
                <img src={Foguete} alt="" />
           </div>

          <div className="text">
          <h1>Alavancar seu negócio</h1>
          <h1> é o nosso objetivo!</h1>
          <h3>Soluções projetadas para ampliar seus horizontes e impulsionar seus resultados</h3>
          <button>Quero impulsionar meu negócio</button>
          </div>

           <div className="image2">
                <img src={Astronauta} alt="" />
           </div>
        </div>
    )
}