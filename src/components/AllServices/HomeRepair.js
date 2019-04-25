import React, { Component } from 'react'
import im from '../../assets/images/build.svg'
import { Link } from "react-router-dom";




export default class HomeRepair extends Component {



    render() {
        return (
            <div className="col-md-4">
                <div className="card">

                    <div className="section">
                        <div id="img">
                            <img src={im} alt={'builder'} />
                        </div>
                    </div>

                    <div className="itemDetails">
                        <div id='title'>
                            <Link to={'/'}> <h1>Home Repair</h1> </Link>
                        </div>

                        <div className="descriptionContainer">


                            {/* This is where you use dangerouslySetInnerHTML */}
                            <div className="description">
                                <p>
                                    Home Repair Services strengthens vulnerable Kent County homeowners because strong
                                    homeowners build strong communities.
                                    We believe that homeownership encourages personal responsibility and builds value,
                                    dignity and pride. It is an essential component for community vitality.
                                    Our interactions with Home Repair Services staff, community partners and the families

                                </p>

                            </div>
                        </div>

                        <div className="addToCart">
                            <Link to={'/'}> <h1>Learn more ></h1> </Link>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}