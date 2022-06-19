import React, { useState } from "react";

const Description = () => {
    const [description] = useState("I'm a Colombian based back-end and front-end developer, with 3 years experience as a professional, I have acquired the skills and knowledge necessary to make the project a success. I enjoy every step of the concept, design and development process, from discussion and collaboration.");
    return(
        <React.Fragment>
            <section id="description" className="hero has-text-white is-fullheight">
                <div className="hero-body is-vcentered">
                    <div className="container">
                        <div className="columns is-centered">
                            <div className="column is-three-fifths has-text-centered has-text-center-vertical">
                                <h3 className="is-size-2 has-text-weight-bold has-text-shadow-2">About me!</h3>
                                <p className="is-size-4 mt-5">{description} <span className="blink">_</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
    
}

export default Description