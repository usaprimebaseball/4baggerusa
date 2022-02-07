import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});


export const signIn = (formData) => API.post('/signin', formData);
export const adminSignin = (formData) => API.post('/admin_signin', formData);

export const getUsers = () => API.get('/account/admin/users');

export const getUser = (id) => API.get(`/account/admin/users/${id}`);

export const directorSignUp = (formData) => API.post('/dir_signup', formData);
export const playerSignUp = (formData) => API.post('/player_signup', formData);
export const teamSignUp = (formData) => API.post('/team_signup', formData);
export const otherSignUp = (formData) => API.post('/other_signup', formData);
export const adminSignUp = (formData) => API.post('/admin_signup', formData);

export const updateUser = (role, id, updatedUser) => API.patch(`/account/${role}/${id}`, updatedUser);
export const updateAdmin = (id, updatedUser) => API.patch(`/account/admin/${id}`, updatedUser);

export const updateActivity = (userRole, id, updatedUser) => API.patch(`/account/${userRole}/${id}`, updatedUser);

export const createEvent = (formData) => API.post(`/events`, formData);
export const getEvents = () => API.get(`/events`);


