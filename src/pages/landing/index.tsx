//Landing Page que aparecerá no inicio 
import React from 'react';
import {Link} from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import './style.css'; //OBS: sempre que for importado um arquivo feito por mim e que não esteja na pasta 'node_module' é necessário por o './', pois se não colocar o react achará que está sendo importada uma API

/* O React não reconhece a imagem colocada diretamente no '<img src=', devido a 
isso a imagem precisa ser importada por aqui*/

function Landing() {
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy"/>
                    <h2>Sua plataforma de estudos online.</h2>
                </div>

                <img src={landingImg} alt="Plataforma de estudos" className="hero-image" />

                <div className="buttons-container"> 
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="Estudar" />
                        Estudar
                    </Link>

                    <Link to="/give-classes" className="give-classes">
                        <img src={giveClassesIcon} alt="Dar aulas" />
                        Dar aulas
                    </Link>
                </div>
                
                <span className="total-connections">
                    Total de 200 conexões já realizadas <img src={purpleHeartIcon} alt="Coração roxo" />
                </span>
                
            </div>
        </div>
    )
}

export default Landing;

/* OBS: ao invez de utlizar simplesmente class se utiliza className, 
pois class é uma palavra reservada do JavaScript */




/* Conceito de Single Page Aplication - evita que o navegador recarregue recursos que são compartilhados entre as páginas 

Jeito sem single page
<div className="buttons-container"> 
    <a href="/study" className="study">
        <img src={studyIcon} alt="Estudar" />
        Estudar
    </a>

Jeito com o single page

import {Link} from 'react-router-dom';

<div className="buttons-container"> 
    <Link to="/study" className="study">
        <img src={studyIcon} alt="Estudar" />
        Estudar
    </Link>

*/