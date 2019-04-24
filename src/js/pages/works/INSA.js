import React, { Component } from 'react';

import insa_img from '../../../img/insa-web.png';

export default class INSA extends Component {
    render() {
        return (
            <div class="content">
                <div class="row">
                    <div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                        <h3 class="content-subhead">
                            <i class="fa fa-globe"></i>
                            Portal INSA
                        </h3>
                        <h4>Plataforma: Web</h4>
                        <p>
                            Desenvolvedor Web no Instituto Nacional do Semiárido(INSA).
                            Trabalhando no desenvolvimento do novo portal da instituição.
                            Utilizando o Joomla como CMS. <a href="https://portal.insa.gov.br">visitar</a>
                        </p>
                    </div>

                    <div class="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 portrait-web">
                        <img src={insa_img}></img>
                    </div>
                </div>


            </div>
        );
    }
}