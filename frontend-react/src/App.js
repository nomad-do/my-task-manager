import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode"; 
import { useState, useEffect } from "react";
import AuthForm from "./components/AuthForm";
import TaskManager from "./components/TaskManager";
import refreshToken from "./utils/refreshToken";

const isTokenExpired = (token) => {
  if (!token) return true;

  const { exp } = jwtDecode(token);
  if (!exp) return true;

  const expiryDate = new Date(exp * 1000);
  return expiryDate < new Date();
};

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [refreshTokenValue, setRefreshTokenValue] = useState(localStorage.getItem("refreshToken"));

  useEffect(() => {
    const handleToken = async () => {
      if (isTokenExpired(token)) {
        if (refreshTokenValue) {
          try {
            const newToken = await refreshToken(refreshTokenValue);
            setToken(newToken);
            localStorage.setItem("token", newToken);
          } catch (error) {
            localStorage.removeItem("token");
            localStorage.removeItem("refreshToken");
            setToken(null);
            setRefreshTokenValue(null);
          }
        } else {
          localStorage.removeItem("token");
          setToken(null);
        }
      }
    };

    handleToken();
  }, [token, refreshTokenValue]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    setToken(null);
    setRefreshTokenValue(null);
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<AuthForm setToken={setToken} />} />
        <Route
          path="/tasks"
          element={token ? <TaskManager onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
