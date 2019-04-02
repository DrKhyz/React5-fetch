import React, { Component } from 'react';
import './App.css';
import Quote from './Quote';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			quote: 'QuoteTest',
			character: 'CharTest',
			image: 'ImageTest'
		};
		this.handleClick = this.handleClick.bind(this);
	}

	getQuote() {
		fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
			.then(response => response.json())
			.then(data => {
				this.setState({
					quote: data[0].quote,
					character: data[0].character,
					image: data[0].image
				});
			});
	}

	componentDidMount() {
		this.getQuote();
	}

	handleClick() {
		this.getQuote();
	}

	render() {
		return (
			<div>
				<button onClick={this.handleClick}>Another Quote</button>
				<Quote props={this.state} />
			</div>
		);
	}
}

export default App;
