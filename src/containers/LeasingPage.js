import React, { Component } from 'react'
import '../assets/css/index.css';
import Header from '../components/Header';

export default class LeasingPage extends Component {
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
                                    <div id="occupants" class="list">
                                        <div data-id="occupant-form" class="js-sheet sheet card">
                                            <form id="occupant-form" class="grid-form" role="form" novalidate="novalidate">
                                                {/* <!-- HANDLEBAR TEMPLATES -->
                <script id="occupant-property-selector-template" type="text/x-handlebars-template">
                    {{#each properties}} {{#if available}}
                    <option value="{{_id}}">{{name}} ({{i18next key="Rent with CAM fees:" amount=priceWithExpense}})</option>
                    {{else}}
                    <option value="{{_id}}" {{#if notSelectable}}disabled{{/if}}>{{name}} ({{i18next key="Rent with CAM fees tenanted by" amount=priceWithExpense name=occupantLabel}})</option>
                    {{/if}} {{/each}}
                </script>
                <!-- /HANDLEBAR TEMPLATES --> */}
                                                <div class="well well-sm form-error" name="display: none;"><i class="fa fa-exclamation-triangle"></i> <span class="js-form-error-message"></span></div>
                                                <input type="hidden" id="_id" name="_id"/>>
                                                    <div class="js-lease-state alert alert-danger hidden" role="alert">
                                                        <div class="row">
                                                            <div class="col-xs-6">Lease terminated</div>
                                                            <div class="js-occupant-form-termination-date col-xs-6 text-right"></div>
                                                        </div>
                                                    </div>
                                                    <h2 id="occupantNameLabel" class="page-header">Tenant</h2>
                                                    <div class="row">
                                                        <div class="col-xs-12">
                                                            <label>Tenant information</label>
                                                        </div>
                                                        <div class="col-xs-12">
                                                            <div class="row">
                                                                <div class="col-xs-12">
                                                                    <div class="form-group">
                                                                        <label class="control-label">Tenant</label>
                                                                        <select id="isCompany" class="form-control" name="isCompany">
                                                                            <option value="false">Individual</option>
                                                                            <option value="true">Company</option>
                                                                        </select>
                                                                    </div>
                                                                </div>

                                                                <div class="col-xs-12">
                                                                    <div class="form-group js-company-fields">
                                                                        <label class="control-label">Company name</label>
                                                                        <input type="text" id="company" class="form-control" name="company" />>
                                </div>
                                                                </div>

                                                                <div class="col-xs-12">
                                                                    <div class="form-group js-company-fields">
                                                                        <label class="control-label">Business entity</label>
                                                                        <input type="text" id="legalForm" class="form-control" name="legalForm" />>
                                </div>
                                                                </div>

                                                                <div class="col-xs-12">
                                                                    <div class="form-group js-company-fields">
                                                                        <label class="control-label">UIN</label>
                                                                        <input type="text" id="siret" class="form-control" name="siret" />>
                                </div>
                                                                </div>

