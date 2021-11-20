import React, { useEffect, useState } from "react";
import './Profile.css';

const Profile = () => {
	const [name, setName] = useState(null);
	const [bio, setBio] = useState(null);

	useEffect(() => {
		fetch("https://api.github.com/users/amendozaaguiar")
		.then(res => res.json())
		.then(
			(result) => {
				setName(result.name)
				setBio(result.bio)
			},
			(error) => {
				console.log(error)
			}
		)
	});

	return (
		<div>
			<section id="profile" className="hero has-text-white is-fullheight has-background-black-bis">
				<div className="hero-body is-vcentered">
					<div>
						<h1 className="is-size-4">Hola</h1>
						<br/>
						<h1 className="is-size-1 has-text-weight-bold">Soy { name }</h1>
						<br/>
						<h1 className="is-size-4">{ bio } <span className='blink'>_</span></h1>
					</div>
				</div>
			</section>
		</div>
	);
}
  
export default Profile
  