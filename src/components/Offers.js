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
                                        <li itemScope=""  >
                                            <a itemProp="url" href="http://localhost:3000/">
                                                <span itemProp="title">Home</span>
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
                                                    <option defaultValue="" value="d_date">Date New to Old</option>
                                                </select>
                                                <div className="btn-group bootstrap-select">
                                                    <button type="button" className="btn dropdown-toggle btn-default" data-toggle="dropdown" data-id="sort_properties" title="Date New to Old"><span className="filter-option pull-left">Date New to Old</span>&nbsp;<span className="fa fa-sort"></span></button>
                                                    <div className="dropdown-menu open">
                                                        <ul className="dropdown-menu inner" role="menu">
                                                            <li data-original-index="0"><a tabIndex="0" data-tokens="null" href="i.html"><span className="text">Default Order</span><span className="glyphicon glyphicon-ok check-mark"></span></a></li>
                                                            <li data-original-index="1"><a tabIndex="0" data-tokens="null" href="i.html"><span className="text">Price (Low to High)</span><span className="glyphicon glyphicon-ok check-mark"></span></a></li>
                                                            <li data-original-index="2"><a tabIndex="0" data-tokens="null" href="i.html"><span className="text">Price (High to Low)</span><span className="glyphicon glyphicon-ok check-mark"></span></a></li>
                                                            <li data-original-index="3"><a tabIndex="0" data-tokens="null" href="i.html"><span className="text">Featured First</span><span className="glyphicon glyphicon-ok check-mark"></span></a></li>
                                                            <li data-original-index="4"><a tabIndex="0" data-tokens="null" href="i.html"><span className="text">Date Old to New</span><span className="glyphicon glyphicon-ok check-mark"></span></a></li>
                                                            <li data-original-index="5" className="selected"><a tabIndex="0" data-tokens="null" href="i.html"><span className="text">Date New to Old</span><span className="glyphicon glyphicon-ok check-mark"></span></a></li>
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


                            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 list-grid-area container-contentbar">
                                <div id="content-area">


                                    <div className="property-listing grid-view">
                                        <div className="row">

                                            <div id="ID-6269" className="item-wrap infobox_trigger  item-villa-for-sale-in-arabian-ranches-ll-rasha-villas">
                                                <div className="property-item table-list">
                                                    <div className="table-cell">
                                                        <div className="figure-block">
                                                            <figure className="item-thumb">

                                                                <div className="label-wrap label-right hide-on-list">
                                                                    <span className="label-status label-status-6 label label-default"><a href="/">For Sale</a></span> </div>

                                                                <div className="price hide-on-list"><span className="item-price">AED7,012,888</span></div>
                                                                <a className="hover-effect" href="i-1148011/">
                                                                    <img width="385" height="258" src="" className="attachment-houzez-property-thumb-image size-houzez-property-thumb-image wp-post-image" alt="" sizes="(max-width: 385px) 100vw, 385px" /> </a>
                                                                <ul className="actions">

                                                                    <li>

                                                                        <span className="add_fav" data-placement="top" data-toggle="tooltip" data-original-title="Favorite" data-propid="6269"><i className="fa fa-heart-o"></i></span>
                                                                    </li>

                                                                    <li>
                                                                        <span data-toggle="tooltip" data-placement="top" title="" data-original-title="(8) Photos">
                                                                            <i className="fa fa-camera"></i>
                                                                        </span>
                                                                    </li>

                                                                    <li>
                                                                        <span id="compare-link-6269" className="compare-property" data-propid="6269" data-toggle="tooltip" data-placement="top" title="" data-original-title="Compare">
                                                                            <i className="fa fa-plus"></i>
                                                                        </span>
                                                                    </li>
                                                                </ul>
                                                            </figure>
                                                        </div>
                                                    </div>
                                                    <div className="item-body table-cell">

                                                        <div className="body-left table-cell">
                                                            <div className="info-row">
                                                                <div className="label-wrap hide-on-grid">
                                                                    <span className="label-status label-status-6 label label-default"><a href="/">For Sale</a></span> </div>
                                                                <h2 className="property-title"><a href="i-1148011/">Villa For Sale in Arabian Ranches ll Rasha Villas</a></h2><address className="property-address">Rasha, Arabian Ranches 2, Dubai</address> </div>
                                                            <div className="info-row amenities hide-on-grid">
                                                                <p><span className="h-beds">Beds: 6</span><span className="h-baths">Baths: 6</span><span className="h-area">: 6006</span></p>
                                                                <p>Villa</p>
                                                            </div>

                                                            <div className="info-row date hide-on-grid">
                                                                <p className="prop-user-agent"><i className="fa fa-user"></i> <a href="ksy/">Ammar Choksy</a> </p>
                                                                <p><i className="fa fa-calendar"></i>2 months ago</p>
                                                            </div>

                                                        </div>
                                                        <div className="body-right table-cell hidden-gird-cell">

                                                            <div className="info-row price"><span className="item-price">AED7,012,888</span></div>

                                                            <div className="info-row phone text-right">
                                                                <a href="i-1148011/" className="btn btn-primary">Details <i className="fa fa-angle-right fa-right"></i></a>
                                                            </div>
                                                        </div>

                                                        <div className="table-list full-width hide-on-list">
                                                            <div className="cell">
                                                                <div className="info-row amenities">
                                                                    <p><span className="h-beds">Beds: 6</span><span className="h-baths">Baths: 6</span><span className="h-area">: 6006</span></p>
                                                                    <p>Villa</p>

                                                                </div>
                                                            </div>
                                                            <div className="cell">
                                                                <div className="phone">
                                                                    <a href="i-1148011/" className="btn btn-primary"> Details <i className="fa fa-angle-right fa-right"></i></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="item-foot date hide-on-list">
                                                    <div className="item-foot-left">
                                                        <p className="prop-user-agent"><i className="fa fa-user"></i> <a href="ksy/">Ammar Choksy</a> </p>
                                                    </div>

                                                    <div className="item-foot-right">
                                                        <p className="prop-date"><i className="fa fa-calendar"></i>2 months ago</p>
                                                    </div>
                                                </div>

                                            </div>
                                            <div id="ID-6260" className="item-wrap infobox_trigger  item-rasha-r2-type-1-4-bed-brand-new">
                                                <div className="property-item table-list">
                                                    <div className="table-cell">
                                                        <div className="figure-block">
                                                            <figure className="item-thumb">

                                                                <div className="label-wrap label-right hide-on-list">
                                                                    <span className="label-status label-status-6 label label-default"><a href="/">For Sale</a></span> </div>

                                                                <div className="price hide-on-list"><span className="item-price">AED4,625,888</span></div>
                                                                <a className="hover-effect" href="i-1148053/">
                                                                    <img width="306" height="204" src="" className="attachment-houzez-property-thumb-image size-houzez-property-thumb-image wp-post-image" alt="" sizes="(max-width: 306px) 100vw, 306px" /> </a>
                                                                <ul className="actions">

                                                                    <li>

                                                                        <span className="add_fav" data-placement="top" data-toggle="tooltip" data-original-title="Favorite" data-propid="6260"><i className="fa fa-heart-o"></i></span>
                                                                    </li>

                                                                    <li>
                                                                        <span data-toggle="tooltip" data-placement="top" title="" data-original-title="(8) Photos">
                                                                            <i className="fa fa-camera"></i>
                                                                        </span>
                                                                    </li>

                                                                    <li>
                                                                        <span id="compare-link-6260" className="compare-property" data-propid="6260" data-toggle="tooltip" data-placement="top" title="" data-original-title="Compare">
                                                                            <i className="fa fa-plus"></i>
                                                                        </span>
                                                                    </li>
                                                                </ul>
                                                            </figure>
                                                        </div>
                                                    </div>
                                                    <div className="item-body table-cell">

                                                        <div className="body-left table-cell">
                                                            <div className="info-row">
                                                                <div className="label-wrap hide-on-grid">
                                                                    <span className="label-status label-status-6 label label-default"><a href="/">For Sale</a></span> </div>
                                                                <h2 className="property-title"><a href="i-1148053/">RASHA R2 TYPE 1 4 BED BRAND NEW</a></h2><address className="property-address">Rasha, Arabian Ranches 2, Dubai</address> </div>
                                                            <div className="info-row amenities hide-on-grid">
                                                                <p><span className="h-beds">Beds: 4</span><span className="h-baths">Baths: 5</span><span className="h-area">: 4309</span></p>
                                                                <p>Villa</p>
                                                            </div>

                                                            <div className="info-row date hide-on-grid">
                                                                <p className="prop-user-agent"><i className="fa fa-user"></i> <a href="ksy/">Ammar Choksy</a> </p>
                                                                <p><i className="fa fa-calendar"></i>2 months ago</p>
                                                            </div>

                                                        </div>
                                                        <div className="body-right table-cell hidden-gird-cell">

                                                            <div className="info-row price"><span className="item-price">AED4,625,888</span></div>

                                                            <div className="info-row phone text-right">
                                                                <a href="i-1148053/" className="btn btn-primary">Details <i className="fa fa-angle-right fa-right"></i></a>
                                                            </div>
                                                        </div>

                                                        <div className="table-list full-width hide-on-list">
                                                            <div className="cell">
                                                                <div className="info-row amenities">
                                                                    <p><span className="h-beds">Beds: 4</span><span className="h-baths">Baths: 5</span><span className="h-area">: 4309</span></p>
                                                                    <p>Villa</p>

                                                                </div>
                                                            </div>
                                                            <div className="cell">
                                                                <div className="phone">
                                                                    <a href="i-1148053/" className="btn btn-primary"> Details <i className="fa fa-angle-right fa-right"></i></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="item-foot date hide-on-list">
                                                    <div className="item-foot-left">
                                                        <p className="prop-user-agent"><i className="fa fa-user"></i> <a href="ksy/">Ammar Choksy</a> </p>
                                                    </div>

                                                    <div className="item-foot-right">
                                                        <p className="prop-date"><i className="fa fa-calendar"></i>2 months ago</p>
                                                    </div>
                                                </div>

                                            </div>
                                            <div id="ID-6220" className="item-wrap infobox_trigger  item-vacant-2br-for-sale-marina-diamond-5-next-to-metro-station">
                                                <div className="property-item table-list">
                                                    <div className="table-cell">
                                                        <div className="figure-block">
                                                            <figure className="item-thumb">

                                                                <div className="label-wrap label-right hide-on-list">
                                                                    <span className="label-status label-status-6 label label-default"><a href="/">For Sale</a></span> </div>

                                                                <div className="price hide-on-list"><span className="item-price">AED950,000</span></div>
                                                                <a className="hover-effect" href="i-1178038/">
                                                                    <img width="385" height="258" src="https://www.rsdubai.com/wp-content/uploads/2019/01/eNVHAJLVecIRDbM6-385x258.jpeg" className="attachment-houzez-property-thumb-image size-houzez-property-thumb-image wp-post-image" alt="" /> </a>
                                                                <ul className="actions">

                                                                    <li>

                                                                        <span className="add_fav" data-placement="top" data-toggle="tooltip" data-original-title="Favorite" data-propid="6220"><i className="fa fa-heart-o"></i></span>
                                                                    </li>

                                                                    <li>
                                                                        <span data-toggle="tooltip" data-placement="top" title="" data-original-title="(8) Photos">
                                                                            <i className="fa fa-camera"></i>
                                                                        </span>
                                                                    </li>

                                                                    <li>
                                                                        <span id="compare-link-6220" className="compare-property" data-propid="6220" data-toggle="tooltip" data-placement="top" title="" data-original-title="Compare">
                                                                            <i className="fa fa-plus"></i>
                                                                        </span>
                                                                    </li>
                                                                </ul>
                                                            </figure>
                                                        </div>
                                                    </div>
                                                    <div className="item-body table-cell">

                                                        <div className="body-left table-cell">
                                                            <div className="info-row">
                                                                <div className="label-wrap hide-on-grid">
                                                                    <span className="label-status label-status-6 label label-default"><a href="/">For Sale</a></span> </div>
                                                                <h2 className="property-title"><a href="i-1178038/">Vacant 2BR for sale | Marina Diamond 5 next to Metro Station!!</a></h2><address className="property-address">Marina Diamonds, Dubai Marina, Dubai</address> </div>
                                                            <div className="info-row amenities hide-on-grid">
                                                                <p><span className="h-beds">Beds: 2</span><span className="h-baths">Baths: 2</span><span className="h-area">: 1084</span></p>
                                                                <p>Apartment</p>
                                                            </div>

                                                            <div className="info-row date hide-on-grid">
                                                                <p className="prop-user-agent"><i className="fa fa-user"></i> <a href="n/">Imran Khan</a> </p>
                                                                <p><i className="fa fa-calendar"></i>2 months ago</p>
                                                            </div>

                                                        </div>
                                                        <div className="body-right table-cell hidden-gird-cell">

                                                            <div className="info-row price"><span className="item-price">AED950,000</span></div>

                                                            <div className="info-row phone text-right">
                                                                <a href="i-1178038/" className="btn btn-primary">Details <i className="fa fa-angle-right fa-right"></i></a>
                                                            </div>
                                                        </div>

                                                        <div className="table-list full-width hide-on-list">
                                                            <div className="cell">
                                                                <div className="info-row amenities">
                                                                    <p><span className="h-beds">Beds: 2</span><span className="h-baths">Baths: 2</span><span className="h-area">: 1084</span></p>
                                                                    <p>Apartment</p>

                                                                </div>
                                                            </div>
                                                            <div className="cell">
                                                                <div className="phone">
                                                                    <a href="i-1178038/" className="btn btn-primary"> Details <i className="fa fa-angle-right fa-right"></i></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="item-foot date hide-on-list">
                                                    <div className="item-foot-left">
                                                        <p className="prop-user-agent"><i className="fa fa-user"></i> <a href="n/">Imran Khan</a> </p>
                                                    </div>

                                                    <div className="item-foot-right">
                                                        <p className="prop-date"><i className="fa fa-calendar"></i>2 months ago</p>
                                                    </div>
                                                </div>

                                            </div>
                                            <div id="ID-6133" className="item-wrap infobox_trigger  item-5yrs-free-service-charge-camelia-iii-3br">
                                                <div className="property-item table-list">
                                                    <div className="table-cell">
                                                        <div className="figure-block">
                                                            <figure className="item-thumb">

                                                                <div className="label-wrap label-right hide-on-list">
                                                                    <span className="label-status label-status-6 label label-default"><a href="/">For Sale</a></span> </div>

                                                                <div className="price hide-on-list"><span className="item-price">AED1,506,888</span></div>
                                                                <a className="hover-effect" href="i-1153676/">
                                                                    <img width="385" height="258" src="https://www.rsdubai.com/wp-content/uploads/2018/11/4KX6b9TXqM9Wd2MB-385x258.jpeg" className="attachment-houzez-property-thumb-image size-houzez-property-thumb-image wp-post-image" alt="" /> </a>
                                                                <ul className="actions">

                                                                    <li>

                                                                        <span className="add_fav" data-placement="top" data-toggle="tooltip" data-original-title="Favorite" data-propid="6133"><i className="fa fa-heart-o"></i></span>
                                                                    </li>

                                                                    <li>
                                                                        <span data-toggle="tooltip" data-placement="top" title="" data-original-title="(8) Photos">
                                                                            <i className="fa fa-camera"></i>
                                                                        </span>
                                                                    </li>

                                                                    <li>
                                                                        <span id="compare-link-6133" className="compare-property" data-propid="6133" data-toggle="tooltip" data-placement="top" title="" data-original-title="Compare">
                                                                            <i className="fa fa-plus"></i>
                                                                        </span>
                                                                    </li>
                                                                </ul>
                                                            </figure>
                                                        </div>
                                                    </div>
                                                    <div className="item-body table-cell">

                                                        <div className="body-left table-cell">
                                                            <div className="info-row">
                                                                <div className="label-wrap hide-on-grid">
                                                                    <span className="label-status label-status-6 label label-default"><a href="/">For Sale</a></span> </div>
                                                                <h2 className="property-title"><a href="i-1153676/">5YRS FREE SERVICE CHARGE CAMELIA III 3BR</a></h2><address className="property-address">Camelia, Arabian Ranches 2, Dubai</address> </div>
                                                            <div className="info-row amenities hide-on-grid">
                                                                <p><span className="h-beds">Beds: 3</span><span className="h-baths">Baths: 4</span><span className="h-area">: 1969</span></p>
                                                                <p>Townhouse</p>
                                                            </div>

                                                            <div className="info-row date hide-on-grid">
                                                                <p className="prop-user-agent"><i className="fa fa-user"></i> <a href="ksy/">Ammar Choksy</a> </p>
                                                                <p><i className="fa fa-calendar"></i>5 months ago</p>
                                                            </div>

                                                        </div>
                                                        <div className="body-right table-cell hidden-gird-cell">

                                                            <div className="info-row price"><span className="item-price">AED1,506,888</span></div>

                                                            <div className="info-row phone text-right">
                                                                <a href="i-1153676/" className="btn btn-primary">Details <i className="fa fa-angle-right fa-right"></i></a>
                                                            </div>
                                                        </div>

                                                        <div className="table-list full-width hide-on-list">
                                                            <div className="cell">
                                                                <div className="info-row amenities">
                                                                    <p><span className="h-beds">Beds: 3</span><span className="h-baths">Baths: 4</span><span className="h-area">: 1969</span></p>
                                                                    <p>Townhouse</p>

                                                                </div>
                                                            </div>
                                                            <div className="cell">
                                                                <div className="phone">
                                                                    <a href="i-1153676/" className="btn btn-primary"> Details <i className="fa fa-angle-right fa-right"></i></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="item-foot date hide-on-list">
                                                    <div className="item-foot-left">
                                                        <p className="prop-user-agent"><i className="fa fa-user"></i> <a href="ksy/">Ammar Choksy</a> </p>
                                                    </div>

                                                    <div className="item-foot-right">
                                                        <p className="prop-date"><i className="fa fa-calendar"></i>5 months ago</p>
                                                    </div>
                                                </div>

                                            </div>



                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className="pagination-main ">
                                    <ul className="pagination">
                                        <li className="disabled"><a aria-label="Previous" href="a.html"><span ><i className="fa fa-angle-left" ></i></span></a></li>
                                        <li className="active"><a data-houzepagi="1" href="/">1 <span className="sr-only"></span></a></li>
                                        <li><a data-houzepagi="2" href="/page/2/">2</a></li>
                                        <li><a data-houzepagi="3" href="/page/3/">3</a></li>
                                        <li><a data-houzepagi="2" rel="Next" href="/page/2/"><span ><i className="fa fa-angle-right"></i></span></a></li>
                                        <li><a data-houzepagi="6" rel="Last" href="/page/6/"><span ><i className="fa fa-angle-double-right"></i></span></a></li>
                                    </ul>
                                </div>
                            </div>
                       
                       

                            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 col-md-offset-0 col-sm-offset-3 container-sidebar ">
    <aside id="sidebar" className="sidebar-white">
        <div id="houzez_property_taxonomies-1" className="widget widget-categories">
            <div className="widget-top">
                <h3 className="widget-title">Property Status</h3></div>
            <div className="widget-body">
                <ul className="children">
                    <li><a href="/">For Rent</a><span className="cat-count">(187)</span></li>
                    <li><a href="/">For Sale</a><span className="cat-count">(53)</span></li>
                </ul>
            </div>
        </div>
        <div id="houzez_property_taxonomies-2" className="widget widget-categories">
            <div className="widget-top">
                <h3 className="widget-title">Property Type</h3></div>
            <div className="widget-body">
                <ul className="children">
                    <li><a href="partment/">Apartment</a><span className="cat-count">(152)</span></li>
                    <li><a href="uplex/">Duplex</a><span className="cat-count">(2)</span></li>
                    <li><a href="ffice-space/">Office Space</a><span className="cat-count">(2)</span></li>
                    <li><a href="etail/">Retail</a><span className="cat-count">(1)</span></li>
                    <li><a href="ownhouse/">Townhouse</a><span className="cat-count">(28)</span></li>
                    <li><a href="illa/">Villa</a><span className="cat-count">(55)</span></li>
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
