import "./login.css";

import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { LoginCall } from "../../../../apiCalls";
import { AuthContext } from "../../../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    try {
        LoginCall(
            { username,password },
            dispatch
          );
    } catch (error) {
            setUsername('');
            setPassword('');
            setError("Произошла ошибка при входе в аккаунт")
    }
    
  };
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Имя пользователя"
              type="username"
              className="loginInput"
              onChange={({ target }) => setUsername(target.value)}
              required
            />
            <input
              placeholder="Пароль"
              type="password"
              className="loginInput"
              required
              onChange={({target}) => setPassword(target.value)}
              minLength="5"
            />
            <button className="loginButton" type="submit" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Войти"
              )}
            </button>
            <span className="loginForgot">Забыли пароль?</span>
            <Link to="/signup">
              <button className="loginRegisterButton">
                {isFetching ? (
                  <CircularProgress color="white" size="20px" />
                ) : (
                  "Создать новый аккаунт"
                )}
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
