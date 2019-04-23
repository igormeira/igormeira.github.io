import React, { Component } from 'react';

class About_Home extends Component {
    render() {
        return (
            <div class="content">
                <h2 class="content-head is-center">Onde me encontrar</h2>
                
                <div class="row">
                    <div class="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                        <h3 class="content-subhead">
                            <i class="fa fa-github"></i> GitHub
                        </h3>
                        <h3 class="content-subhead">
                            <i class="fa fa-paper-plane-o"></i> igormeira.dev@gmail.com
                        </h3>
                    </div>

                    <div class="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                        <h3 class="content-subhead">
                            <i class="fa fa-linkedin"></i> LinkdIn
                        </h3>
                        <h3 class="content-subhead">
                            <i class="fa fa-file-text-o"></i> Lattes
                        </h3>
                    </div>

                    <div class="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                        <h3 class="content-subhead">
                            <i class="fa fa-instagram"></i> Instagram
                        </h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default About_Home;