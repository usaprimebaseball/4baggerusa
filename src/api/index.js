import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});


export const signIn = (formData) => API.post('/signin', formData);
export const directorSignUp = (formData) => API.post('/dir_signup', formData);
export const playerSignUp = (formData) => API.post('/player_signup', formData);
export const teamSignUp = (formData) => API.post('/team_signup', formData);
export const otherSignUp = (formData) => API.post('/other_signup', formData);
export const adminSignUp = (formData) => API.post('/admin_signup', formData);

export const updateDirector = (id, updatedUser) => API.patch(`/account/director/${id}`, updatedUser);
export const updatePlayer = (id, updatedUser) => API.patch(`/account/player/${id}`, updatedUser);
export const updateTeam = (id, updatedUser) => API.patch(`/account/team/${id}`, updatedUser);
export const updateOther = (id, updatedUser) => API.patch(`/account/user/${id}`, updatedUser);
export const updateAdmin = (id, updatedUser) => API.patch(`/account/admin/${id}`, updatedUser);