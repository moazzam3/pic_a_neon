import axios from 'axios';
import { toast } from 'sonner';
// import config from '../config';


const unProtectedFetch = axios.create({
	// baseURL: config.backendServiceBaseURL,
	baseURL: 'https://pickaneon.com/admin/public/api',
});

unProtectedFetch.interceptors.response.use(
	(response) => response,
	(error) => {
		const { response } = error;
		if (response && response?.data?.message) {
			toast.error(response.data.message);
		}
		return Promise.reject(error);
	}
);



export default unProtectedFetch;
