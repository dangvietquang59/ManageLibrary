import axios from 'axios';
import {baseURL} from '../baseURL';

export const logoutUser = async () => {
  try {
    const response = await axios.post(baseURL + '/v1/auth/logout');
    console.log('Logout successful:', response.data);
    return response.status;
  } catch (error) {
    console.error('Logout failed:', error);
  }
};
