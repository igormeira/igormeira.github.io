import React, { Component } from 'react';

import '../../css/App.css';
import '../../css/layout.css';

import Header from '../components/Header';
import Footer from '../components/Footer';
import WorksHome from './WorksHome';
import StudiesHome from './StudiesHome';
import AboutHome from './AboutHome';

class App extends Component {
    render() {
        return (
            <div>
                <Header></Header>

                <div class="splash-container">
                    <div class="splash">
                        <h1 class="splash-head">Igor de A. Meira</h1>
                        <p class="splash-subhead">
                            Mestrando em Engenharia de Software - UFPE.
                        </p>
                        <p class="splash-subhead">
                            Desenvolvedor mobile e web. Certificado em testes de software (CTFL).
                        </p>
                    </div>
                </div>

                <div class="content-wrapper">
                    <WorksHome></WorksHome>
                    <StudiesHome></StudiesHome>
                    <AboutHome></AboutHome>
                    <Footer></Footer>
                </div>
            </div>
        );
    }
}

export default App;
