import React, { Component } from 'react';

import '../../css/App.css';
import '../../css/layout.css';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Works_Home from './Works_Home';
import Studies_Home from './Studies_Home';
import About_Home from './About_Home';

class App extends Component {
    render() {
        return (
            <div>
                <Header></Header>

                <div class="splash-container">
                    <div class="splash">
                        <h1 class="splash-head">Igor de A. Meira</h1>
                        <p class="splash-subhead">
                            Mestrando em Engenharia de Software.
                        </p>
                        <p class="splash-subhead">
                            Desenvolvedor mobile e web. Certificado na área de testes de software (CTFL).
                        </p>
                    </div>
                </div>

                <div class="content-wrapper">
                    <Works_Home></Works_Home>
                    <Studies_Home></Studies_Home>
                    <About_Home></About_Home>
                    <Footer></Footer>
                </div>
            </div>
        );
    }
}

export default App;