                                                                <div class="col-xs-12">
                                                                    <div class="form-group js-company-fields">
                                                                        <label class="control-label" for="capital">Ownership equity</label>
                                                                        <input type="text" id="capital" class="form-control" name="capital" />>
                                </div>
                                                                </div>
                                                                <div class="col-xs-12">
                                                                    <div class="form-group">
                                                                        <label id="manager-label" class="control-label">Effective manager (first and last name)</label>
                                                                        <input type="text" id="manager" class="form-control" name="manager" />>
                                </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <h2 class="page-header">Lease contract</h2>
                                                    <div class="row">
                                                        <div class="col-xs-12">
                                                            <label>Complete the fields to specify the terms of the agreement with the tenant</label>
                                                        </div>
                                                        <div class="col-xs-12">
                                                            <div class="row">
                                                                <div class="col-xs-12">
                                                                    <div class="form-group">
                                                                        <label class="control-label">Contract</label>
                                                                        <select id="contract" class="form-control" name="contract">
                                                                            <option value="residency">Residence lease contract 9 years</option>
                                                                            <option value="369">Business lease contract 3,6,9 years</option>
                                                                            <option value="custom">Short business lease contract</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div class="col-xs-6">
                                                                    <div class="form-group">
                                                                        <label class="control-label">Start date</label>
                                                                        <input id="beginDate" class="form-control" name="beginDate" />>
                                </div>
                                                                </div>
                                                                <div class="col-xs-6">
                                                                    <div class="form-group">
                                                                        <label class="control-label">End date</label>
                                                                        <input id="endDate" class="form-control" name="endDate" />>
                                </div>
                                                                </div>
                                                                <div class="col-xs-12">
                                                                    <div class="form-group">
                                                                        <label class="control-label">Deposit amount</label>
                                                                        <input type="number" id="guaranty" min="0" class="form-control" name="guaranty" />>
                                </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div id="termination-row">
                                                        <h2 class="page-header">Lease termination</h2>
                                                        <div class="row">
                                                            <div class="col-xs-12">
                                                                <label>Indicate the effective date of the lease termination</label>
                                                            </div>
                                                            <div class="col-xs-12">
                                                                <div class="row">
                                                                    <div class="col-xs-12">
                                                                        <div class="form-group">
                                                                            <label class="control-label">Date</label>
                                                                            <input id="terminationDate" class="form-control" name="terminationDate" />>
                                    </div>
                                                                    </div>
                                                                    <div class="col-xs-12">
                                                                        <div class="form-group">
                                                                            <label class="control-label">Amount of deposit refund</label>
                                                                            <input type="number" id="guarantyPayback" min="0" class="form-control" name="guarantyPayback" />>
                                    </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <h2 class="page-header">Leased properties</h2>
                                                    <div class="row">
                                                        <div class="col-xs-12">
                                                            <label>Select properties to rent</label>
                                                        </div>
                                                        <div class="col-xs-12">
                                                            <div id="properties" class="js-js-form-rows">
                                                                <div class="row js-form-row js-master-form-row">
                                                                    <div class="col-xs-12">
                                                                        <div class="form-group">
                                                                            <label class="control-label">Property</label>
                                                                            <select id="propertyId_0" class="available-properties js-form-field-not-editable form-control" name="propertyId_0"></select>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-xs-6">
                                                                        <div class="form-group">
                                                                            <label class="control-label">Entry date</label>
                                                                            <input id="entryDate_0" class="form-control" name="entryDate_0" />>
                                    </div>
                                                                    </div>
                                                                    <div class="col-xs-6">
                                                                        <div class="form-group">
                                                                            <label class="control-label">Exit date</label>
                                                                            <input id="exitDate_0" class="form-control" name="exitDate_0" />
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-xs-12 clearfix">
                                                                        <div class="pull-right js-btn-form-remove-row btn btn-sm" name="display: none;">
                                                                            <i class="fa fa-trash-o"></i> Remove
                                    </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <span id="btn-add-property" class="btn btn-default"><i class="fa fa-plus"></i> Add a property</span>
                                                        </div>
                                                    </div>

                                                    <h2 class="page-header">Contacts</h2>
                                                    <div class="row">
                                                        <div class="col-xs-12">
                                                            <label>People to contact for all administrative procedures (request of unpaid rents, missing mandatory documents...)</label>
                                                        </div>
                                                        <div class="col-xs-12">
                                                            <div id="contacts" class="js-js-form-rows">
                                                                <div class="row js-form-row js-master-form-row">
                                                                    <div class="col-xs-12">
                                                                        <div class="form-group">
                                                                            <label class="control-label">First and last name</label>
                                                                            <input type="text" id="contact_0" class="form-control" name="contact_0" />>
                                    </div>
                                                                    </div>
                                                                    <div class="col-xs-6">
                                                                        <div class="form-group">
                                                                            <label class="control-label">Phone number</label>
                                                                            <input type="tel" id="phone_0" class="form-control" name="phone_0" />>
                                    </div>
                                                                    </div>
                                                                    <div class="col-xs-6">
                                                                        <div class="form-group">
                                                                            <label class="control-label">E-mail</label>
                                                                            <input type="email" id="email_0" class="form-control" name="email_0" />>
                                    </div>
                                                                    </div>
                                                                    <div class="col-xs-12 clearfix">
                                                                        <div class="pull-right js-btn-form-remove-row btn btn-sm" name="display: none;">
                                                                            <i class="fa fa-trash-o"></i> Remove
                                    </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <span id="btn-add-contact" class="btn btn-default btn-sm"><i class="fa fa-plus"></i> Add a contact</span>
                                                        </div>
                                                    </div>

