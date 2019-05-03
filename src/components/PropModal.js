import React, { Component } from 'react';
import '../assets/css/formStyle.css'

export default class PropModal extends Component {

    componentDidMount() {
        jQuery(document).ready(() => {
            $('#steps-uid-0-p-1').show();
            $('#steps-uid-0-p-2').show();
            // $(function () {
            //     function e(e) {
            //         $("[data-form='#" + e + "']").fadeIn().removeClass("ignore").find("input").removeAttr("disabled")
            //     }

            //     function i(e) {
            //         $("[data-form='#" + e + "']").fadeOut().addClass("ignore").find("input").attr("disabled", "disabled")
            //     }
            //     var t = $(".form-step");
            //     t.steps({
            //         headerTag: "h4",
            //         bodyTag: "section",
            //         stepsContainerTag: "div",
            //         transitionEffect: "fade",
            //         labels: {
            //             finish: "Submit",
            //             next: "Next",
            //             previous: "Prev",
            //             loading: "Loading ..."
            //         }
            //     })
            // });
        })
    }

    render() {
        return (
            <div>
                <div style={{ marginTop: "100px" }}></div>
                <div className="wrapper">
                    <div class="row">
                        <div class="form-add-listing-template">
                            <div class="col-xs-12">
                                <h1 style={{ color: "#222" }}>Register your property</h1>
                                <div class="box-inner">
                                    <form class="form-step wizard fadeFx clearfix" name="form-add-listing" enctype="multipart/form-data" method="POST" role="application" id="steps-uid-0" noValidate>
                                        <div class="steps clearfix">
                                            <ul role="tablist">
                                                <li role="tab" class="first current col-xs-4 bs-wizard-step" aria-disabled="false" aria-selected="true">
                                                    <div class="progress">
                                                        <div class="progress-bar bg-color-primary"></div>
                                                    </div><a id="steps-uid-0-t-0" href="#steps-uid-0-h-0" aria-controls="steps-uid-0-p-0" class="bs-wizard-dot"> Property</a>
                                                    <div class="bs-wizard-info text-xs-center bg-color-primary hidden-sm-down"> Property</div>
                                                </li>
                                                <li role="tab" class="disabled col-xs-4 bs-wizard-step" aria-disabled="true">
                                                    <div class="progress">
                                                        <div class="progress-bar bg-color-primary"></div>
                                                    </div><a id="steps-uid-0-t-1" href="#steps-uid-0-h-1" aria-controls="steps-uid-0-p-1" class="bs-wizard-dot"> features</a>
                                                    <div class="bs-wizard-info text-xs-center bg-color-primary hidden-sm-down"> Features</div>
                                                </li>
                                                <li role="tab" class="disabled last col-xs-4 bs-wizard-step" aria-disabled="true">
                                                    <div class="progress">
                                                        <div class="progress-bar bg-color-primary"></div>
                                                    </div><a id="steps-uid-0-t-2" href="#steps-uid-0-h-2" aria-controls="steps-uid-0-p-2" class="bs-wizard-dot"> Photos</a>
                                                    <div class="bs-wizard-info text-xs-center bg-color-primary hidden-sm-down"> Photos</div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="content clearfix col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                                            <h4 id="steps-uid-0-h-0" tabindex="-1" class="title current">Property</h4>
                                            <section id="steps-uid-0-p-0" role="tabpanel" aria-labelledby="steps-uid-0-h-0" class="body current" aria-hidden="false" >
                                                {/* <!--M^s0-21 s0 21--> */}
                                                <div>
                                                    <div class="div-fsv add-listing-fsv" id="fsv-9923y67m7s"><input type="text" name="fsv" placeholder="Não preencha" /><input name="fsdv" type="hidden" /></div>
                                                    {/* <script type="text/javascript">
                                    (function(){
                                    				var div = document.getElementById('fsv-9923y67m7s');
                                    				var fsdv =  document.createElement('input');
                                    				fsdv.setAttribute('name', 'fsdv');
                                    				fsdv.setAttribute('type', 'hidden');
                                    				window.setTimeout(function() {
                                    					div.appendChild(fsdv);
                                    				}, 5000 );
                                    			})();
                                </script> */}
                                                </div>
                                                {/* : <!--M/--> */}
                                                <h3>Property</h3>
                                                <div class="row">
                                                    <div class="form-group col-xs-12"><input type="text" class="form-control required" name="name" placeholder="Nome *" /></div>
                                                    <div class="form-group col-xs-12 col-sm-6"><input type="tel" class="form-control required cell" name="cell_number" placeholder="Celular *" maxlength="15" /></div>
                                                    <div class="form-group col-xs-12 col-sm-6"><input type="tel" class="form-control phone" name="phone_number" placeholder="Telephone" maxlength="14" /></div>
                                                    <div class="form-group col-xs-12"><input type="email" class="form-control required" name="email" placeholder="E-mail *" /></div>
                                                </div>
                                            </section>
                                            <h4 id="steps-uid-0-h-1" tabindex="-1" class="title">Features</h4>
                                            <section id="steps-uid-0-p-1" role="tabpanel" aria-labelledby="steps-uid-0-h-1" class="body" aria-hidden="true" style={{ display: "none" }}>
                                                <h3>Features</h3>
                                                <div class="row">
                                                    <div class="form-group col-xs-12"><select name="property_category" class="form-control required custom-select"><option label="Goal" value="">Goal *</option><option label="Residencial" value="Residencial">Residencial</option><option label="Comercial" value="Comercial">Comercial</option><option label="Industrial" value="Industrial">Industrial</option><option label="Rural" value="Rural">Rural</option><option label="Temporada" value="Temporaire">Temporaire</option><option label="Corporativa" value="Corporative">Corporativa</option></select></div>
                                                    <div class="form-group col-xs-12"><select name="property_type" class="form-control required custom-select"><option label="Type" value="">Type *</option><option label="Corporate Floor" value="Corporate Floor">Corporate Floor</option><option label="Apartament" value="Apartamento">Apartament</option><option label="Duplex Apartment" value="Apartamento_Duplex">Duplex Apartment</option><option label="Garden Apartment" value="Apartamento_Garden">Garden Apartment</option><option label="Triplex Apartament" value="Apartamento_Triplex">Triplex Apartament</option><option label="Area" value="Area">Area</option><option label="Bungalow" value="Bangalo">Bungalow</option><option label="Shed" value="Barracao">Shed</option><option label="Box/Garage" value="Box_Garagem">Box/Garage</option><option label="Home" value="Casa">Home</option><option label="Farm" value="Chacara">Farm</option><option label="Coverage" value="Cobertura">Coverage</option><option label="Set" value="Conjunto">Set</option><option label="Edicule" value="Edicula">Edicule</option><option label="Farme" value="Fazenda">Farme</option><option label="Flat" value="Flat">Flat</option><option label="Shed" value="Galpao">Shed</option><option label="Haras" value="Haras">Haras</option><option label="Hotel" value="Hotel">Hotel</option><option label="Island" value="Ilha">Island</option><option label="Kitnet" value="Kitnet">Kitnet</option><option label="-----" value="Laje">-----</option><option label="Loft" value="Loft">Loft</option><option label="-----" value="Loja">------</option><option label="-----" value="Pavilhao">------</option><option label="Penthouse" value="Penthouse">Penthouse</option><option label="Ponto" value="Ponto">Ponto</option><option label="-----" value="Pousada">Pousada</option><option label="-----" value="Predio">------</option><option label="-----" value="Rancho">------</option><option label="Resort" value="Resort">Resort</option><option label="Sala" value="Sala">------</option><option label="Hall" value="Salao">Hall</option><option label="Sítio" value="Sitio">------</option><option label="-------" value="Sobrado">-------</option><option label="Studio" value="Studio">Studio</option><option label="Terrain" value="Terreno">Terrain</option><option label="Village" value="Village">Village</option></select></div>
                                                </div>
                                                <div class="row">
                                                    <div class="form-group col-xs-12 col-sm-6 campoValor"><label class="checkbox-inline"><input type="checkbox" name="sale" value="Venda" data-form-target="venda" /> For sale</label>
                                                        <div class="ignore" data-form="#venda"><input type="text" class="form-control currency" name="sale_price" placeholder="Valor para venda" disabled="disabled" /></div>
                                                    </div>
                                                    <div class="form-group col-xs-12 col-sm-6 campoValor"><label class="checkbox-inline"><input type="checkbox" name="rent" value="Locacao" data-form-target="locacao" /> For lease</label>
                                                        <div class="ignore" data-form="#locacao"><input type="text" class="form-control currency" name="rent_price" placeholder="Valor para locação" disabled="disabled" /></div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="form-group col-xs-12"><input type="text" class="form-control" name="name_condominium" placeholder="Name of condominium / building" /></div>
                                                    <div class="form-group col-xs-12"><input type="text" class="form-control currency" name="condominium_price" placeholder="Value" /></div>
                                                    <div class="form-group col-xs-12"><label class="checkbox-inline"><input type="checkbox" name="accept_financing" value="Sim" /> Accepts financing?</label></div>
                                                    <div class="form-group col-xs-12"><input type="text" class="form-control required geocode" name="full_address" placeholder="Address *" autocomplete="off" /></div>
                                                </div>
                                                <div class="row">
                                                    <div class="form-group col-xs-12 col-sm-6"><input type="text" class="form-control area" name="gross_floor_area" placeholder="Total area / land" /></div>
                                                    <div class="form-group col-xs-12 col-sm-6"><input type="text" class="form-control area" name="usable_floor_area" placeholder="Built area" /></div>
                                                </div>
                                                <div class="row">
                                                    <div class="form-group col-xs-12 col-sm-6"><input type="text" class="form-control number" name="bedroom" placeholder="Dorms" /></div>
                                                    <div class="form-group col-xs-12 col-sm-6"><input type="text" class="form-control number" name="suite" placeholder="Suítes" /></div>
                                                </div>
                                                <div class="row">
                                                    <div class="form-group col-xs-12 col-sm-6"><input type="text" class="form-control number" name="covered_garage" placeholder="Covered vacancies" /></div>
                                                    <div class="form-group col-xs-12 col-sm-6"><input type="text" class="form-control number" name="uncovered_garages" placeholder="Uncovered garages" /></div>
                                                </div>
                                                <div class="row">
                                                    <div class="form-group col-xs-12">
                                                        <textarea class="form-control" name="amenities" rows="10" placeholder="Other features (think about the differentials that your property has)"></textarea>
                                                    </div>
                                                </div>
                                            </section>
                                            <h4 id="steps-uid-0-h-2" tabindex="-1" class="title">Photos</h4>
                                            <section id="steps-uid-0-p-2" role="tabpanel" aria-labelledby="steps-uid-0-h-2" class="body" aria-hidden="true" style={{ display: "none" }}>
                                                <h3>Photos</h3>
                                                <label class="custom-file">
                                                    <input type="file" id="field" class="custom-file-input" name="field" multiple="" />
                                                    <span class="custom-file-control" >Attach your photos</span>
                                                </label>
                                            </section>
                                            <input type="hidden" name="widget_name" value="form-add-listing" /></div>
                                        <div class="actions clearfix col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                                            <ul role="menu" aria-label="Pagination">
                                                <li class="disabled" aria-disabled="true">
                                                    <a href="#previous" role="menuitem" class="btn btn-success btn-lg btn-block" style={{ display: "none", background: "#f69314" }}>Anterior</a></li>
                                                <li aria-hidden="false" aria-disabled="false">
                                                    <a href="#next" role="menuitem" class="btn btn-success btn-lg btn-block" style={{ background: "#f69314" }}><i class="fa fa-arrow-right"></i> Next</a></li>
                                                <li aria-hidden="true" style={{ display: "none" }}>
                                                    <a href="#finish" role="menuitem" class="btn btn-success btn-lg btn-block" style={{ background: "#f69314" }}><i class="fa fa-check"></i> Submit</a></li>
                                            </ul>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        )
    }
}
