import API from './axiosConfig';

const ratingService = {
    submitRating: async (ratingData) => {
        try {
            const { userName, professionalName, rating } = ratingData;
            const response = await API.post('/api/ratings', { userName, professionalName, rating });
            return response.data;
        } catch (error) {
            console.error('Error submitting rating:', error);
            throw error;
        }
    },

    getUserRatings: async (userName) => {
        try {
            const response = await API.get(`/api/ratings/user?name=${encodeURIComponent(userName)}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching user ratings:', error);
            throw error;
        }
    },
};

export default ratingService;
