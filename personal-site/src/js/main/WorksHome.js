import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class WorksHome extends Component {
    render() {
        return (
            <div class="content">
                <h2 class="content-head is-center">TRABALHOS</h2>

                <div class="row">
                    <div class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">

                        <h3 class="content-subhead">
                            <i class="fa fa-desktop"></i>
                            Olho N'Água
                        </h3>
                        <p>
                            Desenvolvedor no Laboratório Analytics, localizado na Universidade Federal de
                            Campina Grande (UFCG). Trabalhando no desenvolvimento do projeto Olho N’Água,
                            que visa possibilitar o acompanhamento do nível de água dos reservatórios do
                            Semiárido brasileiro.
                        </p>
                    </div>
                    <div class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                        <h3 class="content-subhead">
                            <i class="fa fa-mobile"></i>
                            TrocAuto
                        </h3>
                        <p>
                            Desenvolvedor e criador. O TrocAuto é um aplicativo mobile com o intuito de
                            de fazer um comparativo entre veículos. Mostrando qual teria o melhor custo
                            financeiro, em caso de compra.
                        </p>
                    </div>
                    <div class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
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
                    <div class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
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
                </div>
                <div class="is-center">
                    <Link to="/trabalhos" className="pure-menu-link">
                        <i class="fa fa-th-large"></i> Ver mais
                    </Link>
                    
                </div>
            </div>
        );
    }
}