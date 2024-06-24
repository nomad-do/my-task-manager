// import React, { useState } from 'react';
// import authService from '../services/authServices'; // Ensure correct import path

// const Auth = () => {
//   const [userData, setUserData] = useState({
//     username: '',
//     password: '',
//   });

//   const handleRegister = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await authService.register(userData);
//       console.log('Registration successful:', response);
//     } catch (error) {
//       console.error('Registration failed:', error);
//     }
//   };

//   const handleLogin = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await authService.login(userData);
//       console.log('Login successful:', response);
//     } catch (error) {
//       console.error('Login failed:', error);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleRegister}>
//         <input
//           type="text"
//           value={userData.username}
//           onChange={(e) => setUserData({ ...userData, username: e.target.value })}
//           placeholder="Username"
//         />
//         <input
//           type="password"
//           value={userData.password}
//           onChange={(e) => setUserData({ ...userData, password: e.target.value })}
//           placeholder="Password"
//         />
//         <button type="submit">Register</button>
//       </form>
//       <form onSubmit={handleLogin}>
//         <input
//           type="text"
//           value={userData.username}
//           onChange={(e) => setUserData({ ...userData, username: e.target.value })}
//           placeholder="Username"
//         />
//         <input
//           type="password"
//           value={userData.password}
//           onChange={(e) => setUserData({ ...userData, password: e.target.value })}
//           placeholder="Password"
//         />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Auth;
