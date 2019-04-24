import React, { Component } from 'react';

export default class StudiesHome extends Component {
    render() {
        return (
            <div class="content ribbon">
                <h2 class="content-head content-head-ribbon is-center">Estudos</h2>

                <div class="row">
                    <div class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
                        <h3 class="content-subhead-ribbon">
                            <i class="fa fa-graduation-cap"></i> Graduação
                        </h3>
                        <p>
                            Graduação em Ciência da Computação, pela Universidade
                            Federal de Campina Grande (UFCG). Concluída em 2012.
                        </p>
                    </div>

                    <div class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
                        <h3 class="content-subhead-ribbon">
                            <i class="fa fa-graduation-cap"></i> Mestrado
                        </h3>
                        <p>
                            Mestrado em Engenharia de Software, com foco na
                            área de Métodos Formais, pela Universidade Federal
                            de Pernambuco. A ser concluído em 2019.
                        </p>
                    </div>

                    <div class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
                        <h3 class="content-subhead-ribbon">
                            <i class="fa fa-certificate"></i> Certificados
                        </h3>
                        <p>
                            Certificado na área de testes, CTFL. Diversos
                            certificados em cursos da Alura.
                        </p>
                    </div>

                    <div class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
                        <h3 class="content-subhead-ribbon">
                            <i class="fa fa-code"></i> Interesses
                        </h3>
                        <p>
                            Atualmente meus maiores interesses são: Swift,
                            Android, React, Python e Coq.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}