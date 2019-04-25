import React, { Component } from 'react'
import im from '../../assets/images/locationcity.svg'
import { Link } from "react-router-dom";




export default class HomeLeasing extends Component {



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
                            <Link to={'/'}> <h1>Home Leasing</h1> </Link>
                        </div>

                        <div className="descriptionContainer">


                            {/* This is where you use dangerouslySetInnerHTML */}
                            <div className="description">
                                <p>
                                    You have a house, a spare room and some debt to clear.
                                    You think a roommate just might be the way to add extra money to your budget.
                                    Or maybe you just inherited your parents’ house, and sentimental ties keep you from selling it right away.
                                    Whatever the reason, renting out your home—or a portion of your home—for extra income appeals to you.
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