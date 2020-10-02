import React, { Component } from 'react'
import { navItems } from './navBarItems'
import '../App.css'

class NavBar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked }) 
    }

    render () {
        return(
            <nav className="navBarItems">
                <h1 className="title"><b>ISTC </b><i class="fas fa-chalkboard"></i></h1>
                <div className="menuIcons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'navMenu active': 'navMenu'}>
                    {navItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}   
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}


export default NavBar;