import React from "react";

class Navbar extends React.Component {
    render(){
        return (
            <div>
                <nav id="navbar" className="navbar is-primary">
                    <div className="container">
                        <div id="navMenu" className="navbar-menu">
                        <div className="navbar-start">
                            <a href="#navbar" className="navbar-item">
                                AM
                            </a>
                        </div>

                        <div className="navbar-end">
                            <div className="navbar-item">
                            <div className="buttons">
                                <a href="#description" className="button is-ghost is-outlined is-rounded has-text-white-bis">Acerca de mí</a>
                                <a href="#skills" className="button is-ghost is-outlined is-rounded has-text-white-bis">Habilidades</a>
                                <a href="https://www.linkedin.com/in/anderson-mendoza-aguiar-1b47a7203" target="_blank" rel="noreferrer" className="button is-link is-outlined is-rounded">Contáctame</a>
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
