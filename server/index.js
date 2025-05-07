const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = 5000;


app.use(cors());
app.use(express.json()); // parse json data in requests

const API_KEY = "need to fill here"; // for nsfw
const WALLHAVEN_URL = "https://wallhaven.cc/api/v1";

app.get('/api/wallpapers', async (req, res) => {
	const { query = '', per_page = 20, categories = '010', purity = '100', sorting = 'toplist' } = req.query; // get search parameters from frontend
	try {
		const response = await axios.get(`${WALLHAVEN_URL}/search`, {
			params: {
				q: query, // search query
				per_page: 20, // Number of wallpapers per request
				categories: '010', // Include all categories
				purity: '100'
			}, // Safe-for-work conten},
		});
		// simplified the data for easy working
		const wallpapers = response.data.data.map((wallpaper) => ({
			id: wallpaper.id,
			url: wallpaper.path,
			thumb: wallpaper.thumbs.large
		}));
		res.json(wallpapers);

	}
	catch (error) {
		res.status(500).json({ error: 'Failed to fetch wallpapers from Wallhaven' });
	}


});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));



