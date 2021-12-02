import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
	return (
		<div onClick={() => onVideoSelect(video)} className='video-item item'>
			<img
				className='image'
				src={video.snippet.thumbnails.medium.url}
				alt={video.snippet.title}
			/>
			<div className='content'>
				<h3 className='header'>{video.snippet.title}</h3>
			</div>
		</div>
	);
};

export default VideoItem;
