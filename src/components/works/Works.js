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
                    name: 'laraveles-spanish-for-jetstream',
                    language: 'Laravel',
                    description: 'Repositorio de idioma de Laravel 8 con Jetstream. Archivos de validación, contraseñas y paginación por defecto de Laravel 8 traducidos a español',
                    url: 'https://api.github.com/repos/amendozaaguiar/laraveles-spanish-for-jetstream',
                },
                {
                    id: uuidv4(),
                    name: 'domi',
                    language: 'PHP, LiveWire',
                    description: 'DOMI es una prueba de desarrollo realizada en Laravel 8 + Livewire',
                    url: 'https://api.github.com/repos/amendozaaguiar/domi',
                },
                {
                    id: uuidv4(),
                    name: 'elixir',
                    language: 'PHP',
                    description: 'Proyecto de grado para la universidad del Tolima',
                    url: 'https://api.github.com/repos/amendozaaguiar/elixir',
                },

            ]
		};
	}
    render(){
        const { projects } = this.state;
        return(
            <div>
                

                <section className="section has-text-centered">
                    <div className="container">
                        <div className="columns is-centered">
                            <div className="column is-three-fifths">
                                <h1 className="is-size-2 has-text-weight-bold">Mi trabajo reciente</h1>
                                <h3 className="is-size-5">Aquí hay algunos proyectos de diseño en los que he trabajado recientemente.</h3>
                            </div>
                        </div>
                        <div className="columns is-multiline">                        
                            { 
                                projects.map(project => {
                                    return(
                                        <div className="column is-4" key={ project.id }>
                                            <div className="card cardprojects">
                                                <div className="card-image">
                                                    <figure className="image is-4by3">
                                                        <img src="https://bulma.io/images/placeholders/1280x960.png" alt={ project.name }/>
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