                                                    <h2 class="page-header">Billing</h2>
                                                    <div class="row">
                                                        <div class="col-xs-12">
                                                            <label>Specify the elements for the establishment of invoices and rent notices</label>
                                                        </div>
                                                        <div class="col-xs-12">
                                                            <div class="row">
                                                                <div class="col-xs-12">
                                                                    <div class="form-group">
                                                                        <label class="control-label">Customer Identification Number</label>
                                                                        <input type="text" id="reference" class="form-control" name="reference" />>
                                </div>
                                                                </div>
                                                                <div class="col-xs-4">
                                                                    <div class="form-group">
                                                                        <label class="control-label">Subject to VAT</label>
                                                                        <select id="isVat" class="js-form-field-not-editable form-control" name="isVat">
                                                                            <option value="true">Yes</option>
                                                                            <option value="false">No</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div class="col-xs-8 js-occupant-form-vatratio">
                                                                    <div class="form-group">
                                                                        <label class="control-label">VAT ratio in %</label>
                                                                        <input type="number" min="0" max="100" id="vatRatio" class="js-form-field-not-editable form-control" name="vatRatio" />>
                                </div>
                                                                </div>
                                                                <div class="col-xs-12">
                                                                    <div class="form-group">
                                                                        <label class="control-label">Billing address</label>
                                                                        <input type="text" id="street1" class="form-control" name="street1" />>
                                </div>
                                                                </div>
                                                                <div class="col-xs-12">
                                                                    <div class="form-group">
                                                                        <input type="text" id="street2" class="form-control" name="street2" />>
                                </div>
                                                                </div>
                                                                <div class="col-xs-4">
                                                                    <div class="form-group">
                                                                        <label class="control-label">ZIP code</label>
                                                                        <input type="text" id="zipCode" class="form-control" name="zipCode" />>
                                </div>
                                                                </div>
                                                                <div class="col-xs-8">
                                                                    <div class="form-group">
                                                                        <label class="control-label">City</label>
                                                                        <input type="text" id="city" class="form-control" name="city" />>
                                </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <h2 class="page-header">Discount</h2>
                                                    <div class="row">
                                                        <div class="col-xs-12">
                                                            <label></label>
                                                        </div>
                                                        <div class="col-xs-12">
                                                            <div class="form-group">
                                                                <label class="control-label">Amount without VAT</label>
                                                                <input type="number" id="discount" min="0" class="form-control" name="discount" />>
                        </div>
                                                        </div>
                                                    </div>
                                                    <div class="well well-sm form-error" name="display: none;"><i class="fa fa-exclamation-triangle"></i> <span class="js-form-error-message"></span></div>
            </form>

        </div>

                                            <div data-id="contract-documents-form" class="js-sheet sheet card">
                                                <form id="contract-documents-form" role="form" novalidate="novalidate">
                                                    <div class="well well-sm form-error" name="display: none;"><i class="fa fa-exclamation-triangle"></i> <span class="js-form-error-message"></span></div>
                                                    <input type="hidden" id="_id" class="" name="_id" />>
                <h2 id="occupantNameLabel" class="page-header"></h2>
                                                    <div class="row">
                                                        <div class="col-xs-12">
                                                            <label>Documents</label>
                                                        </div>
                                                        <div class="col-xs-12">
                                                            <div id="documents" class="js-js-form-rows">
                                                                <div class="row js-form-row js-master-form-row">
                                                                    <div class="col-xs-12">
                                                                        <div class="form-group">
                                                                            <label class="control-label">Label</label>
                                                                            <input type="text" id="name_0" class="form-control" name="name_0" />>
                                    </div>
                                                                    </div>
                                                                    <div class="col-xs-12">
                                                                        <div class="form-group">
                                                                            <label class="control-label">Expiration date</label>
                                                                            <input type="text" id="expirationDate_0" class="form-control" name="expirationDate_0" />>
                                    </div>
                                                                    </div>
                                                                    <div class="col-xs-12 clearfix">
                                                                        <div class="pull-right js-btn-form-remove-row btn btn-sm">
                                                                            <i class="fa fa-trash-o"></i> Remove
                                    </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <span id="btn-add-document" class="btn btn-default btn-sm"><i class="fa fa-plus"></i> Add</span>
                                                        </div>
                                                    </div>
                                                    <div class="well well-sm form-error" name="display: none;"><i class="fa fa-exclamation-triangle"></i> <span class="js-form-error-message"></span></div>
                                                </form>

