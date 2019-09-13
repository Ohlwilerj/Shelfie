import React, { Component } from 'react'
import '../components/header.css'
import logo from './assets/shelfie.png'

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className='sub-div'>
                    <img src={logo} alt=""/>
                    <h2>Shelfie</h2>
                </div>
            </div>
        )
    }
}
