import React from "react";
import './Navbar.css';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            isShowMenu: false 
        };
    }

    render(){
        return (
            <div>
                <nav className="navbar has-background-black-bis is-fixed-top" role="navigation" aria-label="main navigation" >
                    <div className="navbar-brand">
                        <button role="button" className={`navbar-burger has-text-green ${this.state.isShowMenu===true ? 'is-active' : ''}`} onClick={() => this.setState(prevState => ({ isShowMenu: !prevState.isShowMenu }))} aria-label="menu" aria-expanded="false" data-target="navbarMenu">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </button>
                    </div>

                    <div id="navbarMenu" className={`navbar-menu has-background-black-bis ${this.state.isShowMenu===true ? 'is-active' : ''}`} onClick={() => this.setState(prevState => ({ isShowMenu: !prevState.isShowMenu }))}>
                        <div className="navbar-end pr-5 pt-5">
                            <a href="#profile" className="nav-item button is-ghost is-outlined is-rounded has-text-green is-block-touch">
                                00. Inicio
                            </a>
                            <a href="#description" className="nav-item button is-ghost is-outlined is-rounded has-text-green is-block-touch">
                                01. Acerca 
                            de mí</a>
                            <a href="#skills" className="nav-item button is-ghost is-outlined is-rounded has-text-green is-block-touch">
                                02. Habilidades
                            </a>
                            <a href="#works" className="nav-item button is-ghost is-outlined is-rounded has-text-green is-block-touch">
                                03. Proyectos
                            </a>
                            <a href="https://www.linkedin.com/in/anderson-mendoza-aguiar-1b47a7203" target="_blank" rel="noreferrer" className="nav-item button is-light is-outlined has-text-green is-block-touch">
                                04. Contáctame
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar
