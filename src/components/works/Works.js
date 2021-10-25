import React from 'react';
import { v4 as uuidv4 } from 'uuid';
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
                <section id="works" className="section has-text-centered has-background-black-bis has-text-white">
                    <div className="container">
                        <div className="columns is-centered">
                            <div className="column is-three-fifths">
                                <h1 className="is-size-2 has-text-weight-bold">Mis proyectos personales</h1>
                                <h3 className="is-size-5">Aquí hay algunos proyectos de diseño en los que he trabajado recientemente.</h3>
                            </div>
                        </div>
                        <div className="columns is-multiline">                        
                            { 
                                projects.map(project => {
                                    return(
                                        <div className="column is-4" key={ project.id }>
                                            <a href="{ project.url }" target="_blank">
                                                <div className="card cardprojects">
                                                    <div className="card-image">
                                                        <figure className="image is-4by3">
                                                            <img src={ process.env.PUBLIC_URL + project.image } alt={ project.name }/>
                                                        </figure>
                                                    </div>
                                                    <div className="card-content">
                                                        <div className="media">
                                                            <div className="media-content">
                                                                <p className="title is-4">{ project.name }</p>
                                                                <p className="subtitle is-6">{ project.language }</p>
                                                            </div>
                                                        </div>
                                                        <div className="content">
                                                            { project.description }
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Works