import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Footer from '../footer/Footer';
import './Works.css'

class Works extends React.Component {

    constructor(props) {
		super(props);
		this.state = {
            projects: [
                {
                    id: uuidv4(),
                    name: 'LARAVELES-SPANISH-FOR-JETSTREAM',
                    language: 'Laravel',
                    description: 'Repositorio de idioma de Laravel 8 con Jetstream. Archivos de validación, contraseñas y paginación por defecto de Laravel 8 traducidos a español',
                    url: 'https://github.com/amendozaaguiar/laraveles-spanish-for-jetstream',
                    image: '/images/laraveles-spanish-for-jetstream.jpg',
                },
                {
                    id: uuidv4(),
                    name: 'DOMI',
                    language: 'PHP, LiveWire',
                    description: 'DOMI es una prueba de desarrollo realizada en Laravel 8 + Livewire',
                    url: 'https://github.com/amendozaaguiar/domi',
                    image: '/images/domi.jpg',
                },
                {
                    id: uuidv4(),
                    name: 'ELIXIR',
                    language: 'PHP',
                    description: 'Es una aplicación web para apoyo al proceso de convocatoria docentes catedráticos del Instituto de Educación a Distancia de la Universidad del Tolima.',
                    url: 'https://github.com/amendozaaguiar/elixir',
                    image: '/images/elixir.jpg',
                },

            ]
		};
	}
    render(){
        const { projects } = this.state;
        return(
            <div>
                <section id="works" className="hero has-text-white is-fullheight has-background-black-bis">
                    <div className="columns is-gapless is-multiline p-5"> 
                        <div className="column is-full has-text-centered mb-5">
                            <h1 className="is-size-2 has-text-weight-bold">Mis proyectos personales</h1>
                            <h3 className="is-size-5">Aquí hay algunos proyectos de diseño en los que he trabajado recientemente: <span className="blink">_</span></h3>
                        </div>                       
                        { 
                            projects.map(project => {
                                return(
                                    <div className="column is-4 p-5 has-text-centered has-border-green" key={ project.id }>
                                        <a href={ project.url } target="_blank" rel="noreferrer">
                                            <p className="title has-text-green is-4">{ project.name }</p>
                                            <p className="subtitle has-text-green is-6">{ project.language }</p>
                                            <p className="has-text-white">{ project.description }</p>
                                        </a>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <Footer></Footer>
                </section>
            </div>
        );
    }
}

export default Works