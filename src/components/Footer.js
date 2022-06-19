import React, { useState } from "react";

const Footer = () => {
    const [year] = useState(new Date().getFullYear())
    return(
        <>
            <section className="section">
                <div className="container">
                    <div className="columns">
                        <div className="column is-full has-text-white has-text-centered">
                            © { year }. Todos los derechos reservados.
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer