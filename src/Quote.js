import React from 'react';

const Quote = ({ props }) => {
	return (
		<div>
			<h1>{props.character}</h1>
			<h3>{props.quote}</h3>
			<img src={props.image} />
			<p>{props.characterDirection}</p>
		</div>
	);
};

export default Quote;
