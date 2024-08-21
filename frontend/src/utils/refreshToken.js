import axiosInstance from '../axiosInstance';

const refreshToken = async (refreshTokenValue) => {
  try {
    const response = await axiosInstance.post('/auth/refresh-token', null, {
      headers: { Authorization: `Bearer ${refreshTokenValue}` },
    });

    console.log('Response from token refresh:', response);

    if (response.status !== 200) {
      throw new Error(`Unexpected response status: ${response.status}`);
    }

    if (!response.data || typeof response.data !== 'object') {
      throw new Error('Invalid response data');
    }

    const { token, refreshToken } = response.data;

    if (!token || !refreshToken) {
      throw new Error('Missing token or refreshToken in response');
    }

    localStorage.setItem('token', token);
    localStorage.setItem('refreshToken', refreshToken);
    
    return token;
  } catch (error) {
    console.error('Error refreshing token:', error.message || error);

    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('userId');

    if (error.response && error.response.status === 401) {
      console.warn('Unauthorized - likely invalid or expired refresh token');
    } else {
      console.warn('An unexpected error occurred during token refresh');
    }

    throw error;
  }
};

export default refreshToken;