                                            </div>

                                            <div data-id="invoices" class="js-sheet sheet card">
                                                <h2 class="page-header">Rental invoices</h2>
                                                <script id="occupant-invoices-template" type="text/x-handlebars-template">
                                                    {/* {{#each years}}
                <a href="#" class="h3 page-header js-user-action" data-id="invoice-link" data-occupant-id="{{occupantId}}" data-year="{{year}}">{{year}}</a>
                <div class="list-group">
                    {{#each months}}
                    <a href="#" class="list-group-item js-user-action" data-id="invoice-link" data-occupant-id="{{occupantId}}" data-month="{{month}}" data-year="{{year}}">
                    {{formatMonth month}} <span class="text-muted">({{i18next key='Rent'}} {{formatMoney totalToPay}})</span>
                    <span class="pull-right">{{formatMoney payment}}</span>
                </a> {{/each}}
                </div>
                {{/each}} */}
                                                </script>

                                                <div id="occupant-invoices"></div>

                                            </div>

                                            <div data-id="rents-history" class="js-sheet sheet card">
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
                                                        {/* <td class="visible-xs visible-sm">{month}/{{ year }}</td>
                                                        <td class="hidden-xs hidden-sm">{{ year }}</td>
                                                        <td class="hidden-xs hidden-sm">{{ month }}</td>
                                                        <td class="hidden-xs hidden-sm text-right">{{ vatRatio }}</td>
                                                        <td class="text-right">{{ totalToPay }}</td>
                                                        <td class="text-right txthighlight">{{ emptyForZero=true}}{{#if paymentType}}<br>{{paymentType paymentType}} {{#if paymentReference}}{{i18next key='#' number=paymentReference}}{{/if}}{{/if}}{{#if paymentDate}}<br>{{i18next key='Paid date' date=paymentDate}}{{/if}}</td> */}
                                                        {/* <td class="hidden-xs hidden-sm txtstatus text-left {{status}}">{{ paymentStatus }}</td> */}
                                                    </tr>
                                                </script>

                                                <div id="history-rents-table"></div>

                                            </div>

                                            <div data-id="print-doc-selector" class="js-sheet sheet">
                                                <div class="list-groupmycard">
                                                    <a id="printcontract" href="#" class="list-group-item">
                                                        <h4 class="list-group-item-heading"><i class="fa fa-file-text-o"></i> Business lease contract</h4>
                                                        <p class="list-group-item-text">Business lease contract terminable after 3,6,9 years</p>
                                                    </a>
                                                    <a id="printcustomcontract" href="#" class="list-group-item">
                                                        <h4 class="list-group-item-heading"><i class="fa fa-file-text-o"></i> Short business lease contract</h4>
                                                        <p class="list-group-item-text">Short business lease contract maximum duration 2 years</p>
                                                    </a>
                                                    <a id="printdomcontract" href="#" class="list-group-item">
                                                        <h4 class="list-group-item-heading"><i class="fa fa-file-text-o"></i> Domiciliation contract</h4>
                                                        <p class="list-group-item-text">Domiciliation contract (mailbox rental)</p>
                                                    </a>
                                                    <a id="printofficechecklist" href="#" class="list-group-item">
                                                        <h4 class="list-group-item-heading"><i class="fa fa-file-text-o"></i> Inventory</h4>
                                                        <p class="list-group-item-text">Print and fill this form before giving the keys to the tenant</p>
                                                    </a>
                                                    <a id="printguarantycertificate" href="#" class="list-group-item">
                                                        <h4 class="list-group-item-heading"><i class="fa fa-file-text-o"></i> Certificate of deposit</h4>
                                                        <p class="list-group-item-text">Letter that certifies the payment of deposit by the tenant</p>
                                                    </a>
                                                    <a id="printguarantyrequest" href="#" class="list-group-item">
                                                        <h4 class="list-group-item-heading"><i class="fa fa-envelope-o"></i> Request of certificate of deposit</h4>
                                                        <p class="list-group-item-text">Letter for requesting the payment of the deposit</p>
                                                    </a>
                                                    <a id="printinsurancerequest" href="#" class="list-group-item">
                                                        <h4 class="list-group-item-heading"><i class="fa fa-envelope-o"></i> Request of insurance certificate</h4>
                                                        <p class="list-group-item-text">Letter for requesting the insurance certificate - evidence of insurance</p>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="js-list-content">
                                                <div id="57015b4da76d50970d6e1d6d" class="js-list-row list-row mycard" data-filter-values="AMAZON ONLINE,inprogress" name="">
                                                    <div class="list-col">

