import React, { Component } from 'react';
import Search from '../components/Search'
import AdvancedSearch from '../components/AdvancedSearch'
export default class SideBar extends Component {
    render() {
        let search = null;
        if(this.props.type === "AdvancedSearch"){
            search = <AdvancedSearch/>
        }
        else { search = <Search/>}



        return (
            <div>
                <div className="top-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 text wow fadeInLeft">
                                <h1>Welcome to Dari.tn</h1>
                                <div className="description">
                                    <p className="medium-paragraph">
                                    Find your perfect house and enjoy!
							</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="features-container section-container">
                    <div className="container">
                    {search}
                    </div>
                </div>
            </div>
        )
    }
}