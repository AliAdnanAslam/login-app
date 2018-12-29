/**
 * Module dependencies
 */
import axios from 'axios';

const API = 'https://www.randomsite.com/api/';

/**
 * axios calling the api
 *
 * @param {Object} data
 */

export const login = (data) => {
  return axios.post(`${API}users/auth`, data);
};