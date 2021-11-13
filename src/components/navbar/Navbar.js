import React from "react";
import './Navbar.css';

class Navbar extends React.Component {
    render(){
        return (
            <div>
                <nav id="navbar" className="navbar has-background-black-bis is-fixed-top">
                    <div className="navbar-menu">
                        <div className="navbar-end pt-5">
                            <div className="navbar-item">
                            <div className="buttons">
                                <a href="#profile" className="button is-ghost is-outlined is-rounded has-text-green">00. Inicio</a>
                                <a href="#description" className="button is-ghost is-outlined is-rounded has-text-green">01. Acerca de mí</a>
                                <a href="#skills" className="button is-ghost is-outlined is-rounded has-text-green">02. Habilidades</a>
                                <a href="#works" className="button is-ghost is-outlined is-rounded has-text-green">03. Proyectos</a>
                                <a href="https://www.linkedin.com/in/anderson-mendoza-aguiar-1b47a7203" target="_blank" rel="noreferrer" className="button is-light is-outlined has-text-green">04. Contáctame</a>
                            </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar
