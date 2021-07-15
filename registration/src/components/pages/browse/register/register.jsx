
import { useRef } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import axios from 'axios';
export default function Register() {
    const email = useRef();
    const username = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const history = useHistory()


    const handleClick = async (e) =>{
        e.preventDefault();
        if(passwordAgain.current.value !== password.current.value){
            password.current.setCustomValidity("Пароли не совпадают! Попробуйте еще раз!");
        }else{
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,

            }
            try {
               await axios.post("http://localhost:8080/auth/signup",user)
               history.push('/success')
            } catch (error) {
                console.log(error);
            }
        }
    }
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
    
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick}>
                        <input placeholder="Имя пользователя" ref={username} required className="loginInput" />
                        <input placeholder="Электронная почта" type="email" ref={email} required  className="loginInput" />
                        <input placeholder="Пароль" minLength="6" type="password" 
                        ref={password} required className="loginInput" />
                        <input placeholder="Подтвердите пароль" minLength="6" type="password" 
                        ref={passwordAgain} required className="loginInput" />
                        <Link to='/login'>
                        <button className="loginRegisterButton">Уже есть аккаунт? Войти</button>
                        </Link>
                        <button className="loginButton" type="submit">Зарегистрироваться</button>
                    </form>
                </div>
            </div>
        </div>
    )
}