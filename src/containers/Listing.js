import React, { Component } from 'react'
import '../assets/css/index.css';
import Header from '../components/Header';

export default class Listing extends Component {
    render() {
        return (
            <div>
                <Header />
                <div style={{ marginTop: "100px" }}></div>
                <div class="js-view-container" name="visibility: visible; opacity: 1;">

                    <div id="view-rent" class="view">
                        <div class="container">
                            <div class="row">

                                <div class="col-xs-8">
                                    <div id="rents" class="list">
                                        <div data-id="pay-rent-form" class="js-sheet sheet mycard">
                                            <form id="rent-payment-form" class="grid-form" role="form">
                                                <div class="well well-sm form-error"><i class="fa fa-exclamation-triangle"></i> <span class="js-form-error-message"></span></div>
                                                <input type="hidden" id="_id"></input>
                                                <input type="hidden" id="month" value=""></input>
                                                <input type="hidden" id="year" value=""></input>
                                                <div class="js-lease-state alert alert-danger hidden" role="alert">
                                                    <div class="row">
                                                        <div class="col-xs-6">Lease terminated</div>
                                                        <div class="js-contract-termination-date col-xs-6 text-right"></div>
                                                    </div>
                                                </div>
                                                <h2 id="occupantNameLabel"></h2>
                                                <h2 class="page-header">Payment - <span id="paymentPeriod"></span></h2>
                                                <div class="row">
                                                    <div class="col-xs-12">
                                                        <label>Indicate the amount, the type, and the date of payment</label>
                                                    </div>
                                                    <div class="col-xs-12">
                                                        <div class="row">
                                                            <div class="col-xs-6">
                                                                <div class="form-group">
                                                                    <label class="control-label" for="payment">Amount</label>
                                                                    <div class="input-group">
                                                                        <input type="text" id="payment" class="form-control text-right"></input>
                                                                        <span class="input-group-addon">$</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-xs-6">
                                                                <div class="form-group">
                                                                    <label class="control-label" for="paymentType">Type</label>
                                                                    <select id="paymentType" class="form-control">
                                                                        <option value="cheque">cheque</option>
                                                                        <option value="cash">cash</option>
                                                                        <option value="levy">levy</option>
                                                                        <option value="transfer">transfer</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-xs-6">
                                                                <div class="form-group">
                                                                    <label class="control-label" for="paymentDate">Date</label>
                                                                    <input type="text" class="datepicker form-control" id="paymentDate"></input>
                                                                </div>
                                                            </div>
                                                            <div class="col-xs-6">
                                                                <div class="form-group">
                                                                    <label class="control-label" for="paymentReference">Reference</label>
                                                                    <input type="text" id="paymentReference" class="form-control"></input>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <h2 class="page-header">Discount</h2>
                                                <div class="row">
                                                    <div class="col-xs-12">
                                                        <label>Discount on current rent</label>
                                                    </div>
                                                    <div class="col-xs-12">
                                                        <div class="form-group">
                                                            <label class="control-label" for="promo">Amount</label>
                                                            <input type="text" id="promo" class="form-control"></input>
                                                        </div>
                                                        <div class="form-group">
                                                            <label class="control-label" for="notepromo">Reason for discount</label>
                                                            <input type="text" id="notepromo" class="form-control"></input>
                                                        </div>
                                                    </div>
                                                </div>
                                                <h2 class="page-header">Internal note</h2>
                                                <div class="row">
                                                    <div class="col-xs-12">
                                                        <label>Comments that will not appear on the rent invoice</label>
                                                    </div>
                                                    <div class="col-xs-12">
                                                        <div class="form-group">
                                                            <label class="control-label" for="description">Comments</label>
                                                            <textarea type="text" class="form-control" id="description" rows="4"></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="well well-sm form-error"><i class="fa fa-exclamation-triangle"></i> <span class="js-form-error-message"></span></div>
                                            </form>

                                        </div>

                                        <div data-id="rents-history" class="js-sheet sheet mycard">
                                            <script id="history-rents-template" type="text/x-handlebars-template">
                                                {/* <h1>{{ occupant.name }}</h1> */}
                                                <div class='table-responsive'>
                                                    <table id="renttable" class="table table-hover table-bordered">
                                                        <thead>
                                                            <tr>
                                                                <td class="hidden-xs hidden-sm">Year</td>
                                                                <td class="hidden-xs hidden-sm">Month</td>
                                                                <td class="visible-xs">Period</td>
                                                                <td class="hidden-xs hidden-sm text-right">VAT ratio</td>
                                                                <td class="text-right">Rent to pay</td>
                                                                <td class="text-right">Payment</td>
                                                                <td class="hidden-xs hidden-sm text-left">Status</td>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {/* {{#each rents}} {{> history-rent-row-template}} {{/each}} */}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </script>

                                            <script id="history-rent-row-template" type="text/x-handlebars-template">
                                                <tr id="{{_id}}" class="{{active}}" data-value="{{uid}}">
                                                    {/* <td class="visible-xs visible-sm">{{month}}/{{year}}</td>
                                <td class="hidden-xs hidden-sm">{{year}}</td>
                                <td class="hidden-xs hidden-sm">{{formatMonth month}}</td>
                                <td class="hidden-xs hidden-sm text-right">{{formatPercent vatRatio}}</td>
                                <td class="text-right">{{formatMoney totalToPay}}</td>
                                <td class="text-right txthighlight">{{formatMoney payment emptyForZero=true}}{{#if paymentType}}<br>{{paymentType paymentType}} {{#if paymentReference}}{{i18next key='#' number=paymentReference}}{{/if}}{{/if}}{{#if paymentDate}}<br>{{i18next key='Paid
                                    date' date=paymentDate}}{{/if}}</td>
                                <td class="hidden-xs hidden-sm txtstatus text-left {{status}}">{{paymentStatus}}</td> */}
                                                </tr>
                                            </script>

                                            <div id="history-rents-table"></div>

                                        </div>

                                        <div data-id="print-doc-selector" class="js-sheet sheet">
                                            <div class="list-group mycard">
                                                <a id="rentcall" href="#" class="list-group-item">
                                                    <h4 class="list-group-item-heading"><i class="fa fa-file-text-o"></i> Rent notice</h4>
                                                    <p class="list-group-item-text">Notice letter for rent payment</p>
                                                </a>
                                                <a id="recovery1" href="#" class="list-group-item">
                                                    <h4 class="list-group-item-heading"><i class="fa fa-bell-o"></i> Late rent - First reminder</h4>
                                                    <p class="list-group-item-text">Friendly reminder for rent payment</p>
                                                </a>
                                                <a id="recovery2" href="#" class="list-group-item">
                                                    <h4 class="list-group-item-heading"><i class="fa fa-bullhorn"></i> Late rent - Second reminder</h4>
                                                    <p class="list-group-item-text">Unfriendly reminder for rent payment</p>
                                                </a>
                                                <a id="recovery3" href="#" class="list-group-item">
                                                    <h4 class="list-group-item-heading"><i class="fa fa-envelope-o"></i> Late rent - Last reminder</h4>
                                                    <p class="list-group-item-text">Order to pay or vacate</p>
                                                </a>
                                                <a id="paymentorder" href="#" class="list-group-item">
                                                    <h4 class="list-group-item-heading"><i class="fa fa-gavel"></i> Recovery of unpaid rents</h4>
                                                    <p class="list-group-item-text">Request rent recovery by a third party (company, justice)</p>
                                                </a>
                                                <a id="printinvoices" href="#" class="list-group-item">
                                                    <h4 class="list-group-item-heading"><i class="fa fa-file-text-o"></i> Rental invoice</h4>
                                                    <p class="list-group-item-text">Invoice stating the payment of the rent</p>
                                                </a>
                                            </div>
                                        </div>

                                        <div data-id="email-doc-selector" class="js-sheet sheet">
                                            <div class="list-group mycard">
                                                <a id="emailrentcall" href="#" class="list-group-item">
                                                    <h4 class="list-group-item-heading"><i class="fa fa-envelope-o"></i> Rent notice</h4>
                                                    <p class="list-group-item-text">Notice letter for rent payment</p>
                                                </a>
                                                <a id="emailrentcallreminder" href="#" class="list-group-item">
                                                    <h4 class="list-group-item-heading"><i class="fa fa-envelope-o"></i> Rent notice reminder</h4>
                                                    <p class="list-group-item-text">Friendly reminder for rent payment</p>
                                                </a>
                                                <a id="emailinvoice" href="#" class="list-group-item">
                                                    <h4 class="list-group-item-heading"><i class="fa fa-envelope-o"></i> Rental invoice</h4>
                                                    <p class="list-group-item-text">Invoice stating the payment of the rent</p>
                                                </a>
                                            </div>
                                        </div>

                                        <div class="js-list-content">
                                            <div id="57015b4da76d50970d6e1d6d" class="js-list-row list-row mycard" data-filter-values="AMAZON ONLINE,notpaid" name="">
                                                <div class="list-col">
                                                    <div class="list-label">

                                                        <div class="text-danger hidden js-list-value">
                                                            Not paid
                                        {/* <!--  (16 months late)  --> */}
                                                        </div>


                                                        <ul class="list-inline">

                                                            <li>
                                                                <span class="label label-danger" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Not paid"><i class="fa fa-exclamation-triangle"></i> FEB</span>
                                                            </li>

                                                            <li>
                                                                <span class="label label-danger" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Not paid"><i class="fa fa-exclamation-triangle"></i> MAR</span>
                                                            </li>

                                                            <li>
                                                                <span class="label label-danger" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Not paid"><i class="fa fa-exclamation-triangle"></i> APR</span>
                                                            </li>

                                                            <li>
                                                                <span class="label label-danger" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Not paid"><i class="fa fa-exclamation-triangle"></i> MAY</span>
                                                            </li>

                                                            <li>
                                                                <span class="label label-danger" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Not paid"><i class="fa fa-exclamation-triangle"></i> JUN</span>
                                                            </li>

                                                            <li>
                                                                <span class="label label-danger" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Not paid"><i class="fa fa-exclamation-triangle"></i> JUL</span>
                                                            </li>

                                                            <li>
                                                                <span class="label label-danger" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Not paid"><i class="fa fa-exclamation-triangle"></i> AUG</span>
                                                            </li>

                                                            <li>
                                                                <span class="label label-danger" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Not paid"><i class="fa fa-exclamation-triangle"></i> SEP</span>
                                                            </li>

                                                            <li>
                                                                <span class="label label-danger" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Not paid"><i class="fa fa-exclamation-triangle"></i> OCT</span>
                                                            </li>

                                                            <li>
                                                                <span class="label label-danger" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Not paid"><i class="fa fa-exclamation-triangle"></i> NOV</span>
                                                            </li>

                                                            <li>
                                                                <span class="label label-danger" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Not paid"><i class="fa fa-exclamation-triangle"></i> DEC</span>
                                                            </li>

                                                            <li>
                                                                <span class="label label-danger" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Not paid"><i class="fa fa-exclamation-triangle"></i> JAN</span>
                                                            </li>

                                                            <li>
                                                                <span class="label label-danger" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Not paid"><i class="fa fa-exclamation-triangle"></i> FEB</span>
                                                            </li>

                                                            <li>
                                                                <span class="label label-danger" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Not paid"><i class="fa fa-exclamation-triangle"></i> MAR</span>
                                                            </li>

                                                            <li>
                                                                <span class="label label-danger" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Not paid"><i class="fa fa-exclamation-triangle"></i> APR</span>
                                                            </li>

                                                            <li>
                                                                <span class="label label-danger" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Not paid"><i class="fa fa-exclamation-triangle"></i> MAY</span>
                                                            </li>

                                                        </ul>

                                                    </div>
                                                    <div class="clearfix">
                                                        <div class="pull-left list-avatar-col">
                                                            <span class="fa-stack fa-lg">
                                                                <i class="fa fa-calendar-o fa-stack-2x"></i>
                                                                <span class="fa icon-text fa-stack-1x">$</span>
                                                            </span>
                                                        </div>
                                                        <div class="pull-left">
                                                            <div class="list-title js-list-value">JUMIA ONLINE</div>
                                                        </div>
                                                    </div>
                                                    <div class="list-label">
                                                        <i class="fa fa-home "></i> Room
                                </div>
                                                </div>
                                                <div class="list-col">
                                                    <div class="list-label clearfix">
                                                        <div class="pull-right">

                                                            <ul class="list-inline">
                                                                <li>

                                                                    <span class="label label-default"><i class="fa fa-envelope-o"></i> Rent notice</span>

                                                                </li>
                                                                <li>

                                                                    <span class="label label-default"><i class="fa fa-envelope-o"></i> Rental invoice</span>

                                                                </li>
                                                            </ul>

                                                        </div>
                                                    </div>
                                                    <div class="list-label clearfix">
                                                        <small class="pull-right">Payment</small>
                                                    </div>
                                                    <div class="list-payment-price text-right">
                                                        <span><span class="price-content"><span class="price-amount odometer" data-key="payment">$0.00</span></span>
                                                        </span>
                                                    </div>
                                                    <div class="list-label clearfix">
                                                        <div class="pull-left">Balance</div>
                                                        <div class="list-balance-price pull-right text-right">
                                                            <span class="price-content"><span class="price-amount odometer" data-key="newBalance">-$92,160.00</span></span>
                                                        </div>
                                                    </div>
                                                    <div data-toggle="tooltip" data-placement="right" class="list-comment-link" data-html="true" title="" name="display: none;" data-original-title=""><span class="glyphicon glyphicon-comment"></span></div>
                                                </div>
                                                <div class="list-selection-overlay"></div>
                                            </div>



                                            <div id="57015a53a76d50970d6e1d6c" class="js-list-row list-row mycard" data-filter-values="GOOGLE FRANCE,notpaid" name="">
                                                <div class="list-col">
                                                    <div class="list-label">

                                                        <div class="text-danger hidden js-list-value">
                                                            Not paid
                                        {/* <!--  (16 months late)  --> */}
                                                        </div>


                                                        <ul class="list-inline">

                                                            <li>
                                                                <span class="label label-danger" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Not paid"><i class="fa fa-exclamation-triangle"></i> FEB</span>
                                                            </li>

                                                            <li>
                                                                <span class="label label-danger" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Not paid"><i class="fa fa-exclamation-triangle"></i> MAR</span>
                                                            </li>

                                                            <li>
                                                                <span class="label label-danger" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Not paid"><i class="fa fa-exclamation-triangle"></i> APR</span>
                                                            </li>

                                                            <li>
                                                                <span class="label label-danger" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Not paid"><i class="fa fa-exclamation-triangle"></i> MAY</span>
                                                            </li>

                                                            <li>
                                                                <span class="label label-danger" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Not paid"><i class="fa fa-exclamation-triangle"></i> JUN</span>
                                                            </li>

                                                            <li>
                                                                <span class="label label-danger" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Not paid"><i class="fa fa-exclamation-triangle"></i> JUL</span>
                                                            </li>

                                                            <li>
                                                                <span class="label label-danger" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Not paid"><i class="fa fa-exclamation-triangle"></i> AUG</span>
                                                            </li>

                                                            <li>
                                                                <span class="label label-danger" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Not paid"><i class="fa fa-exclamation-triangle"></i> SEP</span>
                                                            </li>

                                                            <li>
                                                                <span class="label label-danger" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Not paid"><i class="fa fa-exclamation-triangle"></i> OCT</span>
                                                            </li>

                                                            <li>
                                                                <span class="label label-danger" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Not paid"><i class="fa fa-exclamation-triangle"></i> NOV</span>
                                                            </li>

                                                            <li>
                                                                <span class="label label-danger" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Not paid"><i class="fa fa-exclamation-triangle"></i> DEC</span>
                                                            </li>

                                                            <li>
                                                                <span class="label label-danger" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Not paid"><i class="fa fa-exclamation-triangle"></i> JAN</span>
                                                            </li>

                                                            <li>
                                                                <span class="label label-danger" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Not paid"><i class="fa fa-exclamation-triangle"></i> FEB</span>
                                                            </li>

                                                            <li>
                                                                <span class="label label-danger" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Not paid"><i class="fa fa-exclamation-triangle"></i> MAR</span>
                                                            </li>

                                                            <li>
                                                                <span class="label label-danger" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Not paid"><i class="fa fa-exclamation-triangle"></i> APR</span>
                                                            </li>

                                                            <li>
                                                                <span class="label label-danger" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Not paid"><i class="fa fa-exclamation-triangle"></i> MAY</span>
                                                            </li>

                                                        </ul>

                                                    </div>
                                                    <div class="clearfix">
                                                        <div class="pull-left list-avatar-col">
                                                            <span class="fa-stack fa-lg">
                                                                <i class="fa fa-calendar-o fa-stack-2x"></i>
                                                                <span class="fa icon-text fa-stack-1x">$</span>
                                                            </span>
                                                        </div>
                                                        <div class="pull-left">
                                                            <div class="list-title js-list-value">GOOGLE TUNISIA</div>
                                                        </div>
                                                    </div>
                                                    <div class="list-label">
                                                        <i class="fa fa-home "></i> Room
                                </div>
                                                </div>
                                                <div class="list-col">
                                                    <div class="list-label clearfix">
                                                        <div class="pull-right">

                                                            <ul class="list-inline">
                                                                <li>

                                                                    <span class="label label-default"><i class="fa fa-envelope-o"></i> Rent notice</span>

                                                                </li>
                                                                <li>

                                                                    <span class="label label-default"><i class="fa fa-envelope-o"></i> Rental invoice</span>

                                                                </li>
                                                            </ul>

                                                        </div>
                                                    </div>
                                                    <div class="list-label clearfix">
                                                        <small class="pull-right">Payment</small>
                                                    </div>
                                                    <div class="list-payment-price text-right">
                                                        <span><span class="price-content"><span class="price-amount odometer" data-key="payment">$0.00</span></span>
                                                        </span>
                                                    </div>
                                                    <div class="list-label clearfix">
                                                        <div class="pull-left">Balance</div>
                                                        <div class="list-balance-price pull-right text-right">
                                                            <span class="price-content"><span class="price-amount odometer" data-key="newBalance">-$124,800.00</span></span>
                                                        </div>
                                                    </div>
                                                    <div data-toggle="tooltip" data-placement="right" class="list-comment-link" data-html="true" title="" name="display: none;" data-original-title=""><span class="glyphicon glyphicon-comment"></span></div>
                                                </div>
                                                <div class="list-selection-overlay"></div>
                                            </div>



                                            <div id="57015ea5a76d50970d6e1d6f" class="js-list-row list-row mycard" data-filter-values="MOZILLA Corporation,notpaid" name="">
                                                <div class="list-col">
                                                    <div class="list-label">

                                                        <div class="text-danger hidden js-list-value">
                                                            Not paid
                                        {/* <!--  (16 months late)  --> */}
                                                        </div>


                                                        <ul class="list-inline">

                                                            <li>
                                                                <span class="label label-danger" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Not paid"><i class="fa fa-exclamation-triangle"></i> FEB</span>
                                                            </li>

                                                            <li>
                                                                <span class="label label-danger" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Not paid"><i class="fa fa-exclamation-triangle"></i> MAR</span>
                                                            </li>

                                                            <li>
                                                                <span class="label label-danger" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Not paid"><i class="fa fa-exclamation-triangle"></i> APR</span>
                                                            </li>

                                                            <li>
                                                                <span class="label label-danger" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Not paid"><i class="fa fa-exclamation-triangle"></i> MAY</span>
                                                            </li>

                                                            <li>
                                                                <span class="label label-danger" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Not paid"><i class="fa fa-exclamation-triangle"></i> JUN</span>
                                                            </li>

                                                            <li>
                                                                <span class="label label-danger" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Not paid"><i class="fa fa-exclamation-triangle"></i> JUL</span>
                                                            </li>

                                                            <li>
                                                                <span class="label label-danger" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Not paid"><i class="fa fa-exclamation-triangle"></i> AUG</span>
                                                            </li>

                                                            <li>
                                                                <span class="label label-danger" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Not paid"><i class="fa fa-exclamation-triangle"></i> SEP</span>
                                                            </li>

                                                            <li>
                                                                <span class="label label-danger" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Not paid"><i class="fa fa-exclamation-triangle"></i> OCT</span>
                                                            </li>

                                                            <li>
                                                                <span class="label label-danger" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Not paid"><i class="fa fa-exclamation-triangle"></i> NOV</span>
                                                            </li>

                                                            <li>
                                                                <span class="label label-danger" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Not paid"><i class="fa fa-exclamation-triangle"></i> DEC</span>
                                                            </li>

                                                            <li>
                                                                <span class="label label-danger" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Not paid"><i class="fa fa-exclamation-triangle"></i> JAN</span>
                                                            </li>

                                                            <li>
                                                                <span class="label label-danger" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Not paid"><i class="fa fa-exclamation-triangle"></i> FEB</span>
                                                            </li>

                                                            <li>
                                                                <span class="label label-danger" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Not paid"><i class="fa fa-exclamation-triangle"></i> MAR</span>
                                                            </li>

                                                            <li>
                                                                <span class="label label-danger" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Not paid"><i class="fa fa-exclamation-triangle"></i> APR</span>
                                                            </li>

                                                            <li>
                                                                <span class="label label-danger" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Not paid"><i class="fa fa-exclamation-triangle"></i> MAY</span>
                                                            </li>

                                                        </ul>

                                                    </div>
                                                    <div class="clearfix">
                                                        <div class="pull-left list-avatar-col">
                                                            <span class="fa-stack fa-lg">
                                                                <i class="fa fa-calendar-o fa-stack-2x"></i>
                                                                <span class="fa icon-text fa-stack-1x">$</span>
                                                            </span>
                                                        </div>
                                                        <div class="pull-left">
                                                            <div class="list-title js-list-value">NO Name Agence</div>
                                                        </div>
                                                    </div>
                                                    <div class="list-label">
                                                        <i class="fa fa-home "></i> Room
                                </div>
                                                </div>
                                                <div class="list-col">
                                                    <div class="list-label clearfix">
                                                        <div class="pull-right">

                                                            <ul class="list-inline">
                                                                <li>

                                                                    <span class="label label-default"><i class="fa fa-envelope-o"></i> Rent notice</span>

                                                                </li>
                                                                <li>

                                                                    <span class="label label-default"><i class="fa fa-envelope-o"></i> Rental invoice</span>

                                                                </li>
                                                            </ul>

                                                        </div>
                                                    </div>
                                                    <div class="list-label clearfix">
                                                        <small class="pull-right">Payment</small>
                                                    </div>
                                                    <div class="list-payment-price text-right">
                                                        <span><span class="price-content"><span class="price-amount odometer" data-key="payment">$0.00</span></span>
                                                        </span>
                                                    </div>
                                                    <div class="list-label clearfix">
                                                        <div class="pull-left">Balance</div>
                                                        <div class="list-balance-price pull-right text-right">
                                                            <span class="price-content"><span class="price-amount odometer" data-key="newBalance">-$138,240.00</span></span>
                                                        </div>
                                                    </div>
                                                    <div data-toggle="tooltip" data-placement="right" class="list-comment-link" data-html="true" title="" name="display: none;" data-original-title=""><span class="glyphicon glyphicon-comment"></span></div>
                                                </div>
                                                <div class="list-selection-overlay"></div>
                                            </div>



                                            <div id="57015c0ca76d50970d6e1d6e" class="js-list-row list-row mycard" data-filter-values="RED HAT,notpaid" name="">
                                                <div class="list-col">
                                                    <div class="list-label">

                                                        <div class="text-danger hidden js-list-value">
                                                            Not paid
                                        {/* <!--  (16 months late)  --> */}
                                                        </div>


                                                        <ul class="list-inline">

                                                            <li>
                                                                <span class="label label-danger" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Not paid"><i class="fa fa-exclamation-triangle"></i> FEB</span>
                                                            </li>

                                                            <li>
                                                                <span class="label label-danger" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Not paid"><i class="fa fa-exclamation-triangle"></i> MAR</span>
                                                            </li>

                                                            <li>
                                                                <span class="label label-danger" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Not paid"><i class="fa fa-exclamation-triangle"></i> APR</span>
                                                            </li>

                                                            <li>
                                                                <span class="label label-danger" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Not paid"><i class="fa fa-exclamation-triangle"></i> MAY</span>
                                                            </li>

                                                            <li>
                                                                <span class="label label-danger" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Not paid"><i class="fa fa-exclamation-triangle"></i> JUN</span>
                                                            </li>

                                                            <li>
                                                                <span class="label label-danger" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Not paid"><i class="fa fa-exclamation-triangle"></i> JUL</span>
                                                            </li>

                                                            <li>
                                                                <span class="label label-danger" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Not paid"><i class="fa fa-exclamation-triangle"></i> AUG</span>
                                                            </li>

                                                            <li>
                                                                <span class="label label-danger" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Not paid"><i class="fa fa-exclamation-triangle"></i> SEP</span>
                                                            </li>

                                                            <li>
                                                                <span class="label label-danger" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Not paid"><i class="fa fa-exclamation-triangle"></i> OCT</span>
                                                            </li>

                                                            <li>
                                                                <span class="label label-danger" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Not paid"><i class="fa fa-exclamation-triangle"></i> NOV</span>
                                                            </li>

                                                            <li>
                                                                <span class="label label-danger" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Not paid"><i class="fa fa-exclamation-triangle"></i> DEC</span>
                                                            </li>

                                                            <li>
                                                                <span class="label label-danger" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Not paid"><i class="fa fa-exclamation-triangle"></i> JAN</span>
                                                            </li>

                                                            <li>
                                                                <span class="label label-danger" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Not paid"><i class="fa fa-exclamation-triangle"></i> FEB</span>
                                                            </li>

                                                            <li>
                                                                <span class="label label-danger" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Not paid"><i class="fa fa-exclamation-triangle"></i> MAR</span>
                                                            </li>

                                                            <li>
                                                                <span class="label label-danger" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Not paid"><i class="fa fa-exclamation-triangle"></i> APR</span>
                                                            </li>

                                                            <li>
                                                                <span class="label label-danger" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Not paid"><i class="fa fa-exclamation-triangle"></i> MAY</span>
                                                            </li>

                                                        </ul>

                                                    </div>
                                                    <div class="clearfix">
                                                        <div class="pull-left list-avatar-col">
                                                            <span class="fa-stack fa-lg">
                                                                <i class="fa fa-calendar-o fa-stack-2x"></i>
                                                                <span class="fa icon-text fa-stack-1x">$</span>
                                                            </span>
                                                        </div>
                                                        <div class="pull-left">
                                                            <div class="list-title js-list-value">AUCUNE AGENCE</div>
                                                        </div>
                                                    </div>
                                                    <div class="list-label">
                                                        <i class="fa fa-home "></i> Room
                                </div>
                                                </div>
                                                <div class="list-col">
                                                    <div class="list-label clearfix">
                                                        <div class="pull-right">

                                                            <ul class="list-inline">
                                                                <li>

                                                                    <span class="label label-default"><i class="fa fa-envelope-o"></i> Rent notice</span>

                                                                </li>
                                                                <li>

                                                                    <span class="label label-default"><i class="fa fa-envelope-o"></i> Rental invoice</span>

                                                                </li>
                                                            </ul>

                                                        </div>
                                                    </div>
                                                    <div class="list-label clearfix">
                                                        <small class="pull-right">Payment</small>
                                                    </div>
                                                    <div class="list-payment-price text-right">
                                                        <span><span class="price-content"><span class="price-amount odometer" data-key="payment">$0.00</span></span>
                                                        </span>
                                                    </div>
                                                    <div class="list-label clearfix">
                                                        <div class="pull-left">Balance</div>
                                                        <div class="list-balance-price pull-right text-right">
                                                            <span class="price-content"><span class="price-amount odometer" data-key="newBalance">-$72,960.00</span></span>
                                                        </div>
                                                    </div>
                                                    <div data-toggle="tooltip" data-placement="right" class="list-comment-link" data-html="true" title="" name="display: none;" data-original-title=""><span class="glyphicon glyphicon-comment"></span></div>
                                                </div>
                                                <div class="list-selection-overlay"></div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div id="right-menu-pane" class="col-xs-4">
                                    <div className="js-filterbar js-side-menu side-menu mycard active affix-top" data-id="rents-menu" style={{ width: "380px", opacity: "1", display: "block", transform: "translateX(0px)" }}>
                                        <h4>Period</h4>
                                        <button type="button" class="btn btn-default btn-block js-user-action js-rent-period" role="button">MAY 2019</button>
                                        <div class="js-month-picker month-picker">
                                            <div class="datepicker datepicker-inline">
                                                <div class="datepicker-days" name="display: none;">
                                                    <table class="table-condensed">
                                                        <thead>
                                                            <tr>
                                                                <th colspan="7" class="datepicker-title" name="display: none;"></th>
                                                            </tr>
                                                            <tr>
                                                                <th class="prev">«</th>
                                                                <th colspan="5" class="datepicker-switch">May 2019</th>
                                                                <th class="next">»</th>
                                                            </tr>
                                                            <tr>
                                                                <th class="dow">Su</th>
                                                                <th class="dow">Mo</th>
                                                                <th class="dow">Tu</th>
                                                                <th class="dow">We</th>
                                                                <th class="dow">Th</th>
                                                                <th class="dow">Fr</th>
                                                                <th class="dow">Sa</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td class="old day" data-date="1556409600000">28</td>
                                                                <td class="old day" data-date="1556496000000">29</td>
                                                                <td class="old day" data-date="1556582400000">30</td>
                                                                <td class="active day" data-date="1556668800000">1</td>
                                                                <td class="day" data-date="1556755200000">2</td>
                                                                <td class="day" data-date="1556841600000">3</td>
                                                                <td class="day" data-date="1556928000000">4</td>
                                                            </tr>
                                                            <tr>
                                                                <td class="day" data-date="1557014400000">5</td>
                                                                <td class="day" data-date="1557100800000">6</td>
                                                                <td class="day" data-date="1557187200000">7</td>
                                                                <td class="day" data-date="1557273600000">8</td>
                                                                <td class="day" data-date="1557360000000">9</td>
                                                                <td class="day" data-date="1557446400000">10</td>
                                                                <td class="day" data-date="1557532800000">11</td>
                                                            </tr>
                                                            <tr>
                                                                <td class="day" data-date="1557619200000">12</td>
                                                                <td class="day" data-date="1557705600000">13</td>
                                                                <td class="day" data-date="1557792000000">14</td>
                                                                <td class="day" data-date="1557878400000">15</td>
                                                                <td class="day" data-date="1557964800000">16</td>
                                                                <td class="day" data-date="1558051200000">17</td>
                                                                <td class="day" data-date="1558137600000">18</td>
                                                            </tr>
                                                            <tr>
                                                                <td class="day" data-date="1558224000000">19</td>
                                                                <td class="day" data-date="1558310400000">20</td>
                                                                <td class="day" data-date="1558396800000">21</td>
                                                                <td class="day" data-date="1558483200000">22</td>
                                                                <td class="day" data-date="1558569600000">23</td>
                                                                <td class="day" data-date="1558656000000">24</td>
                                                                <td class="day" data-date="1558742400000">25</td>
                                                            </tr>
                                                            <tr>
                                                                <td class="day" data-date="1558828800000">26</td>
                                                                <td class="day" data-date="1558915200000">27</td>
                                                                <td class="day" data-date="1559001600000">28</td>
                                                                <td class="day" data-date="1559088000000">29</td>
                                                                <td class="day" data-date="1559174400000">30</td>
                                                                <td class="day" data-date="1559260800000">31</td>
                                                                <td class="new day" data-date="1559347200000">1</td>
                                                            </tr>
                                                            <tr>
                                                                <td class="new day" data-date="1559433600000">2</td>
                                                                <td class="new day" data-date="1559520000000">3</td>
                                                                <td class="new day" data-date="1559606400000">4</td>
                                                                <td class="new day" data-date="1559692800000">5</td>
                                                                <td class="new day" data-date="1559779200000">6</td>
                                                                <td class="new day" data-date="1559865600000">7</td>
                                                                <td class="new day" data-date="1559952000000">8</td>
                                                            </tr>
                                                        </tbody>
                                                        <tfoot>
                                                            <tr>
                                                                <th colspan="7" class="today" name="display: none;">Today</th>
                                                            </tr>
                                                            <tr>
                                                                <th colspan="7" class="clear" name="display: none;">Clear</th>
                                                            </tr>
                                                        </tfoot>
                                                    </table>
                                                </div>
                                                <div class="datepicker-months" name="">
                                                    <table class="table-condensed">
                                                        <thead>
                                                            <tr>
                                                                <th colspan="7" class="datepicker-title" name="display: none;"></th>
                                                            </tr>
                                                            <tr>
                                                                <th class="prev">«</th>
                                                                <th colspan="5" class="datepicker-switch">2019</th>
                                                                <th class="next">»</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td colspan="7"><span class="month">Jan</span><span class="month">Feb</span><span class="month">Mar</span><span class="month">Apr</span><span class="month focused active">May</span><span class="month">Jun</span><span class="month">Jul</span>
                                                                    <span
                                                                        class="month">Aug</span><span class="month">Sep</span><span class="month">Oct</span><span class="month">Nov</span><span class="month">Dec</span></td>
                                                            </tr>
                                                        </tbody>
                                                        <tfoot>
                                                            <tr>
                                                                <th colspan="7" class="today" name="display: none;">Today</th>
                                                            </tr>
                                                            <tr>
                                                                <th colspan="7" class="clear" name="display: none;">Clear</th>
                                                            </tr>
                                                        </tfoot>
                                                    </table>
                                                </div>
                                                <div class="datepicker-years" name="display: none;">
                                                    <table class="table-condensed">
                                                        <thead>
                                                            <tr>
                                                                <th colspan="7" class="datepicker-title" name="display: none;"></th>
                                                            </tr>
                                                            <tr>
                                                                <th class="prev">«</th>
                                                                <th colspan="5" class="datepicker-switch">2010-2019</th>
                                                                <th class="next">»</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td colspan="7"><span class="year old">2009</span><span class="year">2010</span><span class="year">2011</span><span class="year">2012</span><span class="year">2013</span><span class="year">2014</span><span class="year">2015</span>
                                                                    <span
                                                                        class="year">2016</span><span class="year">2017</span><span class="year">2018</span><span class="year active focused">2019</span><span class="year new">2020</span></td>
                                                            </tr>
                                                        </tbody>
                                                        <tfoot>
                                                            <tr>
                                                                <th colspan="7" class="today" name="display: none;">Today</th>
                                                            </tr>
                                                            <tr>
                                                                <th colspan="7" class="clear" name="display: none;">Clear</th>
                                                            </tr>
                                                        </tfoot>
                                                    </table>
                                                </div>
                                                <div class="datepicker-decades" name="display: none;">
                                                    <table class="table-condensed">
                                                        <thead>
                                                            <tr>
                                                                <th colspan="7" class="datepicker-title" name="display: none;"></th>
                                                            </tr>
                                                            <tr>
                                                                <th class="prev">«</th>
                                                                <th colspan="5" class="datepicker-switch">2000-2090</th>
                                                                <th class="next">»</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td colspan="7"><span class="decade old">1990</span><span class="decade">2000</span><span class="decade active focused">2010</span><span class="decade">2020</span><span class="decade">2030</span><span class="decade">2040</span>
                                                                    <span
                                                                        class="decade">2050</span><span class="decade">2060</span><span class="decade">2070</span><span class="decade">2080</span><span class="decade">2090</span><span class="decade new">2100</span></td>
                                                            </tr>
                                                        </tbody>
                                                        <tfoot>
                                                            <tr>
                                                                <th colspan="7" class="today" name="display: none;">Today</th>
                                                            </tr>
                                                            <tr>
                                                                <th colspan="7" class="clear" name="display: none;">Clear</th>
                                                            </tr>
                                                        </tfoot>
                                                    </table>
                                                </div>
                                                <div class="datepicker-centuries" name="display: none;">
                                                    <table class="table-condensed">
                                                        <thead>
                                                            <tr>
                                                                <th colspan="7" class="datepicker-title" name="display: none;"></th>
                                                            </tr>
                                                            <tr>
                                                                <th class="prev">«</th>
                                                                <th colspan="5" class="datepicker-switch">2000-2900</th>
                                                                <th class="next">»</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td colspan="7"><span class="century old">1900</span><span class="century active focused">2000</span><span class="century">2100</span><span class="century">2200</span><span class="century">2300</span><span class="century">2400</span>
                                                                    <span
                                                                        class="century">2500</span><span class="century">2600</span><span class="century">2700</span><span class="century">2800</span><span class="century">2900</span><span class="century new">3000</span></td>
                                                            </tr>
                                                        </tbody>
                                                        <tfoot>
                                                            <tr>
                                                                <th colspan="7" class="today" name="display: none;">Today</th>
                                                            </tr>
                                                            <tr>
                                                                <th colspan="7" class="clear" name="display: none;">Clear</th>
                                                            </tr>
                                                        </tfoot>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>

                                        <h4>Status</h4>
                                        <button type="button" class="btn btn-default btn-block js-default-filter js-user-action active" data-id="list-filter" data-toggle="button" role="button">
                                            <div class="clearfix">
                                                <div class="pull-left">
                                                    All <span class="js-all-filter-label text-muted">(4)</span>
                                                </div>
                                                <div class="pull-right">
                                                    <span class="text-right js-total-topay">$428,160.00</span>
                                                </div>
                                            </div>
                                        </button>
                                        <button type="button" class="btn btn-default btn-block js-user-action" data-id="list-filter" data-value="paid,partialypaid" data-toggle="button" role="button">
                                            <div class="clearfix">
                                                <div class="pull-left">
                                                    Paid <span class="js-paid-filter-label text-muted">(0)</span>
                                                </div>
                                                <div class="pull-right">
                                                    <span class="js-total-paid text-success strong">$0.00</span>
                                                </div>
                                            </div>
                                        </button>
                                        <button type="button" class="btn btn-default btn-block js-user-action" data-id="list-filter" data-value="notpaid" data-toggle="button" role="button">
                                            <div class="clearfix">
                                                <div class="pull-left">
                                                    Not paid <span class="js-not-paid-filter-label text-muted">(4)</span>
                                                </div>
                                                <div class="pull-right">
                                                    <span class="js-total-notpaid text-danger strong">$428,160.00</span>
                                                </div>
                                            </div>
                                        </button>
                                    </div>

                                    <div class="js-side-menu side-menu mycard" data-id="rents-selection-menu" name="width: 380px;">
                                        <h4 class="js-rent-period">MAY 2019</h4>
                                        <button type="button" class="btn btn-default btn-block js-user-action js-cancel-selection" role="button"><i class="fa fa-reply"></i> Cancel selection</button>
                                        <button type="button" data-id="list-action-pay-rent" class="btn btn-default btn-block js-user-action js-only-mono-selection" role="button"><i class="fa fa-credit-mycard"></i> Payment</button>
                                        <button type="button" data-id="list-action-rents-history" class="btn btn-default btn-block js-user-action js-only-mono-selection" role="button"><i class="fa fa-history"></i> Timeline rents</button>
                                        <button type="button" data-id="list-action-print" class="btn btn-default btn-block js-user-action" role="button"><i class="fa fa-print"></i> Print</button>
                                        <button type="button" data-id="list-action-email" class="btn btn-default btn-block js-user-action" role="button"><i class="fa fa-envelope-o"></i> Email</button>
                                        <h4 class="js-list-selection-menu-label"></h4>
                                        <div class="js-list-selected-elements list-group list-group-selection"></div>
                                    </div>

                                    <div class="js-side-menu side-menu mycard" data-id="pay-rent-edit-menu" name="width: 380px;">
                                        <button type="button" class="btn btn-default btn-block js-user-action js-cancel-form" role="button"><i class="fa fa-reply"></i> Cancel</button>
                                        <button data-id="list-action-save-form" type="button" class="btn btn-default btn-block js-user-action" role="button"><i class="fa fa-save"></i> Save</button>
                                        <h4 class="js-list-selection-menu-label"></h4>
                                        <div class="js-list-selected-elements fixed list-group"></div>
                                    </div>

                                    <div class="js-side-menu side-menu mycard" data-id="pay-rent-view-menu" name="width: 380px;">
                                        <button type="button" class="btn btn-default btn-block js-user-action js-cancel-form" role="button"><i class="fa fa-reply"></i> Cancel</button>
                                        <button type="button" data-id="list-action-edit-pay-rent" class="btn btn-default btn-block js-user-action" role="button"><i class="fa fa-pencil-square-o"></i> Edit</button>
                                        <h4 class="js-list-selection-menu-label"></h4>
                                        <div class="js-list-selected-elements fixed list-group"></div>
                                    </div>

                                    <div class="js-side-menu side-menu mycard" data-id="rents-history-menu" data-target="#rents-history" name="width: 380px;">
                                        <button type="button" class="btn btn-default btn-block js-user-action js-cancel-form" role="button"><i class="fa fa-reply"></i> Cancel</button>
                                    </div>

                                    <div class="js-side-menu side-menu mycard" data-id="print-doc-selector-menu" data-target="#print-doc-selector" name="width: 380px;">
                                        <h4 class="js-rent-period">MAY 2019</h4>
                                        <button type="button" class="btn btn-default btn-block js-user-action js-cancel-form" role="button"><i class="fa fa-reply"></i> Cancel</button>
                                        <h4 class="title-mycard js-list-selection-menu-label"></h4>
                                        <div class="js-list-selected-elements fixed list-group"></div>
                                    </div>

                                    <div class="js-side-menu side-menu mycard" data-id="email-doc-selector-menu" data-target="#email-doc-selector" name="width: 380px;">
                                        <h4 class="js-rent-period">MAY 2019</h4>
                                        <button type="button" class="btn btn-default btn-block js-user-action js-cancel-form" role="button"><i class="fa fa-reply"></i> Cancel</button>
                                        <h4 class="title-mycard js-list-selection-menu-label"></h4>
                                        <div class="js-list-selected-elements fixed list-group"></div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>


                </div>
            </div>
        )
    }
}
