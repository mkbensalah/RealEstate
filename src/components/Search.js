import React, { Component } from 'react';

export default class Search extends Component {
    render() {
        return (

            <div className="site-section site-section-sm pb-0">
                <div className="container">
                    <div className="row">
                        <form className="form-search col-md-12" >
                            <div className="row  align-items-end">
                                <div className="col-md-3">
                                    <label for="list-types">Listing Types</label>
                                    <div className="select-wrap">
                                        <span className="icon icon-arrow_drop_down"></span>
                                        <select name="list-types" id="list-types" className="form-control d-block rounded-0">
                                            <option value="">Condo</option>
                                            <option value="">Commercial Building</option>
                                            <option value="">Land Property</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <label for="offer-types">Offer Type</label>
                                    <div className="select-wrap">
                                        <span className="icon icon-arrow_drop_down"></span>
                                        <select name="offer-types" id="offer-types" className="form-control d-block rounded-0">
                                            <option value="">For Sale</option>
                                            <option value="">For Rent</option>
                                            <option value="">For Lease</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <label for="select-city">Select City</label>
                                    <div className="select-wrap">
                                        <span className="icon icon-arrow_drop_down"></span>
                                        <select name="select-city" id="select-city" className="form-control d-block rounded-0">
                                            <option value="">Tunis</option>
                                            <option value="">Sousse</option>
                                            <option value="">Kairouan</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <input type="submit" className="btnn btn-success text-white btn-block rounded-0" value="Search" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}