import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {

	return(

		<div className="UserOutput">	
			<p>Hi, my name is {props.userName}</p>
			<p>I'm from {props.city}</p>
		</div>

	)
};

export default userOutput;