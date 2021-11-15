import React from "react";
import './Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode, faLaptop, faCodeBranch } from '@fortawesome/free-solid-svg-icons'

class Skills extends React.Component {

    render() {
        return (
            <div>
                <section id="skills" className="hero has-text-white is-fullheight has-background-black-bis">                    
                    <div className="columns is-gapless is-centered has-text-centered p-5">
                        <div className="column p-5 has-border-green">
                            <FontAwesomeIcon icon={faLaptopCode} className="has-text-white icon-skills" />
                            <h4 className="title is-size-3 is-spaced mt-6 has-text-weight-bold has-text-green">Backend</h4>
                            <p className="pl-6 pr-6">Me gusta codificar cosas desde cero y disfruto dando vida a las ideas en el navegador.</p>
                            <h5 className="is-size-5 mt-6 has-text-green has-text-weight-semibold">Lenguajes y frameworks que empleo:</h5>
                            <p className="mt-4">PHP, Laravel, Livewire, MySql</p>
                            <h5 className="is-size-5 mt-6 has-text-green has-text-weight-semibold">Experiencia:</h5>
                            <ul>
                                <li className="mt-2">PHP: 3+ Años</li>
                                <li className="mt-2">Laravel, Livewire: 2+ Años</li>
                                <li className="mt-2">MySql: 8+ Años</li>
                            </ul>
                        </div>
                        <div className="column p-5 has-border-green">
                            <FontAwesomeIcon icon={faLaptop} className="has-text-white icon-skills" />
                            <h4 className="title is-size-3 is-spaced mt-6 has-text-weight-bold has-text-green">Frontend</h4>
                            <p className="pl-6 pr-6">Valoro la estructura de contenido simple, los patrones de diseño limpios y las interacciones reflexivas.</p>
                            <h5 className="is-size-5 mt-6 has-text-green has-text-weight-semibold">Lenguajes y librerias que empleo:</h5>
                            <p className="mt-4">HTML, CSS, JS, React JS</p>
                            <h5 className="is-size-5 mt-6 has-text-green has-text-weight-semibold">Experiencia:</h5>
                            <ul>
                                <li className="mt-2">HTML, CSS, JS: 3+ Años</li>
                                <li className="mt-2">React JS: 1+ Años</li>
                            </ul>
                        </div>
                        <div className="column p-5 has-border-green">
                            <FontAwesomeIcon icon={faCodeBranch} className="has-text-white icon-skills" />
                            <h4 className="title is-size-3 is-spaced mt-6 has-text-weight-bold has-text-green">Herramientas</h4>
                            <p className="pl-6 pr-6">Realmente me preocupo por la gente y me encanta trabajar con otros desarroladores de forma colaborativa.</p>
                            <h5 className="is-size-5 mt-6 has-text-green has-text-weight-semibold">Experiencia en:</h5>
                            <p className="mt-4">Linux, Git, SCRUM</p>
                            <h5 className="is-size-5 mt-6 has-text-green has-text-weight-semibold">Experiencia:</h5>
                            <ul>
                                <li className="mt-2">Linux: 7+ Años</li>
                                <li className="mt-2">Git: 3+ Años</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        )
    }

}

export default Skills