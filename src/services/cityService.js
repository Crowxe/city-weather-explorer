import axios from '../utils/axios';

export const fetchCities = async () => {
  try {
    const response = await axios.get('topCities/seeAll');
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
