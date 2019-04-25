import React, { Component } from 'react'
import im from '../../assets/images/shipping.svg'
import { Link } from "react-router-dom";




export default class HomePacking extends Component {



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
                            <Link to={'/'}> <h1>Home Packing</h1> </Link>
                        </div>

                        <div className="descriptionContainer">


                            {/* This is where you use dangerouslySetInnerHTML */}
                            <div className="description">
                                <p>
                                    Packing for a move is just as important as the actual move itself. As we like to say,
                                    if you pack right, you move right.
                                    The best way to ensure your move goes smoothly is to get the packing done by trained professionals.
                                    We offer a complete range of packing and associated services:
                                    Complete packing prior to your move, and unpacking afterwards.

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