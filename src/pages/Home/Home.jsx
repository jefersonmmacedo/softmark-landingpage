import "./home.css"
import Navbar from "../../Components/NavBarTop/Navbar";
import { InfosHome } from "../../Components/InfosHome/InfosHome";
import { AboutHome } from "../../Components/AboutHome/AboutHome";
import { ServicesHome } from "../../Components/ServicesHome/ServicesHome";
import { PortfolioHome } from "../../Components/PortfolioHome/PortfolioHome";
import { Footer } from "../../Components/Footer2/Footer";
import { ContactHome } from "../../Components/ContactHome/ContactHome";

export function Home() {
    return (
        <div className="home">
            <Navbar />
            <div className="topHome">

           <InfosHome />
           
            </div>
           <AboutHome />

           <ServicesHome />

           <PortfolioHome />

           <ContactHome />

            <Footer />
        </div>
    )
}