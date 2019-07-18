import React from 'react';
import './style.css';
import Jumbotron from 'react-bootstrap/Jumbotron';

function Jumbotron() {
	return (
		<Jumbotron>
			<h1> Welcome to Game Meet</h1>
			<p>
				Please select the choice of loggin in or creating an acoount. After you have completed these actions you
				will be shown a listing of meetup groups for games in a specific area.
			</p>
		</Jumbotron>
	);
}
