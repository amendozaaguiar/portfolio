import React from "react";
import './Navbar.css';

class Navbar extends React.Component {
    render(){
        return (
            <div>
                <nav id="navbar" className="navbar has-background-black-bis is-fixed-top">
                    <div className="container">
                        <div id="navMenu" className="navbar-menu">
                        <div className="navbar-start">
                            <a href="#profile" className="navbar-item has-text-white">
                                AM
                            </a>
                        </div>

                        <div className="navbar-end">
                            <div className="navbar-item">
                            <div className="buttons">
                                <a href="#description" className="button is-ghost is-outlined is-rounded has-text-white-bis">Acerca de mí</a>
                                <a href="#skills" className="button is-ghost is-outlined is-rounded has-text-white-bis">Habilidades</a>
                                <a href="#works" className="button is-ghost is-outlined is-rounded has-text-white-bis">Proyectos</a>
                                <a href="https://www.linkedin.com/in/anderson-mendoza-aguiar-1b47a7203" target="_blank" rel="noreferrer" className="button is-light is-outlined is-rounded">Contáctame</a>
                            </div>
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
