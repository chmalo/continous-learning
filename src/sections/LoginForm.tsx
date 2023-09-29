import React, { useState } from 'react';
import './login.scss';
import logo from '../assets/logo-svg.svg';
import axios from "axios";

type LoginFormProps = {
    onLoginFormSubmit2?: (username: string, password: string) => void;
};



export const LoginForm: React.FC<LoginFormProps> = () => {
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
            const response = await axios.post('http://localhost:8888/API_Flexio/login_master', {email: username, password});

            console.log(response.data);
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
            </form>
        </div>
    );
};
