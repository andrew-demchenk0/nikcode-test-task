import axios from 'axios';

const API_URL = 'http://deayloop.backend.test.starway.agency:8002/api';

const fetchAllOffers = async () => {
	try {
		const response = await axios.get(`${API_URL}/offers/all/?format=api`);
		console.log('res', response)
		console.log('data', response.data)
		return response.data;
	} catch (error) {
		console.error('Error fetching offers:', error);
		return null;
	}
};

export default fetchAllOffers;
