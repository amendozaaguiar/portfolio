import React, { useState } from "react";
import './Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode, faLaptop, faCodeBranch } from '@fortawesome/free-solid-svg-icons'

const Skills = () => {
    const [skills] = useState([{
        icon : faLaptopCode,
        title: 'Backend',
        description: 'Me gusta codificar cosas desde cero y disfruto dando vida a las ideas en el navegador.',
        subtitle: 'Lenguajes y frameworks que empleo:',
        subtitleDescription: 'PHP, Laravel, Livewire, MySql',
        heading: 'Experiencia:',
        skills: ['PHP: 3+ Años', 'Laravel, Livewire: 2+ Años', 'MySql: 8+ Años']
    },
    {
        icon : faLaptop,
        title: 'Frontend',
        description: 'Valoro la estructura de contenido simple, los patrones de diseño limpios y las interacciones reflexivas.',
        subtitle: 'Lenguajes y librerias que empleo:',
        subtitleDescription: 'HTML, CSS, JS, React JS',
        heading: 'Experiencia:',
        skills: ['HTML, CSS, JS: 3+ Años', 'React JS: 1+ Años']
    },
    {
        icon : faCodeBranch,
        title: 'Herramientas',
        description: 'Realmente me preocupo por la gente y me encanta trabajar con otros desarroladores de forma colaborativa.',
        subtitle: 'Experiencia en:',
        subtitleDescription: 'Linux, Git, SCRUM',
        heading: 'Experiencia:',
        skills: ['Linux: 7+ Años', 'Git: 3+ Años']
    }])

    return (
        <div>
            <section id="skills" className="hero has-text-white is-fullheight has-background-black-bis">                    
                <div className="columns is-gapless is-centered has-text-centered p-5">
                    { skills.map((skill, index) => {
                        return (
                            <div className="column p-5 has-border-green" key={index}>
                                <FontAwesomeIcon icon={skill.icon} className="has-text-white icon-skills mt-5" />
                                <h4 className="title is-size-3 is-spaced mt-6 has-text-weight-bold has-text-green">{skill.title}</h4>
                                <p className="pl-6 pr-6">{skill.description}</p>
                                <h5 className="is-size-5 mt-6 has-text-green has-text-weight-semibold">{skill.subtitle}</h5>
                                <p className="mt-4">{skill.subtitleDescription}</p>
                                <h5 className="is-size-5 mt-6 has-text-green has-text-weight-semibold">{skill.heading}</h5>
                                <ul className="mb-5">
                                    {skill.skills.map((description, index)=>{
                                        return <li className="mt-2" key={index}>{description}</li>
                                    })}
                                </ul>
                            </div>
                        )
                    })}
                </div>
            </section>
        </div>
    );
    
}

export default Skills