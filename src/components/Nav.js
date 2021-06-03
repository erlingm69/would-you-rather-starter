import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import AuthButton from './AuthButton'

export default function Nav() {
    const location = useLocation()

    if (location.pathname === "/login") return <></>

    return (
        <nav className='nav'>
            <ul>
                <li>
                    <NavLink to='/' exact activeClassName='active'>
                        Home
          </NavLink>
                </li>
                <li>
                    <NavLink to='/add' activeClassName='active'>
                        Add Question
          </NavLink>
                </li>
                <li>
                    <NavLink to='/leaderboard' activeClassName='active'>
                        Leaderboard
          </NavLink>
                </li>
                <li className='to-right'>
                    <AuthButton />
                </li>
            </ul>
        </nav>
    )
}