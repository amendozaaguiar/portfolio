import React from "react";

class Footer extends React.Component{
    constructor(props) {
		super(props);
		this.state = {
            year: new Date().getFullYear()
		};
    }

    render(){
        const { year } = this.state;
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
}

export default Footer