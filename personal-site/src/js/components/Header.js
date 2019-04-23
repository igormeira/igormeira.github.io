import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import photo from '../../img/IMG_2181.png';

class Header extends Component {
    render() {
        return (
            <div class="header">
                <div class="home-menu pure-menu pure-menu-horizontal pure-menu-fixed portrait">
                    <img src={photo}></img>
                    <ul class="pure-menu-list">
                        <li class="pure-menu-item"><Link to="/" className="pure-menu-link">Home</Link></li>
                        <li class="pure-menu-item"><Link to="/trabalhos" className="pure-menu-link">Trabalhos</Link></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Header;