import axios from 'axios';
import {baseURL} from '../baseURL';

export const getBooks = async () => {
  try {
    const res = await axios.get(baseURL + '/v2/books/get-books');
    return res.data;
  } catch (error) {
    console.error('Error fetching books:', error);
    throw error;
  }
};

export const borrowBooks = async (data, accessToken) => {
  try {
    const res = await axios.post(baseURL + '/v2/books/borrow-book', data, {
      headers: {
        Authorization: 'Bearer ' + accessToken,
      },
    });
    return res.status;
  } catch (error) {
    console.error('Lỗi khi mượn sách:', error);
    throw error;
  }
};
