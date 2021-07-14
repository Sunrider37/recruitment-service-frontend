import './login.css'
import {useRef} from 'react'

import authService from '../../../services/auth.service';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Login() {
    const username = useRef();
    const password = useRef();
    const history = useHistory();
    const handleClick = (e) => {
        e.preventDefault();
        try {
            authService.login({username : username.current.value, password : password.current.value})
        } catch (error) {
            console.log("Произошла ошибка при входе в аккаунт")
        }
        history.push("/")
    };

    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick}>
                        <input placeholder="Имя пользователя" type="username" className="loginInput" ref={username} required />
                        <input placeholder="Пароль" type="password"
                         className="loginInput" ref={password} required minLength="5"  />
                        <button className="loginButton" type="submit" >
                             Войти
                            </button>
                        <span className="loginForgot">Забыли пароль?</span>
                        <Link to='/signup'>
                        <button className="loginRegisterButton" > Создать новый аккаунт</button>
                        </Link>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}
