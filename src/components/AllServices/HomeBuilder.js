import React, { Component } from 'react'
import im from '../../assets/images/home.svg'
import { Link } from "react-router-dom";




export default class HomeBuilder extends Component {



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
                            <Link to={'/'}> <h1>Home Building</h1> </Link>
                        </div>

                        <div className="descriptionContainer">


                            {/* This is where you use dangerouslySetInnerHTML */}
                            <div className="description">
                                <p>
                                    The process often starts with a planning stage in which plans are prepared by an
                                    architect and approved by the client and any regulatory authority.Then the site is cleared,
                                    foundations are laid and trenches for connection to services such as sewerage,
                                    water, and electricity are established. If the house is wooden-framed,
                                    a framework is constructed to support the boards, siding and roof.

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