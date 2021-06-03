import React from 'react'
import { NavLink } from 'react-router-dom'
import AuthButton from './AuthButton'

export default function Nav () {
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
        <li className='toRight'>
            <AuthButton />
        </li>
      </ul>
    </nav>
  )
}