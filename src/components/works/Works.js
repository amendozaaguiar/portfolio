import React, { useState } from 'react';
import Footer from '../footer/Footer';
import './Works.css'

const Works = () => {
    const [projects] = useState([
        {
            name: 'LARAVELES-SPANISH-FOR-JETSTREAM',
            language: 'Laravel',
            description: 'Repositorio de idioma de Laravel 8 con Jetstream. Archivos de validación, contraseñas y paginación por defecto de Laravel 8 traducidos a español',
            url: 'https://github.com/amendozaaguiar/laraveles-spanish-for-jetstream'
        },
        {
            name: 'DOMI',
            language: 'PHP, LiveWire',
            description: 'DOMI es una prueba de desarrollo realizada en Laravel 8 + Livewire',
            url: 'https://github.com/amendozaaguiar/domi'
        },
        {
            name: 'ELIXIR',
            language: 'PHP',
            description: 'Es una aplicación web para apoyo al proceso de convocatoria docentes catedráticos del Instituto de Educación a Distancia de la Universidad del Tolima.',
            url: 'https://github.com/amendozaaguiar/elixir'
        },

    ])

    return(
        <>
            <section id="works" className="hero has-text-white is-fullheight has-background-black-bis">
                <div className="columns is-gapless is-multiline p-5"> 
                    <div className="column is-full has-text-centered mb-5">
                        <h1 className="is-size-2 has-text-weight-bold">Mis proyectos personales</h1>
                        <h3 className="is-size-5">Aquí hay algunos proyectos de diseño en los que he trabajado recientemente: <span className="blink">_</span></h3>
                    </div>                       
                    {projects.map((project, index) => {
                        return(
                            <div className="column is-4 p-5 has-text-centered has-border-green" key={ index }>
                                <a href={ project.url } target="_blank" rel="noreferrer">
                                    <p className="title has-text-green is-4 mt-5">{ project.name }</p>
                                    <p className="subtitle has-text-green is-6">{ project.language }</p>
                                    <p className="has-text-white mb-5">{ project.description }</p>
                                </a>
                            </div>
                        )
                    })}
                </div>
                <Footer></Footer>
            </section>
        </>
    );
}

export default Works