import React, { Component } from 'react';

export default class AboutHome extends Component {
    render() {
        return (
            <div class="content is-center">
                <h2 class="content-head is-center">Onde me encontrar</h2>
                
                <div class="row" aria-hidden="true">
                    <div class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                        <h3 class="content-subhead">
                            <i class="fa fa-envelope"></i> <a href="mailto:igor.meiras@gmail.com">igormeira.dev@gmail.com</a>
                        </h3>
                        <h3 class="content-subhead">
                            <i class="fa fa-instagram"></i> <a href="https://www.instagram.com/meira.igor/">Instagram</a>
                        </h3>
                    </div>

                    <div class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                        <h3 class="content-subhead">
                            <i class="fa fa-linkedin"></i> <a href="https://www.linkedin.com/in/igor-de-araújo-meira-092ab210b/">LinkdIn</a>
                            </h3>
                        <h3 class="content-subhead">
                            <i class="fa fa-book"></i> <a href="http://lattes.cnpq.br/1032260674152153">Lattes</a>
                        </h3>
                    </div>

                    <div class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                        <h3 class="content-subhead">
                            <i class="fa fa-apple"></i> <a href="">App Store</a>
                        </h3>
                        <h3 class="content-subhead">
                            <i class="fa fa-android"></i> <a href="https://play.google.com/store/apps/developer?id=Igor+de+Araújo+Meira">Play Store</a>
                        </h3>
                    </div>

                    <div class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                        <h3 class="content-subhead">
                            <i class="fa fa-github"></i> <a href="https://github.com/igormeira">GitHub</a>
                        </h3>
                    </div>
                </div>
            </div>
        );
    }
}