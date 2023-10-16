import { IoFunnel, IoLaptop, IoLaptopOutline, IoMegaphone, IoPaperPlane } from "react-icons/io5";
import "./servicesHome.css";


export function ServicesHome() {
    function handleContact() {
        window.open("https://wa.me/+5522999813420")
      }


    return (
        <div className="ServicesHome">
            <div className="blockServicesHome">

                <div className="textTopServices">
                    <h5>Serviços oferecedos</h5>
                    <h2>Vamos criar uma estratégia vencedora juntos?</h2>
                </div>

                <div className="servicesList">
                    <div className="serviceHomeUnic">
                        <IoMegaphone />

                        <h4>Marketing Digital <br /> e Estratégias</h4>
                        <div className="color"></div>

                        <div className="textService">
                    <h5> Deixe-nos mostrar como podemos criar uma estratégia vencedora para o seu negócio.</h5>
                        </div>

                        <button onClick={handleContact}>Quero saber mais</button>
                    </div>

                    <div className="serviceHomeUnic">
                    <IoFunnel />

                    <h4>Anúncios  patrocinados  <br />  Meta Ads e Google Ads</h4>
                    <div className="color"></div>

                    <div className="textService">
                    <h5> Deixe-nos mostrar como podemos criar uma estratégia vencedora para o seu negócio.</h5>
                        </div>

                        <button onClick={handleContact}>Quero saber mais</button>
                    </div>

                    <div className="serviceHomeUnic">
                    <IoLaptopOutline />

                    <h4>Soluções Web:  <br /> Site, Sistemas e Apps</h4>
                    <div className="color"></div>

                    <div className="textService">
                    <h5> Deixe-nos mostrar como podemos criar uma estratégia vencedora para o seu negócio.</h5>
                        </div>

                        <button onClick={handleContact}>Quero saber mais</button>
                    </div>

                    <div className="serviceHomeUnic">
                    <IoPaperPlane />

                    <h4>Material Grafico e  <br />  Impressão. Digital</h4>
                    <div className="color"></div>

                    <div className="textService">
                    <h5> Deixe-nos mostrar como podemos criar uma estratégia vencedora para o seu negócio.</h5>
                        </div>

                        <button onClick={handleContact}>Quero saber mais</button>
                    </div>

                </div>
            </div>

            
        </div>
    )
}