import React, { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode, faLaptop, faCodeBranch } from '@fortawesome/free-solid-svg-icons'

const Skills = () => {
    const [skills] = useState([{
        icon : faLaptopCode,
        title: 'Back-end',
        description: 'I like to code things from scratch and enjoy bringing ideas to life in the browser.',
        subtitle: 'Languages and frameworks that I use:',
        subtitleDescription: 'PHP, Laravel, MySql',
    },
    {
        icon : faLaptop,
        title: 'Front-end',
        description: 'I value simple content structure, clean design patterns, and thoughtful interactions.',
        subtitle: 'Languages,libraries and frameworks that I use:',
        subtitleDescription: 'HTML, CSS, JS, Jquery, React JS, Vue',
    },
    {
        icon : faCodeBranch,
        title: 'Tools',
        description: 'I really care about people and I love working with other developers in a collaborative way.',
        subtitle: 'Experience in:',
        subtitleDescription: 'Linux, Git, SCRUM',
    }])

    return (
        <React.Fragment>
            <section id="skills" className="hero is-fullheight">
                <div className="hero-body is-vcentered">
                    <div className="columns is-gapless is-centered p-5">
                        { skills.map((skill, index) => {
                            return (
                                <div className="column p-2 has-border-green" key={ index }>
                                    <div className="card card-h-100">
                                        <div className="card-header">
                                            <p className="card-header-title is-centered">
                                                <FontAwesomeIcon 
                                                    icon={ skill.icon } 
                                                    className="icon-skills mt-5" 
                                                />
                                            </p>
                                            
                                        </div>
                                        <div className="card-content">
                                            <p className="title has-text-centered has-text-white">{ skill.title }</p>
                                            <div className="content has-text-white"> { skill.description } </div> 
                                        </div>
                                        <footer className="card-content">
                                            <p className="subtitle has-text-weight-semibold mt-5 has-text-centered has-text-white">{ skill.subtitle }</p>
                                            <div className="content has-text-centered has-text-white"> { skill.subtitleDescription } </div>
                                        </footer>
                                    </div>                        
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
    
}

export default Skills