                                                        <div class="list-label js-list-value text-success hidden-xs">Lease in progress</div>

                                                        <div class="clearfix">
                                                            <div class="list-avatar-col pull-left">

                                                                <i class="fa fa-group fa-2x"></i>

                                                            </div>
                                                            <div class="list-title js-list-value pull-left">
                                                                AMAZON ONLINE
                        </div>
                                                        </div>
                                                    </div>
                                                    <div class="list-col">
                                                        <div>Lease contract</div>
                                                        <div>

                                                            01/01/2016 <i class="fa fa-long-arrow-right"></i> 12/31/2024
                                    
                    </div>
                                                        <div>

                                                            <div><i class="fa fa-home "></i> Room</div>

                                                        </div>
                                                    </div>
                                                    <div class="list-selection-overlay"></div>
                                                </div>



                                                <div id="57015a53a76d50970d6e1d6c" class="js-list-row list-row mycard" data-filter-values="GOOGLE FRANCE,inprogress" name="">
                                                    <div class="list-col">

                                                        <div class="list-label js-list-value text-success hidden-xs">Lease in progress</div>

                                                        <div class="clearfix">
                                                            <div class="list-avatar-col pull-left">

                                                                <i class="fa fa-group fa-2x"></i>

                                                            </div>
                                                            <div class="list-title js-list-value pull-left">
                                                                GOOGLE FRANCE
                        </div>
                                                        </div>
                                                    </div>
                                                    <div class="list-col">
                                                        <div>Lease contract</div>
                                                        <div>

                                                            01/01/2016 <i class="fa fa-long-arrow-right"></i> 12/31/2024
                                    
                    </div>
                                                        <div>

                                                            <div><i class="fa fa-home "></i> Room</div>

                                                        </div>
                                                    </div>
                                                    <div class="list-selection-overlay"></div>
                                                </div>



                                                <div id="57015ea5a76d50970d6e1d6f" class="js-list-row list-row mycard" data-filter-values="MOZILLA Corporation,inprogress" name="">
                                                    <div class="list-col">

                                                        <div class="list-label js-list-value text-success hidden-xs">Lease in progress</div>

                                                        <div class="clearfix">
                                                            <div class="list-avatar-col pull-left">

                                                                <i class="fa fa-group fa-2x"></i>

                                                            </div>
                                                            <div class="list-title js-list-value pull-left">
                                                                MOZILLA Corporation
                        </div>
                                                        </div>
                                                    </div>
                                                    <div class="list-col">
                                                        <div>Lease contract</div>
                                                        <div>

                                                            01/01/2016 <i class="fa fa-long-arrow-right"></i> 12/31/2024
                                    
                    </div>
                                                        <div>

                                                            <div><i class="fa fa-home "></i> Room</div>

                                                        </div>
                                                    </div>
                                                    <div class="list-selection-overlay"></div>
                                                </div>



                                                <div id="57015c0ca76d50970d6e1d6e" class="js-list-row list-row mycard" data-filter-values="RED HAT,inprogress" name="">
                                                    <div class="list-col">

                                                        <div class="list-label js-list-value text-success hidden-xs">Lease in progress</div>

                                                        <div class="clearfix">
                                                            <div class="list-avatar-col pull-left">

                                                                <i class="fa fa-group fa-2x"></i>

                                                            </div>
                                                            <div class="list-title js-list-value pull-left">
                                                                RED HAT
                        </div>
                                                        </div>
                                                    </div>
                                                    <div class="list-col">
                                                        <div>Lease contract</div>
                                                        <div>

                                                            01/01/2016 <i class="fa fa-long-arrow-right"></i> 12/31/2024
                                    
                    </div>
                                                        <div>

                                                            <div><i class="fa fa-home "></i> Room</div>

                                                        </div>
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
