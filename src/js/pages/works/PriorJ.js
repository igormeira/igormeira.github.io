import React, { Component } from 'react';
import LazyLoad from 'react-lazy-load';

import priorj1 from '../../../img/priorj1.png';
import priorj2 from '../../../img/priorj2.png';
import LazyLoad from 'react-lazy-load';

export default class PriorJ extends Component {
    render() {
        return (
            <div class="content">
                <div class="row">
                    <div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                        <h3 class="content-subhead">
                            <i class="fa fa-desktop"></i>
                            PriorJ
                        </h3>
                        <h4>Plataforma: Desktop</h4>
                        <p>
                            Participação em projeto PIBITI, Priorização Automática de Casos de Teste Usando
                            PriorJ, orientado pela professora Patrícia Machado no SPLab. Trabalhando no
                            desenvolvimento, testes e resolução de bugs da ferramenta PriorJ, que visa a
                            priorização automática de casos de teste, com base em técnicas pré definidas.
                            Ferramenta com versão desktop e plugin para o Eclipse.
                        </p>
                    </div>

                    <div class="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 portrait-web">
                        <LazyLoad>
                            <img src={priorj2}></img>
                        </LazyLoad>
                    </div>
                </div>


            </div>
        );
    }
}