import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IoBagOutline,IoCartOutline, IoPersonOutline, IoHeartOutline, IoBagAddOutline,IoEyeOutline,
        IoSearchOutline, IoLogoInstagram, IoLogoFacebook, IoLogoLinkedin, IoGlasses, IoGlassesOutline, IoMailOutline, IoLogoWhatsapp } from 'react-icons/io5';
        import LogoImg from '../../assets/images/Logo.png'
        import LogoImg2 from '../../assets/images/LogoBC.png'

const UlAdm = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  flex-direction: column;

 .top {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
//    backdrop-filter: blur(4px);
    width: 80%;
    padding: 5px 40px;
    background-color: rgba(255, 255, 255);
    margin: 10px auto;
    border-radius: 50px;
 }
 .top .search {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 10px;
 }
 .top .search input{
    width: 450px;
    height:40px;
    border-radius: 6px;
    border: 1px solid var(--Primary);
    margin: 5px;
    padding: 5px 10px;
 }
 .top .search button{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
    padding: 10px 20px;
    border-radius: 25px;
    background: linear-gradient(0.25turn, #7D0AC9, #F9621D );
    color: var(--White);
    margin: 0px;
    border: none;
 }

 .top .search button svg {
  margin-right: 5px;
 }
 .top .actions {
  width: 50%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    padding: 10px;
    color: var(--Primary);
 }

 .top .actions a {
  text-decoration: none;
  color: var(--Primary);
  font-weight: 600;
}
 .top .actions a:hover {
  text-decoration: none;
  color: var(--PrimaryHover);
  font-weight: 600;
}
 .top .actions a svg {
  font-size: 24px;
  margin: 10px;
}


 .menu {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 20px;
    border-top: 1px solid var(--Border);

 }

 .menu .itensMenu {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.menu .itensMenu .unicIten{
  padding: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width:200px;
  height:100px;
  border-radius: 10px;
  color: var(--Primary);
}
.menu .itensMenu .unicIten img{
  width: 80px;
  margin-bottom: 10px;
}


 .contact {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 50px;
  height: 40px;
  background-color: var(--Black);
  color: var(--White);
}
 .contact .infosContact {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 30%;
 }

 .contact .infosContact h4 {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
 }

 .contact .infosContact h4 svg {
  margin-right: 5px;
 }

 .contact .off {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 30%;
 }

 .contact .off h4 {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
 }

 .contact .off h4 svg {
  margin-right: 5px;
 }
 .contact .buttonsMenu {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 30%;
 }
 .contact .buttonsMenu .iconsMenu{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
 }
 .contact .buttonsMenu .iconsMenu .unicIconMenu{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding:5px;
  background-color: var(--BorderHover);
  color: var(--White);
  border-radius: 6px;
  margin: 0 3px;
  border: none;
  font-size: 16px;
  text-decoration: none;
 }
 .contact .buttonsMenu .iconsMenu .unicIconMenu:hover {
  background-color: var(--Primary);
  color: var(--White);
 }
 .contact .buttonsMenu .contactWhatsapp {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 7px 15px;
  background-color: var(--Aproved);
  color: var(--White);
  border-radius: 20px;
  margin: 0 3px;
  border: none;
  font-size: 14px;
 }
 .contact .buttonsMenu .contactWhatsapp svg {
  font-size: 14px;
  margin-right: 5px;
 }
 .top .logo2 {
    display: none;
  }
 .top .logo {
    padding: 5px 0;
  }
  .top .logo a img {
    height: 45px;
  }

  li {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding:5px;
    font-weight: 700;
  }
  .nav-item2 {
    display: none;
  }
  li a{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-weight: 600;
    color: var(--Description);
    padding: 5px;
    border-radius: 6px;
    margin-left:;
  }
  li a svg {

    margin-bottom: 2px;
    font-size: 16px;
  }
  li a p {
    font-size: 14px;
    font-weight: 700;
  }
  li a:hover{
    padding: 5px;
    color: var(--Primary);
  }

  .nav-item {
    display: flex;
    margin: 2px;
    padding: 5px 10px;
    border-radius: 20px;
  }


 

  @media (max-width: 900px) {
    flex-flow: column nowrap;
    box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(4px);
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 90%;
    padding-top: 0rem;
    transition: transform 0.3s ease-in-out;
    background: rgba(0,0,0, 0.9);
    z-index: 98;

    .contact {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      padding: 20px;
      height: auto;
      background-color: transparent;
      color: var(--White);
    }

    .contact .infosContact {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 100%;
      margin: 5px 0;
     }
    
     .contact .infosContact h4 {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
     }
    
     .contact .infosContact h4 svg {
      margin-right: 5px;
     }
    
     .contact .off {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 100%;
      margin: 5px 0;
     }
    
     .contact .off h4 {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
     }
    
     .contact .off h4 svg {
      margin-right: 5px;
     }
    
 .top {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 300px;
  padding: 0px 20px;
  background-color: transparent;
}

.top .logo2 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 5px 0;
}

.top .logo2 a img {
  height: 45px;
}



.top .logo {
  display: none;
}

.top .actions {
  width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 10px;
    color: var(--Primary);
 }

 .top .actions a {
  text-decoration: none;
  color: var(--White);
  font-weight: 600;
  font-size: 16px;
  margin: 10px;
}
 .top .actions a:hover {
  text-decoration: none;
  color: var(--PrimaryHover);
  font-weight: 600;
}
 .top .actions a svg {
  font-size: 24px;
  margin: 10px;
}


.menu {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  padding: 0 20px;
  border-top: 1px solid var(--Border);
  height: 100%;

}
.menu .itensMenu {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.menu .itensMenu .unicIten{
  padding: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 100px;
  border-radius: 10px;
  color: var(--Primary);
}

.menu .itensMenu .unicIten img{
  width: 80px;
  margin-bottom: 10px;
}

.top .search {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 100%;
  margin: 20px 0;
}

.top .search button{
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
  padding: 10px 20px;
  border-radius: 25px;
  background: linear-gradient(0.25turn, #7D0AC9, #F9621D );
  color: var(--White);
  margin: 0px;
  border: none;
}


.contact .buttonsMenu {
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
width: 100%;
margin-top: 10px;
}
.contact .buttonsMenu .iconsMenu{
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
margin: 0px;
width: 100%;
}
.contact .buttonsMenu .iconsMenu .unicIconMenu{
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
padding:5px;
background-color: var(--BorderHover);
color: var(--White);
border-radius: 6px;
margin: 5px;
border: none;
font-size: 20px;
text-decoration: none;
}
.contact .buttonsMenu .iconsMenu .unicIconMenu:hover {
background-color: var(--Primary);
color: var(--White);
}
.contact .buttonsMenu .contactWhatsapp {
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
padding: 10px 20px;
background-color: var(--Aproved);
color: var(--White);
border-radius: 20px;
margin: 20px 3px;
border: none;
font-size: 14px;
}
.contact .buttonsMenu .contactWhatsapp svg {
font-size: 14px;
margin-right: 5px;
}
.top .logo {
  padding: 15px 0;
}
.top .logo a img {
  height: 40px;
}



li {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 7px 0px;
  font-weight: 700;
}
.nav-item2 {
  display: none;
}
li a{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-weight: 600;
  color: var(--Description);
  padding: 7px 0px;
  border-radius: 6px;
  margin-left:;
}
li a svg {

  margin-bottom: 2px;
  font-size: 16px;
}
li a p {
  font-size: 14px;
  font-weight: 700;
}
li a:hover{
  padding: 7px 0px;
  color: var(--Primary);
}

.nav-item {
  display: flex;
  margin: 2px;
  padding: 5px 10px;
  border-radius: 20px;
}

  }

  }
`;


const RightNav2 = ({ open }) => {


    function handleContact() {
      window.open("https://wa.me/+5522999813420")
    }
    
  return (
    <UlAdm open={open}>
      <div className="contact">

        <div className='infosContact'>
            <h4><IoMailOutline /> contato@softmark.com.br</h4>
        </div>

        <div className="off">
        <h4><IoLogoWhatsapp /> 21 99981-3420</h4>
        </div>
      <div className="buttonsMenu">
            <div className="iconsMenu">
            <a className="unicIconMenu" href="https://instagram.com/softmark.br" target='_Blank'><IoLogoInstagram /></a>
                <a className="unicIconMenu" href="https://facebook.com/softmark.br" target='_Blank'><IoLogoFacebook /></a>
                <a className="unicIconMenu" href="https://linkedin.com/company/softmark.br" target='_Blank'><IoLogoLinkedin /></a>
            </div>
          </div>
      </div>

      <div className="top">
      <div className="logo">
      <Link to='/'>
      <img src={LogoImg} alt="Logo Sua Chave" />
      </Link>
      </div>
      <div className="logo2">
      <Link to='/'>
      <img src={LogoImg2} alt="Logo Sua Chave" />
      </Link>
      </div>

      <div className="actions">
          <a href="http://"> Início </a>
          <a href="http://"> Quem somos </a>
          <a href="http://"> Serviços </a>
          <a href="http://"> Portólio </a>
          <a href="http://"> Contato </a>
      </div>

      <div className="search">
        {/* <input type="text" placeholder='Óculos de grau, lentes de contato...' /> */}
        <button onClick={handleContact}><IoLogoWhatsapp/> Agendar reunião</button>
      </div>



      </div>

    </UlAdm>
  )
}

export default RightNav2
