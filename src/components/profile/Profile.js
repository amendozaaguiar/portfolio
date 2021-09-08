import React from "react";
import './Profile.css';

class Profile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		  name: null,
		  bio: null,
		  avatar_url: null
		};
	}

	componentDidMount() {
		fetch("https://api.github.com/users/amendozaaguiar")
			.then(res => res.json())
			.then(
			(result) => {
				this.setState({
					name: result.name,
					bio: result.bio,
					avatar_url: result.avatar_url,
				});
			},
			// Nota: es importante manejar errores aquí y no en 
			// un bloque catch() para que no interceptemos errores
			// de errores reales en los componentes.
			(error) => {
				this.setState({
					//NO APLICA
				});
			}
		)
	  }


    render() {
		const { name, bio, avatar_url } = this.state;
		return (
			<div>
				<section className="hero is-primary is-fullheight is-long">
					<div className="hero-body">
						<p>
						<h4 className="is-size-4 has-text-white-ter">Hola</h4>
						<br/>
						<h1 className="is-size-1 has-text-weight-bold">Soy { name }</h1>
						<br/>
						<h4 className="is-size-4 has-text-white-ter">{ bio }</h4>
						</p>
					</div>
				</section>
			</div>
		);
    }
}
  
export default Profile
  