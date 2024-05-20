import axios from 'axios';
import {baseURL} from '../baseURL';

export const updateProfile = async (profile, accessToken) => {
  try {
    const res = await axios.post(
      baseURL + '/v3/profile/update-profile',
      profile,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );
    return res.data;
  } catch (error) {
    console.error('Lỗi khi cập nhật profile', error);
    throw error;
  }
};
