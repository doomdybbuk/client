import React, {useState} from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER} from '../graphql/mutations';
import { useNavigate} from 'react-router-dom';


const LoginForm = () =>{
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [loginUser,{data,error}] = useMutation(LOGIN_USER);
    const navigate = useNavigate();

    const handleLogin = async (e) =>{
        e.preventDefault();
        const res = await loginUser({variables:{email,password}});
        if(res.data.loginUser.token){
            localStorage.setItem('token',res.data.loginUser.token);
            navigate('/dashboard');
        }
    };

    return (
        <form onSubmit={handleLogin}>
          <h2>Login</h2>
          {error && <p style={{color: 'red'}}>{error.message}</p>}
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      );
};

export default LoginForm;