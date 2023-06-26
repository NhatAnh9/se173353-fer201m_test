import { Component } from 'react';
import '../index.css';
import { MenuItem } from './MenuItem';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    state = { clicked: false };
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {
        return (
            <nav className='NavbarItem'>

                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu "}>
                    {MenuItem.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link className={item.cName} to={item.url}>{item.title}</Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar;