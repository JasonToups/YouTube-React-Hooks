import React, {useState, useEffect} from 'react';
import '../style/app.scss';
import Contact from './Contact';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';

const App = () => {
	
	const [selectedVideo, setSelectedVideo] = useState(null);
	const [videos, search] = useVideos('react js custom hooks');

	useEffect(() => {
		setSelectedVideo(videos[0]);
	}, [videos]);

	return (
		<div className='youtube-search-page'>
			<div className='background'></div>
			<SearchBar onFormSubmit={search} />
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
      <Contact />
		</div>
	);
};

export default App;
