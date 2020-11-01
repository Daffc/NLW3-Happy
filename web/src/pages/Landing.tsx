import React from 'react';
import '../styles/pages/landing.css';
import {Link} from 'react-router-dom';

import logoImg from '../images/logo.svg';
import {FiArrowRight} from 'react-icons/fi';


function Landing(){
    return (
        <div id="page-landing">
            <div className="content-wrapper">
            
            <div className="header">
                <img alt="Happy" src={logoImg}></img>
                <div className="location">
                    <strong>Curitiba</strong>
                    <span>Paraná</span>
                </div>
            </div>

            <main>
                <h1>Leve Felicidade para o mundo</h1>
                <p>Visite orfanatos e mude o dia de muitas crianças.</p>
            </main>

            <Link to="" className="enter-restricted-access">
                <strong>Acesso Restrito</strong>
            </Link>
            <Link to="/app" className="enter-app">
                <FiArrowRight size={26} color="rgba(0,0,0, 0.6)" />
            </Link>
            </div>
        </div>
    );
}

export default Landing;