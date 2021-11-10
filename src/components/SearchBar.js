import React from 'react';
import reactLogo from "../style/icons/reactLogo.svg";

class SearchBar extends React.Component {
	state = { term: '' };

	onInputChange = event => {
		this.setState({ term: event.target.value });
	};

	onFormSubmit = event => {
		event.preventDefault();

		this.props.onFormSubmit(this.state.term);
	};

	render() {
		return (
			<div className='search-bar ui segment'>
				<div className='logo-container'>
					<img src={reactLogo} className='logo' alt="react logo"/>
					<h1>Tube</h1>
				</div>
				<form onSubmit={this.onFormSubmit} className='ui form'>
					<div className='field'>
						<label>Video Search</label>
						<input
							type='text'
							value={this.state.term}
							onChange={this.onInputChange}
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
