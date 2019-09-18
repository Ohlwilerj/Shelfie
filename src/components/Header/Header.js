import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './header.css'
import logo from './../assets/shelfie.png'

export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <img src={logo} alt=""/>
                <h1>Shelfie</h1>
                    <div className="buttons">
                        <button><NavLink exact to='/'>Dashboard</NavLink></button> 
                        <button><NavLink to='/add' >Add Inventory</NavLink></button> 
                    </div>
            </header>
        )
    }
}