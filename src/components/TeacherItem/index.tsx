import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return(
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/48707402?s=460&u=57a27a7db033d9de034822c25e2de20e9aeefbab&v=4" alt="Rafael Cardoso"/>
                <div>
                    <strong> Rafael Cardoso </strong>
                    <span> Desenvolvimento Web </span>
                </div>
            </header>

            <p>
                Entusiasta das melhores tecnologias web.
                <br/><br/><br/><br/><br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.  
            </p>

            <footer>
                <p>
                    Preço/hora 
                    <strong>R$ 50,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;


                