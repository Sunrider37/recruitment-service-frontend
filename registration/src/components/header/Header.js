import React from 'react'
import { useHistory,Link } from 'react-router-dom';
import './Header.css'

export default function Header() {
    const history = useHistory();
    return (
        <div className="container">
            <h1>я шапка</h1>
            <button
            className="button"
                  type="button"
                  title="Sign Out"
                  onClick={() => {
                    localStorage.clear()
                    history.push("/browse");
                  }}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                      history.push("/login");
                    }
                  }}
                >Нажми чтобы выйти</button>
                  <Link to="/browse">
                <button className="button">Нажми меня, чтобы перейти на еще одну страницу</button>
                  </Link>
        </div>
    )
}
