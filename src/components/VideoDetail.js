import React from 'react';

const VideoDetail = ({ video }) => {
	if (!video) {
		return <div>Loading Videos...</div>;
	}

	const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

	return (
		<div>
			<div className='video-player'>
				<iframe title='video player' src={videoSrc} />
			</div>
			<div className='video-description'>
				<h2 className='header'>{video.snippet.title}</h2>
				<p>{video.snippet.description}</p>
			</div>
		</div>
	);
};

export default VideoDetail;
