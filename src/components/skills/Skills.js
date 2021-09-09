import React from "react";
import './Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode, faLaptop, faCodeBranch } from '@fortawesome/free-solid-svg-icons'

class Skills extends React.Component {

    render() {
        return (
            <div>
                <section id="skills" className="section skills">
                    <div className="container">
                        <div className="box has-text-centered">
                            <div className="columns is-centered">
                                <div className="column mt-6 mb-6 skill-column">
                                    <FontAwesomeIcon icon={faLaptopCode} className="has-text-primary icon-skills" />
                                    <h4 className="title is-size-3 is-spaced mt-6 has-text-weight-bold">Backend</h4>
                                    <p className="pl-6 pr-6">Me gusta codificar cosas desde cero y disfruto dando vida a las ideas en el navegador.</p>
                                    <h5 className="is-size-5 mt-6 has-text-primary has-text-weight-semibold">Lenguajes y frameworks que empleo:</h5>
                                    <p className="mt-4">PHP, Laravel, Livewire, MySql</p>
                                    <h5 className="is-size-5 mt-6 has-text-primary has-text-weight-semibold">Experiencia:</h5>
                                    <ul>
                                        <li className="mt-2">PHP: 3+ Años</li>
                                        <li className="mt-2">Laravel, Livewire: 2+ Años</li>
                                        <li className="mt-2">MySql: 8+ Años</li>
                                    </ul>
                                </div>
                                <div className="column mt-6 mb-6 skill-column">
                                    <FontAwesomeIcon icon={faLaptop} className="has-text-primary icon-skills" />
                                    <h4 className="title is-size-3 is-spaced mt-6 has-text-weight-bold">Frontend</h4>
                                    <p className="pl-6 pr-6">Valoro la estructura de contenido simple, los patrones de diseño limpios y las interacciones reflexivas.</p>
                                    <h5 className="is-size-5 mt-6 has-text-primary has-text-weight-semibold">Lenguajes y librerias que empleo:</h5>
                                    <p className="mt-4">HTML, CSS, JS, React JS</p>
                                    <h5 className="is-size-5 mt-6 has-text-primary has-text-weight-semibold">Experiencia:</h5>
                                    <ul>
                                        <li className="mt-2">HTML, CSS, JS: 3+ Años</li>
                                        <li className="mt-2">React JS: 1+ Años</li>
                                    </ul>
                                </div>
                                <div className="column mt-6 mb-6">
                                    <FontAwesomeIcon icon={faCodeBranch} className="has-text-primary icon-skills" />
                                    <h4 className="title is-size-3 is-spaced mt-6 has-text-weight-bold">Herramientas</h4>
                                    <p className="pl-6 pr-6">Realmente me preocupo por la gente y me encanta trabajar con otros desarroladores de forma colaborativa.</p>
                                    <h5 className="is-size-5 mt-6 has-text-primary has-text-weight-semibold">Experiencia en:</h5>
                                    <p className="mt-4">Linux, Git, SCRUM</p>
                                    <h5 className="is-size-5 mt-6 has-text-primary has-text-weight-semibold">Experiencia:</h5>
                                    <ul>
                                        <li className="mt-2">Linux: 7+ Años</li>
                                        <li className="mt-2">Git: 3+ Años</li>
                                        <li className="mt-2">SCRUM: 2+ Años</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }

}

export default Skills