import React, { Component } from 'react'
import TopHeader from '../components/TopHeader';
import '../assets/css/index.css';
import Footer from '../components/Footer';

export default class OwnerPage extends Component {
    render() {
        return (
            <div>
                <TopHeader />
                <div style={{ marginTop: "100px" }}></div>
                <div class="js-view-container" name="visibility: visible; opacity: 1;">

                    <div id="view-owner" class="view">
                        <div class="container">
                            <div class="row">
                                <div class="col-xs-8">
                                    <div class="mycard">
                                        <form id="owner-form" role="form" novalidate="novalidate">
                                            <div class="well well-sm form-error" name="display: none;"><i class="fa fa-exclamation-triangle"></i> <span class="js-form-error-message"></span></div>
                                            <input type="hidden" id="_id" name="_id" value="56f665dd3d311a9813bfeee7" readonly="readonly" disabled="disabled" class="uneditable-input" />

                                            <h2 class="page-header">Owner</h2>
                                            <div class="row">
                                                <div class="col-xs-12">
                                                    <label>Landloard information</label>
                                                </div>
                                                <div class="col-xs-12">
                                                    <div class="form-group">
                                                        <label class="control-label">Landloard</label>
                                                        <select id="isCompany" class="form-control uneditable-input" readonly="readonly" disabled="disabled" name="isCompany">
                                                            <option value="false">Individual</option>
                                                            <option value="true">Company</option>
                                                        </select>
                                                    </div>
                                                    <div class="form-group js-company-fields" name="display: none;">
                                                        <label class="control-label" for="company">Company name</label>
                                                        <input type="text" id="company" class="form-control uneditable-input" readonly="readonly" disabled="disabled" name="company" />
                                                    </div>
                                                    <div class="form-group js-company-fields" name="display: none;">
                                                        <label class="control-label" for="legalForm">Business entity</label>
                                                        <input type="text" id="legalForm" class="form-control uneditable-input" readonly="readonly" disabled="disabled" name="legalForm" />
                                                    </div>
                                                    <div class="form-group js-company-fields" name="display: none;">
                                                        <label class="control-label" for="siret">UIN</label>
                                                        <input type="text" id="siret" class="form-control uneditable-input" readonly="readonly" disabled="disabled" name="siret" />
                                                    </div>
                                                    <div class="form-group js-company-fields" name="display: none;">
                                                        <label class="control-label" for="capital">Ownership equity</label>
                                                        <input type="text" id="capital" class="form-control uneditable-input" readonly="readonly" disabled="disabled" name="capital" />
                                                    </div>
                                                    <div class="form-group js-company-fields" name="display: none;">
                                                        <label class="control-label" for="vatNumber">VAT Identification number</label>
                                                        <input type="text" id="vatNumber" class="form-control uneditable-input" readonly="readonly" disabled="disabled" name="vatNumber" />
                                                    </div>
                                                    <div class="form-group">
                                                        <label id="manager-label" class="control-label" for="manager">First and last name</label>
                                                        <input type="text" id="manager" class="form-control uneditable-input" readonly="readonly" disabled="disabled" name="manager" />
                                                    </div>
                                                </div>
                                            </div>

                                            <h2 class="page-header">Address</h2>
                                            <div class="row">
                                                <div class="col-xs-12">
                                                    <label>Address where invoices and rent notices will be sent</label>
                                                </div>
                                                <div class="col-xs-12">
                                                    <div class="form-group">
                                                        <label class="control-label">Address</label>
                                                        <input type="text" id="street1" class="form-control uneditable-input" readonly="readonly" disabled="disabled" name="street1" />
                                                    </div>
                                                    <div class="form-group">
                                                        <input type="text" id="street2" class="form-control uneditable-input" readonly="readonly" disabled="disabled" name="street2" />
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-xs-4">
                                                            <div class="form-group">
                                                                <label class="control-label">ZIP code</label>
                                                                <input type="text" id="zipCode" class="form-control uneditable-input" readonly="readonly" disabled="disabled" name="zipCode" />
                                                            </div>
                                                        </div>
                                                        <div class="col-xs-8">
                                                            <div class="form-group">
                                                                <label class="control-label">City</label>
                                                                <input type="text" id="city" class="form-control uneditable-input" readonly="readonly" disabled="disabled" name="city" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <h2 class="page-header">Contact</h2>
                                            <div class="row">
                                                <div class="col-xs-12">
                                                    <label>Contact person for all administrative procedures (payment of rents, claims ...)</label>
                                                </div>
                                                <div class="col-xs-12">
                                                    <div class="form-group">
                                                        <label class="control-label">First and last name</label>
                                                        <input type="text" id="contact" class="form-control uneditable-input" readonly="readonly" disabled="disabled" name="contact" />
                                                    </div>
                                                </div>
                                                <div class="col-xs-6">
                                                    <div class="form-group">
                                                        <label class="control-label">Phone number</label>
                                                        <input type="tel" id="phone1" class="form-control uneditable-input" readonly="readonly" disabled="disabled" name="phone1" />
                                                    </div>
                                                </div>
                                                <div class="col-xs-6">
                                                    <div class="form-group">
                                                        <label class="control-label">Phone number</label>
                                                        <input type="tel" id="phone2" class="form-control uneditable-input" readonly="readonly" disabled="disabled" name="phone2" />
                                                    </div>
                                                </div>
                                                <div class="col-xs-12">
                                                    <div class="form-group">
                                                        <label class="control-label">E-mail</label>
                                                        <input type="email" id="email" class="form-control uneditable-input" readonly="readonly" disabled="disabled" name="email" />
                                                    </div>
                                                </div>
                                            </div>

                                            <h2 class="page-header">Banking establishment</h2>
                                            <div class="row">
                                                <div class="col-xs-12">
                                                    <label>Bank on which payments shall be made</label>
                                                </div>
                                                <div class="col-xs-12">
                                                    <div class="form-group">
                                                        <label class="control-label" for="vatNumber">Bank name</label>
                                                        <input type="text" id="bank" class="form-control uneditable-input" readonly="readonly" disabled="disabled" name="bank" />
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="control-label" for="vatNumber">IBAN</label>
                                                        <input type="text" id="rib" class="form-control uneditable-input" readonly="readonly" disabled="disabled" name="rib" />>
            </div>
                                                </div>
                                            </div>

                                            <div class="well well-sm form-error" name="display: none;"><i class="fa fa-exclamation-triangle"></i> <span class="js-form-error-message"></span></div>
                                        </form>

                                    </div>

                                </div>

                                <div id="right-menu-pane" class="col-xs-4">
                                    <div class="js-side-menu side-menu mycard active affix-top" data-id="owner-menu" style={{ width: "380px", opacity: "1", display: "block", transform: "translateX(0px)" }}>
                                        <button type="button" data-id="edit-owner" class="btn btn-default btn-block js-user-action js-only-mono-selection"><i class="fa fa-pencil-square-o"></i> Search</button>
                                    </div>

                                    <div class="js-side-menu side-menu mycard" data-id="owner-form-menu" data-target="#owner-form" name="width: 380px;">
                                        <button type="button" class="btn btn-default btn-block js-user-action js-cancel-form" role="button"><i class="fa fa-reply"></i> Cancel</button>
                                        <button type="button" class="btn btn-default btn-block js-user-action" data-id="save-form"><i class="fa fa-save"></i> Save</button>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                </div>
                <Footer></Footer>
            </div>
        )
    }
}
