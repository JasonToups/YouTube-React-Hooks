import React from 'react';
import '../style/app.scss';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

// const KEY = "' '";

class App extends React.Component {
	state = {
		videos: [],
		selectedVideo: null,
	};

	componentDidMount() {
		this.onTermSubmit('react js');
	}

	onTermSubmit = async term => {
		const response = await youtube.get('/search', {
			params: {
				q: term,
				part: 'snippet',
				maxResults: 5,
				type: 'video',
				key: process.env.REACT_APP_KEY,
			},
		});
		this.setState({
			videos: response.data.items,
			selectedVideo: response.data.items[0],
		});
	};

	onVideoSelect = video => {
		this.setState({ selectedVideo: video });
	};

	render() {
		return (
			<div className='youtube-search-page'>
				<div className='background'></div>
				<SearchBar onFormSubmit={this.onTermSubmit} />
				<div className='video-content-section'>
					<div className='video-player-container'>
						<VideoDetail video={this.state.selectedVideo} />
					</div>
					<div className='video-previews-container'>
						<VideoList
							onVideoSelect={this.onVideoSelect}
							videos={this.state.videos}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
