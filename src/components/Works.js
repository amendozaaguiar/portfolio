import React, { useState, useEffect } from 'react';

const Works = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
		fetch("https://api.github.com/users/amendozaaguiar/repos")
		.then(res => res.json())
		.then(
			(result) => {
                result.forEach(repo => {
                    setProjects(projects => [...projects, repo])
                });
			},
			(error) => {
				console.log(error)
			}
		)
	}, []);

    return(
        <>
            <section id="works" className="hero has-text-white is-fullheight">
                <div className="hero-body is-vcentered">
                    <div className="columns is-gapless is-multiline p-5"> 
                        <div className="column is-full has-text-centered mb-5">
                            <h1 className="is-size-2 has-text-weight-bold has-text-shadow-2">My personal projects</h1>
                            <h3 className="is-size-5">Here are some projects I have recently worked on: <span className="blink">_</span></h3>
                        </div>                       
                        {projects.map((project, index) => {
                            return(
                                <div className="column is-4 p-5" key={ index }>
                                    <div className="card card-h-100">
                                        <header className="card-header has-text-centered">
                                            <p className="card-header-title is-centered is-uppercase has-text-white"> { project.name } </p>
                                        </header>
                                        <div className="card-content has-text-centered">
                                            <p className='subtitle has-text-weight-semibold has-text-white'>{ project.language }</p>
                                        </div>
                                        <div className="card-content">
                                            <div className="content has-text-white"> { project.description } </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Works