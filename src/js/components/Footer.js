import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <div class="layout-footer">
                <div class="row">
                    <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <p class="is-left">
                            <i>“The way to get started is to quit talking and begin doing.” - Walt Disney</i>
                        </p>
                    </div>

                    <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <p class="is-right">
                            <i class="fa fa-copyright"></i> Created by Igor Meira
                        </p>
                    </div>
                </div>
                
                
            </div>
        );
    }
}