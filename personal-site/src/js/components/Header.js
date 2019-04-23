import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div class="header">
                <div class="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
                    <a class="pure-menu-heading" href=""> Igor Meira </a>
                    <ul class="pure-menu-list">
                        <li class="pure-menu-item pure-menu-selected"><a href="" class="pure-menu-link">Home</a></li>
                        <li class="pure-menu-item"><a href="" class="pure-menu-link">Trabalhos</a></li>
                        <li class="pure-menu-item"><a href="" class="pure-menu-link">Estudos</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Header;