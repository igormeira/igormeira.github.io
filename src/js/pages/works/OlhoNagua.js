import React, { Component } from 'react';
import LazyLoad from 'react-lazy-load';

import olhonagua from '../../../img/olhonagua-web.png';

export default class OlhoNagua extends Component {
    
    render() {
        return (
            <div class="content">
                <div class="row">
                    <div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                        <h3 class="content-subhead">
                            <i class="fa fa-globe"></i>
                            Olho N'Água
                        </h3>
                        <h4>Plataforma: Web</h4>
                        <p>
                            Desenvolvedor no Laboratório Analytics, localizado na Universidade Federal de
                            Campina Grande (UFCG). Trabalhando no desenvolvimento do projeto Olho N’Água,
                            que visa possibilitar o acompanhamento do nível de água dos reservatórios do
                            Semiárido brasileiro. <a href="https://olhonagua.insa.gov.br/#!/">Visitar</a>
                        </p>
                        
                    </div>

                    <div class="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 portrait-web">
                        <LazyLoad>
                            <img src={olhonagua}></img>
                        </LazyLoad>
                    </div>
                </div>


            </div>
        );
    }
}