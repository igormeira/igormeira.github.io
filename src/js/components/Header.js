import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';

import photo from '../../img/IMG_2181.png';

class Header extends Component {
    render() {
        return (
                <div class="header">
                    <div class="home-menu pure-menu menu-horizontal pure-menu-fixed portrait">
                        <LazyLoad>
                            <div>
                                <img src={photo}></img>
                                <ul class="pure-menu-list menu-list">
                                    <li class="pure-menu-item"><Link to="/" className="pure-menu-link">Home</Link></li>
                                    <li class="pure-menu-item"><Link to="/trabalhos" className="pure-menu-link">Trabalhos</Link></li>
                                </ul>
                            </div>
                        </LazyLoad> 
                    </div>
                </div>
        );
    }
}

export default Header;