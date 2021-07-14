import React from 'react'
import { useHistory } from 'react-router-dom';
import authService from '../services/auth.service';
import './Header.css'

export default function Header() {
    const history = useHistory();
    return (
        <div>
            <h1>я шапка</h1>
            <button
            className="button"
                  type="button"
                  title="Sign Out"
                  onClick={() => {
                    authService.logout()
                    history.push("/login");
                  }}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                      history.push("/login");
                    }
                  }}
                >Нажми чтобы выйти</button>
        </div>
    )
}
