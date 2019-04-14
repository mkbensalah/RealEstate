import React, { Component } from 'react';


import Aux from './hoc/Auxliary';


class Offers extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    // componentWillUpdate () {
    //    
    // }

    render() {
        return (
            <Aux>
                <div id="section-body">
                    <div className="container">
                        <div className="page-title breadcrumb-top" style={{ padding: '30px 0' }}>
                            <div className="row">
                                <div className="col-sm-12">
                                    <ol className="breadcrumb" style={{ float: 'left' }}>
                                        <li itemscope=""  >
                                            <a itemprop="url" href="http://localhost:3000/">
                                                <span itemprop="title">Home</span>
                                            </a>
                                        </li>
                                        <li>For Sale</li>
                                    </ol>


                                    <div style={{ float: 'right' }}>
                                        <div className="view">
                                            <div className="sort-tab table-cell">
                                                Sort by:
                                          <select id="sort_properties" className="selectpicker bs-select-hidden" title="" data-live-search-style="begins" data-live-search="false">
                                                    <option value="">Default Order</option>
                                                    <option value="a_price">Price (Low to High)</option>
                                                    <option value="d_price">Price (High to Low)</option>

                                                    <option value="featured_first">Featured First</option>

                                                    <option value="a_date">Date Old to New</option>
                                                    <option selected="" value="d_date">Date New to Old</option>
                                                </select>
                                                <div className="btn-group bootstrap-select">
                                                    <button type="button" className="btn dropdown-toggle btn-default" data-toggle="dropdown" data-id="sort_properties" title="Date New to Old"><span className="filter-option pull-left">Date New to Old</span>&nbsp;<span className="fa fa-sort"></span></button>
                                                    <div className="dropdown-menu open">
                                                        <ul className="dropdown-menu inner" role="menu">
                                                            <li data-original-index="0"><a tabindex="0" data-tokens="null"><span className="text">Default Order</span><span className="glyphicon glyphicon-ok check-mark"></span></a></li>
                                                            <li data-original-index="1"><a tabindex="0" data-tokens="null"><span className="text">Price (Low to High)</span><span className="glyphicon glyphicon-ok check-mark"></span></a></li>
                                                            <li data-original-index="2"><a tabindex="0" data-tokens="null"><span className="text">Price (High to Low)</span><span className="glyphicon glyphicon-ok check-mark"></span></a></li>
                                                            <li data-original-index="3"><a tabindex="0" data-tokens="null"><span className="text">Featured First</span><span className="glyphicon glyphicon-ok check-mark"></span></a></li>
                                                            <li data-original-index="4"><a tabindex="0" data-tokens="null"><span className="text">Date Old to New</span><span className="glyphicon glyphicon-ok check-mark"></span></a></li>
                                                            <li data-original-index="5" className="selected"><a tabindex="0" data-tokens="null"><span className="text">Date New to Old</span><span className="glyphicon glyphicon-ok check-mark"></span></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="table-cell hidden-xs">
                                                <span className="view-btn btn-list active"><i className="fa fa-th-list"></i></span>
                                                <span className="view-btn btn-grid "><i className="fa fa-th-large"></i></span>




                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>

                        <div className="row">


                            <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12 list-grid-area container-contentbar">
                                <div id="content-area">


                                    <div class="property-listing grid-view">
                                        <div class="row">

                                            <div id="ID-6269" class="item-wrap infobox_trigger  item-villa-for-sale-in-arabian-ranches-ll-rasha-villas">
                                                <div class="property-item table-list">
                                                    <div class="table-cell">
                                                        <div class="figure-block">
                                                            <figure class="item-thumb">

                                                                <div class="label-wrap label-right hide-on-list">
                                                                    <span class="label-status label-status-6 label label-default"><a href="/">For Sale</a></span> </div>

                                                                <div class="price hide-on-list"><span class="item-price">AED7,012,888</span></div>
                                                                <a class="hover-effect" href="i-1148011/">
                                                                    <img width="385" height="258" src="" class="attachment-houzez-property-thumb-image size-houzez-property-thumb-image wp-post-image" alt="" sizes="(max-width: 385px) 100vw, 385px" /> </a>
                                                                <ul class="actions">

                                                                    <li>

                                                                        <span class="add_fav" data-placement="top" data-toggle="tooltip" data-original-title="Favorite" data-propid="6269"><i class="fa fa-heart-o"></i></span>
                                                                    </li>

                                                                    <li>
                                                                        <span data-toggle="tooltip" data-placement="top" title="" data-original-title="(8) Photos">
                                                                            <i class="fa fa-camera"></i>
                                                                        </span>
                                                                    </li>

                                                                    <li>
                                                                        <span id="compare-link-6269" class="compare-property" data-propid="6269" data-toggle="tooltip" data-placement="top" title="" data-original-title="Compare">
                                                                            <i class="fa fa-plus"></i>
                                                                        </span>
                                                                    </li>
                                                                </ul>
                                                            </figure>
                                                        </div>
                                                    </div>
                                                    <div class="item-body table-cell">

                                                        <div class="body-left table-cell">
                                                            <div class="info-row">
                                                                <div class="label-wrap hide-on-grid">
                                                                    <span class="label-status label-status-6 label label-default"><a href="/">For Sale</a></span> </div>
                                                                <h2 class="property-title"><a href="i-1148011/">Villa For Sale in Arabian Ranches ll Rasha Villas</a></h2><address class="property-address">Rasha, Arabian Ranches 2, Dubai</address> </div>
                                                            <div class="info-row amenities hide-on-grid">
                                                                <p><span class="h-beds">Beds: 6</span><span class="h-baths">Baths: 6</span><span class="h-area">: 6006</span></p>
                                                                <p>Villa</p>
                                                            </div>

                                                            <div class="info-row date hide-on-grid">
                                                                <p class="prop-user-agent"><i class="fa fa-user"></i> <a href="ksy/">Ammar Choksy</a> </p>
                                                                <p><i class="fa fa-calendar"></i>2 months ago</p>
                                                            </div>

                                                        </div>
                                                        <div class="body-right table-cell hidden-gird-cell">

                                                            <div class="info-row price"><span class="item-price">AED7,012,888</span></div>

                                                            <div class="info-row phone text-right">
                                                                <a href="i-1148011/" class="btn btn-primary">Details <i class="fa fa-angle-right fa-right"></i></a>
                                                            </div>
                                                        </div>

                                                        <div class="table-list full-width hide-on-list">
                                                            <div class="cell">
                                                                <div class="info-row amenities">
                                                                    <p><span class="h-beds">Beds: 6</span><span class="h-baths">Baths: 6</span><span class="h-area">: 6006</span></p>
                                                                    <p>Villa</p>

                                                                </div>
                                                            </div>
                                                            <div class="cell">
                                                                <div class="phone">
                                                                    <a href="i-1148011/" class="btn btn-primary"> Details <i class="fa fa-angle-right fa-right"></i></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="item-foot date hide-on-list">
                                                    <div class="item-foot-left">
                                                        <p class="prop-user-agent"><i class="fa fa-user"></i> <a href="ksy/">Ammar Choksy</a> </p>
                                                    </div>

                                                    <div class="item-foot-right">
                                                        <p class="prop-date"><i class="fa fa-calendar"></i>2 months ago</p>
                                                    </div>
                                                </div>

                                            </div>
                                            <div id="ID-6260" class="item-wrap infobox_trigger  item-rasha-r2-type-1-4-bed-brand-new">
                                                <div class="property-item table-list">
                                                    <div class="table-cell">
                                                        <div class="figure-block">
                                                            <figure class="item-thumb">

                                                                <div class="label-wrap label-right hide-on-list">
                                                                    <span class="label-status label-status-6 label label-default"><a href="/">For Sale</a></span> </div>

                                                                <div class="price hide-on-list"><span class="item-price">AED4,625,888</span></div>
                                                                <a class="hover-effect" href="i-1148053/">
                                                                    <img width="306" height="204" src="" class="attachment-houzez-property-thumb-image size-houzez-property-thumb-image wp-post-image" alt="" sizes="(max-width: 306px) 100vw, 306px" /> </a>
                                                                <ul class="actions">

                                                                    <li>

                                                                        <span class="add_fav" data-placement="top" data-toggle="tooltip" data-original-title="Favorite" data-propid="6260"><i class="fa fa-heart-o"></i></span>
                                                                    </li>

                                                                    <li>
                                                                        <span data-toggle="tooltip" data-placement="top" title="" data-original-title="(8) Photos">
                                                                            <i class="fa fa-camera"></i>
                                                                        </span>
                                                                    </li>

                                                                    <li>
                                                                        <span id="compare-link-6260" class="compare-property" data-propid="6260" data-toggle="tooltip" data-placement="top" title="" data-original-title="Compare">
                                                                            <i class="fa fa-plus"></i>
                                                                        </span>
                                                                    </li>
                                                                </ul>
                                                            </figure>
                                                        </div>
                                                    </div>
                                                    <div class="item-body table-cell">

                                                        <div class="body-left table-cell">
                                                            <div class="info-row">
                                                                <div class="label-wrap hide-on-grid">
                                                                    <span class="label-status label-status-6 label label-default"><a href="/">For Sale</a></span> </div>
                                                                <h2 class="property-title"><a href="i-1148053/">RASHA R2 TYPE 1 4 BED BRAND NEW</a></h2><address class="property-address">Rasha, Arabian Ranches 2, Dubai</address> </div>
                                                            <div class="info-row amenities hide-on-grid">
                                                                <p><span class="h-beds">Beds: 4</span><span class="h-baths">Baths: 5</span><span class="h-area">: 4309</span></p>
                                                                <p>Villa</p>
                                                            </div>

                                                            <div class="info-row date hide-on-grid">
                                                                <p class="prop-user-agent"><i class="fa fa-user"></i> <a href="ksy/">Ammar Choksy</a> </p>
                                                                <p><i class="fa fa-calendar"></i>2 months ago</p>
                                                            </div>

                                                        </div>
                                                        <div class="body-right table-cell hidden-gird-cell">

                                                            <div class="info-row price"><span class="item-price">AED4,625,888</span></div>

                                                            <div class="info-row phone text-right">
                                                                <a href="i-1148053/" class="btn btn-primary">Details <i class="fa fa-angle-right fa-right"></i></a>
                                                            </div>
                                                        </div>

                                                        <div class="table-list full-width hide-on-list">
                                                            <div class="cell">
                                                                <div class="info-row amenities">
                                                                    <p><span class="h-beds">Beds: 4</span><span class="h-baths">Baths: 5</span><span class="h-area">: 4309</span></p>
                                                                    <p>Villa</p>

                                                                </div>
                                                            </div>
                                                            <div class="cell">
                                                                <div class="phone">
                                                                    <a href="i-1148053/" class="btn btn-primary"> Details <i class="fa fa-angle-right fa-right"></i></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="item-foot date hide-on-list">
                                                    <div class="item-foot-left">
                                                        <p class="prop-user-agent"><i class="fa fa-user"></i> <a href="ksy/">Ammar Choksy</a> </p>
                                                    </div>

                                                    <div class="item-foot-right">
                                                        <p class="prop-date"><i class="fa fa-calendar"></i>2 months ago</p>
                                                    </div>
                                                </div>

                                            </div>
                                            <div id="ID-6220" class="item-wrap infobox_trigger  item-vacant-2br-for-sale-marina-diamond-5-next-to-metro-station">
                                                <div class="property-item table-list">
                                                    <div class="table-cell">
                                                        <div class="figure-block">
                                                            <figure class="item-thumb">

                                                                <div class="label-wrap label-right hide-on-list">
                                                                    <span class="label-status label-status-6 label label-default"><a href="/">For Sale</a></span> </div>

                                                                <div class="price hide-on-list"><span class="item-price">AED950,000</span></div>
                                                                <a class="hover-effect" href="i-1178038/">
                                                                    <img width="385" height="258" src="https://www.rsdubai.com/wp-content/uploads/2019/01/eNVHAJLVecIRDbM6-385x258.jpeg" class="attachment-houzez-property-thumb-image size-houzez-property-thumb-image wp-post-image" alt="" /> </a>
                                                                <ul class="actions">

                                                                    <li>

                                                                        <span class="add_fav" data-placement="top" data-toggle="tooltip" data-original-title="Favorite" data-propid="6220"><i class="fa fa-heart-o"></i></span>
                                                                    </li>

                                                                    <li>
                                                                        <span data-toggle="tooltip" data-placement="top" title="" data-original-title="(8) Photos">
                                                                            <i class="fa fa-camera"></i>
                                                                        </span>
                                                                    </li>

                                                                    <li>
                                                                        <span id="compare-link-6220" class="compare-property" data-propid="6220" data-toggle="tooltip" data-placement="top" title="" data-original-title="Compare">
                                                                            <i class="fa fa-plus"></i>
                                                                        </span>
                                                                    </li>
                                                                </ul>
                                                            </figure>
                                                        </div>
                                                    </div>
                                                    <div class="item-body table-cell">

                                                        <div class="body-left table-cell">
                                                            <div class="info-row">
                                                                <div class="label-wrap hide-on-grid">
                                                                    <span class="label-status label-status-6 label label-default"><a href="/">For Sale</a></span> </div>
                                                                <h2 class="property-title"><a href="i-1178038/">Vacant 2BR for sale | Marina Diamond 5 next to Metro Station!!</a></h2><address class="property-address">Marina Diamonds, Dubai Marina, Dubai</address> </div>
                                                            <div class="info-row amenities hide-on-grid">
                                                                <p><span class="h-beds">Beds: 2</span><span class="h-baths">Baths: 2</span><span class="h-area">: 1084</span></p>
                                                                <p>Apartment</p>
                                                            </div>

                                                            <div class="info-row date hide-on-grid">
                                                                <p class="prop-user-agent"><i class="fa fa-user"></i> <a href="n/">Imran Khan</a> </p>
                                                                <p><i class="fa fa-calendar"></i>2 months ago</p>
                                                            </div>

                                                        </div>
                                                        <div class="body-right table-cell hidden-gird-cell">

                                                            <div class="info-row price"><span class="item-price">AED950,000</span></div>

                                                            <div class="info-row phone text-right">
                                                                <a href="i-1178038/" class="btn btn-primary">Details <i class="fa fa-angle-right fa-right"></i></a>
                                                            </div>
                                                        </div>

                                                        <div class="table-list full-width hide-on-list">
                                                            <div class="cell">
                                                                <div class="info-row amenities">
                                                                    <p><span class="h-beds">Beds: 2</span><span class="h-baths">Baths: 2</span><span class="h-area">: 1084</span></p>
                                                                    <p>Apartment</p>

                                                                </div>
                                                            </div>
                                                            <div class="cell">
                                                                <div class="phone">
                                                                    <a href="i-1178038/" class="btn btn-primary"> Details <i class="fa fa-angle-right fa-right"></i></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="item-foot date hide-on-list">
                                                    <div class="item-foot-left">
                                                        <p class="prop-user-agent"><i class="fa fa-user"></i> <a href="n/">Imran Khan</a> </p>
                                                    </div>

                                                    <div class="item-foot-right">
                                                        <p class="prop-date"><i class="fa fa-calendar"></i>2 months ago</p>
                                                    </div>
                                                </div>

                                            </div>
                                            <div id="ID-6133" class="item-wrap infobox_trigger  item-5yrs-free-service-charge-camelia-iii-3br">
                                                <div class="property-item table-list">
                                                    <div class="table-cell">
                                                        <div class="figure-block">
                                                            <figure class="item-thumb">

                                                                <div class="label-wrap label-right hide-on-list">
                                                                    <span class="label-status label-status-6 label label-default"><a href="/">For Sale</a></span> </div>

                                                                <div class="price hide-on-list"><span class="item-price">AED1,506,888</span></div>
                                                                <a class="hover-effect" href="i-1153676/">
                                                                    <img width="385" height="258" src="https://www.rsdubai.com/wp-content/uploads/2018/11/4KX6b9TXqM9Wd2MB-385x258.jpeg" class="attachment-houzez-property-thumb-image size-houzez-property-thumb-image wp-post-image" alt="" /> </a>
                                                                <ul class="actions">

                                                                    <li>

                                                                        <span class="add_fav" data-placement="top" data-toggle="tooltip" data-original-title="Favorite" data-propid="6133"><i class="fa fa-heart-o"></i></span>
                                                                    </li>

                                                                    <li>
                                                                        <span data-toggle="tooltip" data-placement="top" title="" data-original-title="(8) Photos">
                                                                            <i class="fa fa-camera"></i>
                                                                        </span>
                                                                    </li>

                                                                    <li>
                                                                        <span id="compare-link-6133" class="compare-property" data-propid="6133" data-toggle="tooltip" data-placement="top" title="" data-original-title="Compare">
                                                                            <i class="fa fa-plus"></i>
                                                                        </span>
                                                                    </li>
                                                                </ul>
                                                            </figure>
                                                        </div>
                                                    </div>
                                                    <div class="item-body table-cell">

                                                        <div class="body-left table-cell">
                                                            <div class="info-row">
                                                                <div class="label-wrap hide-on-grid">
                                                                    <span class="label-status label-status-6 label label-default"><a href="/">For Sale</a></span> </div>
                                                                <h2 class="property-title"><a href="i-1153676/">5YRS FREE SERVICE CHARGE CAMELIA III 3BR</a></h2><address class="property-address">Camelia, Arabian Ranches 2, Dubai</address> </div>
                                                            <div class="info-row amenities hide-on-grid">
                                                                <p><span class="h-beds">Beds: 3</span><span class="h-baths">Baths: 4</span><span class="h-area">: 1969</span></p>
                                                                <p>Townhouse</p>
                                                            </div>

                                                            <div class="info-row date hide-on-grid">
                                                                <p class="prop-user-agent"><i class="fa fa-user"></i> <a href="ksy/">Ammar Choksy</a> </p>
                                                                <p><i class="fa fa-calendar"></i>5 months ago</p>
                                                            </div>

                                                        </div>
                                                        <div class="body-right table-cell hidden-gird-cell">

                                                            <div class="info-row price"><span class="item-price">AED1,506,888</span></div>

                                                            <div class="info-row phone text-right">
                                                                <a href="i-1153676/" class="btn btn-primary">Details <i class="fa fa-angle-right fa-right"></i></a>
                                                            </div>
                                                        </div>

                                                        <div class="table-list full-width hide-on-list">
                                                            <div class="cell">
                                                                <div class="info-row amenities">
                                                                    <p><span class="h-beds">Beds: 3</span><span class="h-baths">Baths: 4</span><span class="h-area">: 1969</span></p>
                                                                    <p>Townhouse</p>

                                                                </div>
                                                            </div>
                                                            <div class="cell">
                                                                <div class="phone">
                                                                    <a href="i-1153676/" class="btn btn-primary"> Details <i class="fa fa-angle-right fa-right"></i></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="item-foot date hide-on-list">
                                                    <div class="item-foot-left">
                                                        <p class="prop-user-agent"><i class="fa fa-user"></i> <a href="ksy/">Ammar Choksy</a> </p>
                                                    </div>

                                                    <div class="item-foot-right">
                                                        <p class="prop-date"><i class="fa fa-calendar"></i>5 months ago</p>
                                                    </div>
                                                </div>

                                            </div>



                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div class="pagination-main ">
                                    <ul class="pagination">
                                        <li class="disabled"><a aria-label="Previous"><span aria-hidden="true"><i class="fa fa-angle-left"></i></span></a></li>
                                        <li class="active"><a data-houzepagi="1" href="/">1 <span class="sr-only"></span></a></li>
                                        <li><a data-houzepagi="2" href="/page/2/">2</a></li>
                                        <li><a data-houzepagi="3" href="/page/3/">3</a></li>
                                        <li><a data-houzepagi="2" rel="Next" href="/page/2/"><span aria-hidden="true"><i class="fa fa-angle-right"></i></span></a></li>
                                        <li><a data-houzepagi="6" rel="Last" href="/page/6/"><span aria-hidden="true"><i class="fa fa-angle-double-right"></i></span></a></li>
                                    </ul>
                                </div>
                            </div>
                       
                       

                            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 col-md-offset-0 col-sm-offset-3 container-sidebar ">
    <aside id="sidebar" class="sidebar-white">
        <div id="houzez_property_taxonomies-1" class="widget widget-categories">
            <div class="widget-top">
                <h3 class="widget-title">Property Status</h3></div>
            <div class="widget-body">
                <ul class="children">
                    <li><a href="/">For Rent</a><span class="cat-count">(187)</span></li>
                    <li><a href="/">For Sale</a><span class="cat-count">(53)</span></li>
                </ul>
            </div>
        </div>
        <div id="houzez_property_taxonomies-2" class="widget widget-categories">
            <div class="widget-top">
                <h3 class="widget-title">Property Type</h3></div>
            <div class="widget-body">
                <ul class="children">
                    <li><a href="partment/">Apartment</a><span class="cat-count">(152)</span></li>
                    <li><a href="uplex/">Duplex</a><span class="cat-count">(2)</span></li>
                    <li><a href="ffice-space/">Office Space</a><span class="cat-count">(2)</span></li>
                    <li><a href="etail/">Retail</a><span class="cat-count">(1)</span></li>
                    <li><a href="ownhouse/">Townhouse</a><span class="cat-count">(28)</span></li>
                    <li><a href="illa/">Villa</a><span class="cat-count">(55)</span></li>
                </ul>
            </div>
        </div>
            </aside>
</div>
                       
                        </div>



                    </div>




                </div>
            </Aux >
        )
    }
}

export default Offers;
