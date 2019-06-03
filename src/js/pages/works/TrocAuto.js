import React, { Component } from 'react';
import LazyLoad from 'react-lazy-load';

import ios1 from '../../../img/trocauto-ios1.png';
import ios2 from '../../../img/trocauto-ios2.png';

export default class TrocAuto extends Component {
    render() {
        return (
            <div class="content">
                <div class="row">
                    <div class="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                        <h3 class="content-subhead">
                            <i class="fa fa-mobile"></i>
                            TrocAuto
                        </h3>
                        <h4>Plataforma: iOS</h4>
                        <p>
                            Desenvolvedor. O TrocAuto oferece ao usuário uma comparação entre dois veículos, 
                            mostrando qual dos dois tem um gasto menor em período de tempo. <a 
                            href="https://itunes.apple.com/us/app/trocauto/id1460860539?ls=1&mt=8">App Store</a>
                        </p>
                    </div>

                    <div class="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                        <LazyLoad>
                            <div class="portrait-mobile">
                                <img src={ios1}></img> <img src={ios2}></img> <i class="fa fa-apple"></i>
                            </div>
                        </LazyLoad>
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