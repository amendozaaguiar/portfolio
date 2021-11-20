import React from "react";
import './Description.css';


const Description = () => {
    
    return(
        <div>
            <section id="description" className="hero has-text-white is-fullheight has-background-black-bis">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-three-fifths has-text-centered">
                            <h3 className="is-size-2 has-text-weight-bold">Te cuento un poco sobre mí!</h3>
                            <p className="is-size-4 mt-5">
                                Te cuento un poco sobre mí, soy Tecnólogo en Gestión de Bases de Datos, Tecnólogo en Análisis y Desarrollo de Sistemas de Información, Técnico en Sistemas y estudiante de Ingeniería de Sistemas.
                                Estoy tranquilamente confiado, naturalmente curioso y trabajando constantemente para mejorar mis habilidades, un problema que requiera ingeniería a la vez <span className="blink">_</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
    
}

export default Description