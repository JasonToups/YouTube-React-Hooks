import React from 'react';

const VideoDetail = ({ video }) => {
	if (!video) {
		return <div>Loading Videos...</div>;
	}

	const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

	return (
		<div>
			<div className='ui embed video-player'>
				<iframe title='video player' src={videoSrc} />
			</div>
			<div className='ui segment video-description'>
				<h4 className='ui header'>{video.snippet.title}</h4>
				<p>{video.snippet.description}</p>
			</div>
		</div>
	);
};

export default VideoDetail;
