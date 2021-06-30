import { create } from 'apisauce';

// define api
const api = create({ baseURL: 'http://localhost:5001' });

export const addSubscriber = (payload) => api.post('/subscribe', payload);

export const requestRegistration = (payload) => api.post('/request_registration', payload);
