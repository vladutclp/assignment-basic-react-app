import React from 'react';


const userInput = (props) => {
		const style={
			height: "20px",
			textAlign: "center",
			boxShadow: "0px 3px 3px #433",
			fontSize: "20px"
		}
	return(

		<div className="UserInput">	
			<input type="text" onChange={props.changed} value={props.userName} style={style}/>
		</div>

	)
};

export default userInput;