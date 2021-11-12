import React, {useState, useEffect} from 'react';
import '../style/app.scss';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const App = () => {
	const [videos, setVideos] = useState([]);
	const [selectedVideo, setSelectedVideo] = useState(null);

	useEffect(() => {
		onTermSubmit('react js');

	}, []);

	const onTermSubmit = async term => {
		const response = await youtube.get('/search', {
			params: {
				q: term,
				part: 'snippet',
				maxResults: 5,
				type: 'video',
				key: process.env.REACT_APP_KEY,
			},
		});

		setVideos(response.data.items);
		setSelectedVideo(response.data.items[0]);
	};

	return (
		<div className='youtube-search-page'>
			<div className='background'></div>
			<SearchBar onFormSubmit={onTermSubmit} />
			<div className='video-content-section'>
				<div className='video-player-container'>
					<VideoDetail video={selectedVideo} />
				</div>
				<div className='video-previews-container'>
					<VideoList
						onVideoSelect={setSelectedVideo}
						videos={videos}
					/>
				</div>
			</div>
		</div>
	);
};

export default App;
