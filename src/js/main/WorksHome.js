import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class WorksHome extends Component {
    render() {
        return (
            <div class="content">
                <h2 class="content-head is-center">TRABALHOS RECENTES</h2>

                <div class="row">
                    <div class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
                        <h3 class="content-subhead">
                            <i class="fa fa-desktop"></i>
                            AppShop Controle de Estoque
                        </h3>
                        <p>
                            Desenvolvedor. O AppShop Controle de Estoque é um aplicativo
                            feito por encomenda. Tem o objetivo de auxiliar no controle
                            do estoque da loja e compartilhar as informações sobre ele.
                        </p>
                    </div>
                    <div class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">

                        <h3 class="content-subhead">
                            <i class="fa fa-globe"></i>
                            Olho N'Água
                        </h3>
                        <p>
                            Desenvolvedor no Laboratório Analytics, localizado na Universidade Federal de
                            Campina Grande (UFCG). Trabalhando no desenvolvimento do projeto Olho N’Água,
                            que visa possibilitar o acompanhamento do nível de água dos reservatórios do
                            Semiárido brasileiro.
                        </p>
                    </div>
                    <div class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
                        <h3 class="content-subhead">
                            <i class="fa fa-globe"></i>
                            Portal INSA
                        </h3>
                        <p>
                            Desenvolvedor Web no Instituto Nacional do Semiárido(INSA).
                            Trabalhando no desenvolvimento do novo portal da instituição.
                            Utilizando o Joomla como CMS.
                        </p>
                    </div>
                    <div class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
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
                    {/*
                    <div class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
                        <h3 class="content-subhead">
                            <i class="fa fa-desktop"></i>
                            PriorJ
                        </h3>
                        <p>
                            Participação em projeto PIBITI, Priorização Automática de Casos de Teste Usando
                            PriorJ, orientado pela professora Patrícia Machado no SPLab. Trabalhando no
                            desenvolvimento, testes e resolução de bugs da ferramenta PriorJ, que visa a
                            priorização automática de casos de teste, com base em técnicas pré definidas.
                            Ferramenta com versão desktop e plugin para o Eclipse.
                        </p>
                    </div>
                    */}
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