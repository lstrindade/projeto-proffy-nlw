import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem(){
    return(
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars0.githubusercontent.com/u/47565259?s=460&u=7af231d56e67d591c6839573fe2ce95d289ddd6b&v=4" alt ="Lidiane Trindade" />
                        <div>
                            <strong>Lidiane Trindade</strong>
                            <span>Data Science</span>
                        </div>
                    </header>
                    <p>teste 123 
                        <br /> <br />
                        teste 123
                    </p>
                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$100,00</strong>
                        </p>
                        <button type="button">
                            <img src={ whatsappIcon } alt="whatsapp" />
                            Entrar em contato
                        </button>
                    </footer>
                </article>

    );
}

export default TeacherItem;