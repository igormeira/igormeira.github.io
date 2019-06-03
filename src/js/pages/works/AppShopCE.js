import React, { Component } from 'react';
import LazyLoad from 'react-lazy-load';

import ios1 from '../../../img/appshop-ios1.png';
import ios2 from '../../../img/appshop-ios2.png';

export default class AppShopCE extends Component {
    render() {
        return (
            <div class="content">
                <div class="row">
                    <div class="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                        <h3 class="content-subhead">
                            <i class="fa fa-mobile"></i>
                            AppShop Controle de Estoque
                        </h3>
                        <h4>Plataforma: iOS</h4>
                        <p>
                            Desenvolvedor. O AppShop Controle de Estoque é um aplicativo
                            feito por encomenda. Tem o objetivo de auxiliar no controle
                            do estoque da loja e compartilhar as informações sobre ele.
                        </p>
                    </div>

                    <div class="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                        <div class="portrait-mobile">
                            <LazyLoad>
                                <img src={ios1}></img> <img src={ios2}></img> <i class="fa fa-apple"></i>
                            </LazyLoad>
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