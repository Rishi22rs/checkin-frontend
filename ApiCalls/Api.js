import axios from 'axios';

const API = `http://192.168.0.102:6969/api`;

export const allPostsNearby = async data => {
  return axios
    .post(`${API}/allnearbyposts`, data)
    .then(response => response.data)
    .catch(err => {
      throw err;
    });
};

export const likePost = async data => {
  return axios
    .post(`${API}/likepost`, data)
    .then(response => response.data)
    .catch(err => {
      throw err;
    });
};

export const unlikePost = async data => {
  return axios
    .post(`${API}/unlikepost`, data)
    .then(response => response.data)
    .catch(err => {
      throw err;
    });
};

export const userPosts = async data => {
  return axios
    .post(`${API}/userposts`, data)
    .then(response => response.data)
    .catch(err => {
      throw err;
    });
};

export const addPost = async data => {
  return axios
    .post(`${API}/addpost`, data)
    .then(response => response.data)
    .catch(err => {
      throw err;
    });
};