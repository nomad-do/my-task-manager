import axiosInstance from '../axiosInstance';

const refreshToken = async (refreshTokenValue) => {
  try {
    const response = await axiosInstance.post('/auth/refresh-token', null, {
      headers: { Authorization: `Bearer ${refreshTokenValue}` },
    });
    const { token, refreshToken } = response.data;
    localStorage.setItem('token', token);
    localStorage.setItem('refreshToken', refreshToken);
    return token;
  } catch (error) {
    console.error('Error refreshing token:', error);
    throw error;
  }
};

export default refreshToken;
