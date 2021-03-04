import ApiService from './ApiService';

const BASE_URL = 'http://127.0.0.1:8000/api/';
const client = new ApiService({ baseURL: BASE_URL });

const MyApi = {};

MyApi.getToDo = () => client.get('/todo/');
MyApi.postToDo = (payload) => client.post('/todo/', payload);

export default MyApi;