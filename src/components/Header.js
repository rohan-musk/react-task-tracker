import React from 'react'
import { useLocation } from 'react-router-dom'
import Button from './Button'
const Header = ({ title, onAdd, showAdd }) => {

    const location = useLocation()

    return (
        <header className='header'>
            <h1> {title} </h1>
            {location.pathname === '/' && (<Button color={showAdd ? '#CC1F36' : 'black'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />)}
        </header>
    )
}

export default Header

