import React, { useState } from "react";

const Footer = () => {
    const [year] = useState(new Date().getFullYear())
    return(
        <div>
            <section className="section has-background-black-bis has-text-green has-text-centered">
                <div className="container">
                    <div className="columns is-centered">© { year }. Todos los derechos reservados.</div>
                </div>
            </section>
        </div>
    )
}

export default Footer