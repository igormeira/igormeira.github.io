import React, { Component } from 'react';

import ios1 from '../../../img/minhafeira-ios.png';

export default class MinhaFeira extends Component {
    render() {
        return (
            <div class="content">
                <div class="row">
                    <div class="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                        <h3 class="content-subhead">
                            <i class="fa fa-mobile"></i>
                            Minha Feira
                        </h3>
                        <p>
                            Desenvolvedor e cocriador. O Minha Feira tem a missão de proporcionar um controle
                            financeiro das suas feiras. Com gráficos interativos, o app mostar com quais tipos
                            de produtos o usuário gasta mais. Entre outra diversas funções.
                        </p>
                    </div>

                    <div class="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                        <div class="portrait-mobile">
                            <img src={ios1}></img> <img src={ios1}></img> <i class="fa fa-apple"></i>
                        </div>
                    </div>

                    <div class="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                        <div class="portrait-mobile">
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}