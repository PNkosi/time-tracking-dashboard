import React from 'react'
import { NavLink } from 'react-router-dom'
import userPhoto from '../../assets/image-jeremy.png'
import './header.css'

const Header = () => {
  return (
    <header className='header border-rounded'>
      <div className='header__user-profile px-1 py-2 border-rounded'>
        <div className='header__user-image'>
          <img src={userPhoto} alt='user photo' />
        </div>
        <div className='header__user-name'>
          <p className='report-for'>Report for</p>
          <h1 className='user-name'>Jeremy Robson</h1>
        </div>
      </div>

      <nav className='header__nav px-1 py-2'>
        <NavLink
          className='header__nav-link'
          style={({ isActive }) => {
            return { color: isActive ? 'white' : '' }
          }}
          to='/'>
          Daily
        </NavLink>
        <NavLink
          className='header__nav-link'
          style={({ isActive }) => {
            return { color: isActive ? 'white' : '' }
          }}
          to='/weekly'>
          Weekly
        </NavLink>
        <NavLink
          className='header__nav-link'
          style={({ isActive }) => {
            return { color: isActive ? 'white' : '' }
          }}
          to='/monthly'>
          Monthly
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
