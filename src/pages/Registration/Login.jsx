import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!username || !password) {
      console.log('Please enter both username and password.');
      return;
    }

    fetch('https://estore-doxn.onrender.com/eStore/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        if (response.ok) {
          console.log('Login successful');
        } else {
          console.log('Login failed. Please check your credentials.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  

  return (
    <div>
      <form>
        <TextField
          label="Username"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleLogin}>
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
// import React, { useState } from 'react';
// import { Button, TextField, Typography, Paper } from '@mui/material';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [loggedIn, setLoggedIn] = useState(false);
//   const [loginError, setLoginError] = useState(false);
//   const[loading, setLoading]=useState(false);

//   const handleLogin = () => {
//     setLoading(true); 

//     setTimeout(() => {
//       setLoading(false); 

//       if (username === 'elias' && password === 'Aoh123456') {
      
//         setLoggedIn(true);
//       } else {
       
//         setLoginError(true); 
//       }
//     }, 1500); 
//   };

//   return (
//     <div>
//       <Paper elevation={3} style={{marginTop:'10px',justifyContent:'center', marginLeft:'400px', marginRight:'400px', alignItems:'center' ,padding: '40px', maxWidth: '400px' }}>
//         <TextField
//           label="Username"
//           fullWidth
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <TextField sx={{marginTop:'20px'}}
//           label="Password"
//           type="password"
//           fullWidth
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <Button sx={{justifyContent:'center', marginTop:'10px', width:'150px', height:'50px', alignItems:'center', marginLeft:'120px', marginRight:'120px'}} variant="contained" color="primary" onClick={handleLogin}>
//           Login
//         </Button>
//       </Paper>
//       {loggedIn && <Typography  variant="h6" sx={{marginLeft:'550px', marginRight:'550px'}}>Login successful!</Typography>}
//       {loginError && <Typography variant="h6" sx={{marginLeft:'550px', marginRight:'550px'}}>Login failed. Please check your credentials.</Typography>}
//     </div>
//   );
// };

// export default Login;
