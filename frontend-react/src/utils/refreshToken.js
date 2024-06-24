import axios from "axios";

const refreshToken = async () => {
  try {
    const response = await axios.post(
      "/api/auth/refresh-token",
      {},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("refreshToken")}`,
        },
      },
    );

    const { token, refreshToken } = response.data;
    localStorage.setItem("token", token);
    localStorage.setItem("refreshToken", refreshToken);

    return token;
  } catch (error) {
    console.error("Error refreshing token:", error);
    // Handle error, e.g., log out user or show notification
  }
};

export default refreshToken;
