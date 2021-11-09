import axios from 'axios';

const KEY = 'AIzaSyDG852bOuZx7FhWrbyvOlZE8OpxxILJ5bM';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		type: 'video',
		maxResults: 5,
		key: `${KEY}`,
	},
});
