import React, { useEffect, useState } from "react";

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
	},[]);

	return (
		<>
			<section id="profile" className="hero has-text-white is-fullheight">
				<div className="hero-body is-vcentered">
					<div className="columns">
						<div className="column">
							<h1 className="is-size-4 welcome-message">Hello, my name is</h1>
							<br/>
							<h1 className="is-size-1 has-text-weight-bold has-text-shadow-1">{ name }</h1>
							<br/>
							<h1 className="is-size-4">{ bio } <span className='blink'>_</span></h1>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
  
export default Profile
  