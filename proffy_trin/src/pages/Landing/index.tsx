import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import './styles.css';

function Landing(){
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div>
                    <img src={logoImg} alt="Logo Proffy"></img>
                    <h2>Sua plataforma de ensino online</h2>
                </div>

                <img 
                    src={landingImg} 
                     alt="Plataforma de estudos Proffy" 
                    className="hero-image"
                />

                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="Estudar"/>
                        Estudar
                    </Link>
                    <Link to="/give-classes" className="give-classes">
                        <img src={giveClassesIcon} alt="Dar aulas"/>
                        Dar aulas
                    </Link>
                </div>
                
                <span className="total-connections">
                    Total de 200 conexões realizadas 
                    <img src={purpleHeartIcon} alt="Coração roxo"/>
                </span>

            </div>
        </div>
    )
}

export default Landing;