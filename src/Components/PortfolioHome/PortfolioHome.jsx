import { IoEyeOutline, IoFunnel, IoLaptop, IoLaptopOutline, IoMegaphone, IoPaperPlane } from "react-icons/io5";
import "./portfolioHome.css";
import karoline01 from '../../assets/images/posts/post (1).png'
import karoline02 from '../../assets/images/posts/post (3).png'
import karoline03 from '../../assets/images/posts/post (4).png'
import powerstartenergy from '../../assets/images/posts/post (2).png'
import suachave01 from '../../assets/images/posts/post (5).png'
import suachave02 from '../../assets/images/posts/post (6).png'
import suachave03 from '../../assets/images/posts/post (10).png'
import suachaveauto01 from '../../assets/images/posts/post (7).png'
import suachaveauto02 from '../../assets/images/posts/post (8).png'
import suachaveauto03 from '../../assets/images/posts/post (9).png'

export function PortfolioHome() {
    return (
        <div className="PortfolioHome">
            <div className="blockPortfolioHome">

                <div className="textTopPortfolio">
                    <h5>Serviços entregues a nossos clientes</h5>
                    <h2>Entregamos o melhor para você decolar!</h2>
                </div>


                <div className="potfolioList">

                    <div className="portfolioUnic">
                        <div className="topPortfoliounic">
                            <div className="textPortfolioUnic">
                                <h6>Post Redes Sociais</h6>
                                <h5>Karoline Vargas Advogada</h5>
                            </div>
                            <IoEyeOutline />
                        </div>

                        <div className="images">
                            <img src={karoline01} alt="" />
                        </div>
                    </div>
                    <div className="portfolioUnic">
                        <div className="topPortfoliounic">
                            <div className="textPortfolioUnic">
                                <h6>Post Redes Sociais</h6>
                                <h5>Karoline Vargas Advogada</h5>
                            </div>
                            <IoEyeOutline />
                        </div>

                        <div className="images">
                            <img src={karoline02} alt="" />
                        </div>
                    </div>
                    <div className="portfolioUnic">
                        <div className="topPortfoliounic">
                            <div className="textPortfolioUnic">
                                <h6>Post Redes Sociais</h6>
                                <h5>Karoline Vargas Advogada</h5>
                            </div>
                            <IoEyeOutline />
                        </div>

                        <div className="images">
                            <img src={karoline03} alt="" />
                        </div>
                    </div>
                    <div className="portfolioUnic">
                        <div className="topPortfoliounic">
                            <div className="textPortfolioUnic">
                                <h6>Identidade Visual</h6>
                                <h5>Power Start Energy</h5>
                            </div>
                            <IoEyeOutline />
                        </div>

                        <div className="images">
                            <img src={powerstartenergy} alt="" />
                        </div>
                    </div>
                    <div className="portfolioUnic">
                        <div className="topPortfoliounic">
                            <div className="textPortfolioUnic">
                                <h6>Post Redes Sociais</h6>
                                <h5>Sua Chave Auto</h5>
                            </div>
                            <IoEyeOutline />
                        </div>

                        <div className="images">
                            <img src={suachaveauto01} alt="" />
                        </div>
                    </div>
                    <div className="portfolioUnic">
                        <div className="topPortfoliounic">
                            <div className="textPortfolioUnic">
                                <h6>Post Redes Sociais</h6>
                                <h5>Sua Chave Auto</h5>
                            </div>
                            <IoEyeOutline />
                        </div>

                        <div className="images">
                            <img src={suachaveauto02} alt="" />
                        </div>
                    </div>
                    <div className="portfolioUnic">
                        <div className="topPortfoliounic">
                            <div className="textPortfolioUnic">
                                <h6>Post Redes Sociais</h6>
                                <h5>Sua Chave</h5>
                            </div>
                            <IoEyeOutline />
                        </div>

                        <div className="images">
                            <img src={suachave01} alt="" />
                        </div>
                    </div>
                    <div className="portfolioUnic">
                        <div className="topPortfoliounic">
                            <div className="textPortfolioUnic">
                                <h6>Post Redes Sociais</h6>
                                <h5>Sua Chave</h5>
                            </div>
                            <IoEyeOutline />
                        </div>

                        <div className="images">
                            <img src={suachave02} alt="" />
                        </div>
                    </div>


                </div>

      
            </div>

            
        </div>
    )
}