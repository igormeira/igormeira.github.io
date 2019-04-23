import React, { Component } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MinhaFeira from './MinhaFeira';
import OlhoNagua from './OlhoNagua';
import FinancialHelper from './FinancialHelper';
import PriorJ from './PriorJ';

export default class Work extends Component {
    render() {
        return (
            <div>
                <Header></Header>

                <div class="splash-container">
                    <div class="splash">
                        <h1 class="splash-head">TRABALHOS</h1>
                    </div>
                </div>

                <div class="content-wrapper">
                    <MinhaFeira></MinhaFeira>
                    <OlhoNagua></OlhoNagua>
                    <FinancialHelper></FinancialHelper>
                    <PriorJ></PriorJ>
                    <Footer></Footer>
                </div>
            </div>
        );
    }
}