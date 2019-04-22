import React, { Component } from 'react';

export default class AdvancedSearch extends Component {
    render() {
        return (
            <div>
                <div className="advanced-search advance-search-header houzez-adv-price-range " data-sticky="0">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <form>
                                    <div className="row">
                                        <div className="col-md-6 col-sm-6">
                                            <div className="form-group no-margin">
                                                <div className="input-search input-icon">

                                                    <input type="text" id="keyword" className="form-contro" name="keyword" placeholder="Enter an address, town, street, zip or property ID"></input>

                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-md-6 col-sm-6">
                                            <div className="row">
                                                <div className="col-sm-3 col-xs-12">
                                                    <div className="form-group no-margin location-select">
                                                        <select name="location" className="selectpicker     bs-select-hidden" data-live-search="false" data-live-search-style="begins">
                                                            <option value="">All Cities</option><option value="tunis">Tunis</option>

                                                        </select>
                                                        <div className="btn-group bootstrap-select">
                                                            <button type="button" className="btn dropdown-toggle btn-default" data-toggle="dropdown" title="All Cities" aria-expanded="false">
                                                                <span className="filter-option pull-left">All Cities</span>&nbsp;
                                                    <span className="fa fa-sort"></span>
                                                            </button>
                                                            <div className="dropdown-menu open">
                                                                <ul className="dropdown-menu inner" role="menu">
                                                                    <li data-original-index="0" className="selected">
                                                                        <a tabIndex="0" data-tokens="null" href="in.html">
                                                                            <span className="text">All Cities</span>
                                                                            <span className="glyphicon glyphicon-ok check-mark">
                                                                            </span>
                                                                        </a>
                                                                    </li>
                                                                    <li data-original-index="1"><a tabIndex="0" href="in.html">
                                                                        <span className="text">
                                                                            Tunis</span>
                                                                        <span className="glyphicon glyphicon-ok check-mark">
                                                                        </span>
                                                                    </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>



                                                <div className="col-sm-3 col-xs-6">
                                                    <div className="form-group no-margin areas-select">
                                                        <select name="area" className="selectpicker bs-select-hidden" data-live-search="false" data-live-search-style="begins">
                                                            <option value=""> All Areas</option>
                                                            <option data-parentcity="" value="al-furjan"> Al Fur</option>
                                                            <option data-parentcity="" value="arabian-ranches-2"> , Arab</option>
                                                            <option data-parentcity="" value="23-marina-dubai-marina"> 23 Marina</option>
                                                        </select>
                                                        <div className="btn-group bootstrap-select">
                                                            <button type="button" className="btn dropdown-toggle btn-default" data-toggle="dropdown" title="All Areas">
                                                                <span className="filter-option pull-left">All Areas</span>&nbsp;<span className="fa fa-sort"></span>
                                                            </button><div className="dropdown-menu open"><ul className="dropdown-menu inner" role="menu">
                                                                <li data-original-index="0" className="selected">
                                                                    <a tabIndex="0" href="in.html">
                                                                        <span className="text">All Areas</span>
                                                                        <span className="glyphicon glyphicon-ok check-mark"></span>
                                                                    </a>
                                                                </li>
                                                                <li data-original-index="1"><a tabIndex="0" href="in.html">
                                                                    <span className="text"> , Al Fun</span>
                                                                    <span className="glyphicon glyphicon-ok check-mark"></span>
                                                                </a>
                                                                </li>
                                                                <li data-original-index="2">
                                                                    <a tabIndex="0" href="in.html"><span className="text"> , Arab</span>
                                                                        <span className="glyphicon glyphicon-ok check-mark"></span></a></li>
                                                                <li data-original-index="3"><a tabIndex="0" href="in.html"><span className="text"> 23 Marina</span>
                                                                    <span className="glyphicon glyphicon-ok check-mark">
                                                                    </span>
                                                                </a>
                                                                </li>
                                                            </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>







                                              


                                                <div className="col-sm-3 col-xs-6 text-center">
                                                    <button className="advance-btn blue bt" type="button"><i className="fa fa-gear"></i>Advanced</button>
                                                </div>


                                                <div className="col-sm-3 col-xs-6">
                                                    <button type="submit" className="btn btn-secondary btn-block houzez-theme-button">Search</button>
                                                </div>


                                                <div className="advance-fields" style={{ display: 'block' }}>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </form>

                            </div>

                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <form>
                                    <div className="row">
                                        <div className="col-md-6 col-sm-6">
                                            <div className="row">







                                            <div className="col-sm-3 col-xs-6">
                                                    <div className="form-group no-margin areas-select">
                                                        <select name="area" className="selectpicker bs-select-hidden" data-live-search="false" data-live-search-style="begins">
                                                            <option value=""> All Status</option>
                                                            <option data-parentcity="" value="al-furjan"> For Rent</option>
                                                            <option data-parentcity="" value="arabian-ranches-2"> For Sale</option>
                                                            
                                                        </select>
                                                        <div className="btn-group bootstrap-select">
                                                            <button type="button" className="btn dropdown-toggle btn-default" data-toggle="dropdown" title="All Areas">
                                                                <span className="filter-option pull-left">All Status</span>&nbsp;<span className="fa fa-sort"></span>
                                                            </button><div className="dropdown-menu open"><ul className="dropdown-menu inner" role="menu">
                                                                <li data-original-index="0" className="selected">
                                                                    <a tabIndex="0" href="in.html">
                                                                        <span className="text">All Status</span>
                                                                        <span className="glyphicon glyphicon-ok check-mark"></span>
                                                                    </a>
                                                                </li>
                                                                <li data-original-index="1"><a tabIndex="0" href="in.html">
                                                                    <span className="text"> For Rent</span>
                                                                    <span className="glyphicon glyphicon-ok check-mark"></span>
                                                                </a>
                                                                </li>
                                                                <li data-original-index="2">
                                                                    <a tabIndex="0" href="in.html"><span className="text"> For Sale</span>
                                                                        <span className="glyphicon glyphicon-ok check-mark"></span></a></li>
                                                                
                                                               
                                                            </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>









                                                <div className="col-sm-3 col-xs-12">
                                                    <div className="form-group no-margin location-select">
                                                        <select name="location" className="selectpicker     bs-select-hidden" data-live-search="false" data-live-search-style="begins">
                                                            <option value="">All Types</option><option value="tunis">Apartment</option>
                                                            

                                                        </select>
                                                        <div className="btn-group bootstrap-select">
                                                            <button type="button" className="btn dropdown-toggle btn-default" data-toggle="dropdown" title="All Types" aria-expanded="false">
                                                                <span className="filter-option pull-left">All Types</span>&nbsp;
                                                    <span className="fa fa-sort"></span>
                                                            </button>
                                                            <div className="dropdown-menu open">
                                                                <ul className="dropdown-menu inner" role="menu">
                                                                    <li data-original-index="0" className="selected">
                                                                        <a tabIndex="0" data-tokens="null" href="in.html">
                                                                            <span className="text">All Types</span>
                                                                            <span className="glyphicon glyphicon-ok check-mark">
                                                                            </span>
                                                                        </a>
                                                                    </li>
                                                                    <li data-original-index="1"><a tabIndex="0" href="in.html">
                                                                        <span className="text">
                                                                            Apartment</span>
                                                                        <span className="glyphicon glyphicon-ok check-mark">
                                                                        </span>
                                                                    </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>


                                                <div className="col-sm-3 col-xs-6">
                                                    <div className="form-group no-margin areas-select">
                                                        <select name="area" className="selectpicker bs-select-hidden" data-live-search="false" data-live-search-style="begins">
                                                            <option value=""> Beds</option>
                                                            <option data-parentcity="" value="1"> 1</option>
                                                            <option data-parentcity="" value="2"> 2</option>
                                                            <option data-parentcity="" value="3">3</option>
                                                        </select>
                                                        <div className="btn-group bootstrap-select">
                                                            <button type="button" className="btn dropdown-toggle btn-default" data-toggle="dropdown" title="All Areas">
                                                                <span className="filter-option pull-left">Beds</span>&nbsp;<span className="fa fa-sort"></span>
                                                            </button><div className="dropdown-menu open"><ul className="dropdown-menu inner" role="menu">
                                                                <li data-original-index="0" className="selected">
                                                                    <a tabIndex="0" href="in.html">
                                                                        <span className="text">Beds</span>
                                                                        <span className="glyphicon glyphicon-ok check-mark"></span>
                                                                    </a>
                                                                </li>
                                                                <li data-original-index="1"><a tabIndex="0" href="in.html">
                                                                    <span className="text"> 1</span>
                                                                    <span className="glyphicon glyphicon-ok check-mark"></span>
                                                                </a>
                                                                </li>
                                                                <li data-original-index="2">
                                                                    <a tabIndex="0" href="in.html"><span className="text">  2</span>
                                                                        <span className="glyphicon glyphicon-ok check-mark"></span></a></li>
                                                                <li data-original-index="3"><a tabIndex="0" href="in.html"><span className="text">3 </span>
                                                                    <span className="glyphicon glyphicon-ok check-mark">
                                                                    </span>
                                                                </a>
                                                                </li>
                                                            </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>



                                                <div className="col-sm-3 col-xs-6">
                                                    <div className="form-group no-margin areas-select">
                                                        <select name="area" className="selectpicker bs-select-hidden" data-live-search="false" data-live-search-style="begins">
                                                            <option value=""> Baths</option>
                                                            <option data-parentcity="" value="1">1</option>
                                                            <option data-parentcity="" value="2"> 2</option>
                                                            <option data-parentcity="" value="3">3</option>
                                                        </select>
                                                        <div className="btn-group bootstrap-select">
                                                            <button type="button" className="btn dropdown-toggle btn-default" data-toggle="dropdown" title="All Areas">
                                                                <span className="filter-option pull-left">Baths</span>&nbsp;<span className="fa fa-sort"></span>
                                                            </button><div className="dropdown-menu open"><ul className="dropdown-menu inner" role="menu">
                                                                <li data-original-index="0" className="selected">
                                                                    <a tabIndex="0" href="in.html">
                                                                        <span className="text">Baths</span>
                                                                        <span className="glyphicon glyphicon-ok check-mark"></span>
                                                                    </a>
                                                                </li>
                                                                <li data-original-index="1"><a tabIndex="0" href="in.html">
                                                                    <span className="text"> 1</span>
                                                                    <span className="glyphicon glyphicon-ok check-mark"></span>
                                                                </a>
                                                                </li>
                                                                <li data-original-index="2">
                                                                    <a tabIndex="0" href="in.html"><span className="text"> 2</span>
                                                                        <span className="glyphicon glyphicon-ok check-mark"></span></a></li>
                                                                <li data-original-index="3"><a tabIndex="0" href="in.html"><span className="text">3</span>
                                                                    <span className="glyphicon glyphicon-ok check-mark">
                                                                    </span>
                                                                </a>
                                                                </li>
                                                            </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


            

                                                




                                                
                                            </div>

                                        </div>
                                    </div>
                                </form>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}