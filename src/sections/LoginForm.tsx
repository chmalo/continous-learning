import React, { useState } from 'react';
import './login.scss';
import logo from '../assets/logo-svg.svg';
import axios from "axios";
import {useNavigate} from "react-router-dom";

type LoginFormProps = {
    onLoginFormSubmit2?: (username: string, password: string) => void;
};



export const LoginForm: React.FC<LoginFormProps> = () => {
    const navigate = useNavigate();
    const [error, setError] = useState<boolean>(false);
    const [message, setMessage] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        console.log('username: ', username, 'password: ', password);
        try {
            const {data} = await axios.post('http://localhost:8888/API_Flexio/login_master', {email: username, password});
            const {message, success, data: data2} = data;

            if (!success) {
                console.error(message);
                setError(true);
                setMessage(message);
                return;
            }

            console.log(message, success, data2);

            navigate('/home');
        } catch (error) {
            console.error(error);
        }


    };

    return (
        <div className="auth-container">
            <form className="box-login" onSubmit={handleSubmit}>
                <div>
                    <img src={logo} alt="logo"/>
                </div>
                <div className="form-control">
                    <label className="label-input" htmlFor="email">Email</label>
                    <input className="text-input" type="text" name="email" id="email" value={username} onChange={handleUsernameChange} />
                </div>
                <div className="form-control">
                    <label className="label-input" htmlFor="password">Password</label>
                    <input className="text-input" type="password" id="password" value={password} onChange={handlePasswordChange} />
                </div>
                <button className="btn btn-primary block" type="submit">Iniciar sesión</button>
                {
                    error && <div className="error-message">{message}</div>
                }
            </form>
        </div>
    );
};
