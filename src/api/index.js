import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});


export const signIn = (formData) => API.post('/user/signin', formData);
export const directorSignUp = (formData) => API.post('/user/dir_signup', formData);
export const playerSignUp = (formData) => API.post('/user/player_signup', formData);
export const teamSignUp = (formData) => API.post('/user/team_signup', formData);
export const otherSignUp = (formData) => API.post('/user/other_signup', formData);