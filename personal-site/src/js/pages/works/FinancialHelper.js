import React, { Component } from 'react';

import android1 from '../../../img/financialhelper-android1.png';
import android2 from '../../../img/financialhelper-android2.png';

export default class FinancialHelper extends Component {
    render() {
        return (
            <div class="content">
                <div class="row">
                    <div class="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                        <h3 class="content-subhead">
                            <i class="fa fa-mobile"></i>
                            Financial Helper
                        </h3>
                        <p>
                            Participação em projeto da Sony no Embedded Lab. Trabalhando no desenvolvimento,
                            testes e correções de bugs do aplicativo Financial Helper, aplicativo de controle
                            financeiro para plataforma Android.
                        </p>
                    </div>

                    <div class="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                        <div class="portrait-mobile">
                            <img src={android1}></img> <img src={android2}></img> <i class="fa fa-android"></i>
                        </div>
                    </div>

                    <div class="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                        
                    </div>
                </div>


            </div>
        );
    }
}