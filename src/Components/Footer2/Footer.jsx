import { IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5";
import LogoImg from '../../assets/images/LogoBC.png'
import "./footer.css"

export function Footer() {
    const date = new Date().getFullYear();

    function handleContact() {
        window.open("https://wa.me/+5522999813420")
      }



    return (
        <div className="Footer">
            <div className="top">
            <div className="image">
                <a href='/'>
                <img src={LogoImg} alt="Logo Sua Chave" />
                </a>

                <div className="icons">
                <a className="unicIconMenu" href="https://instagram.com/softmark.br" target='_Blank'><IoLogoInstagram /></a>
                <a className="unicIconMenu" href="https://facebook.com/softmark.br" target='_Blank'><IoLogoFacebook /></a>
                <a className="unicIconMenu" href="https://linkedin.com/company/softmark.br" target='_Blank'><IoLogoLinkedin /></a>
            </div>
            </div>

            <div className="links">
                <a href="">Início</a>
                <a href="">Quem somos</a>
                <a href="">Serviços</a>
                <a href="">Porfólio</a>
                <a href="">Fale conosco</a>
            </div>

            <div className="whatsappFooter">
                <h4>Entre em contato</h4>
                <button onClick={handleContact}>Chama no Zap!</button>
            </div>

          
            </div>


            <div className="copy">
            <h5>© SoftMark - Marketing Digital & Soluções Web - {date}. Todos os direitos reservados</h5>
            </div>

        </div>
    )
}