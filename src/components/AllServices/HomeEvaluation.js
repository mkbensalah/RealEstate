import React, { Component } from 'react'
import im from '../../assets/images/money.svg'
import { Link } from "react-router-dom";




export default class HomeEvaluation extends Component {



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
                            <Link to={'/'}> <h1>Home Evaluation</h1> </Link>
                        </div>

                        <div className="descriptionContainer">


                            {/* This is where you use dangerouslySetInnerHTML */}
                            <div className="description">
                                <p>
                                    If you’re entering the market for a new home, using a mortgage,
                                    refinancing your current mortgage or selling your home to anyone other than a cash-buyer,
                                    the home evaluation and appraisal is a critical part of the overall transaction.
                                    Buyers, sellers and owners need to have a good grasp on the evaluation process,
                                    how it works and how your home’s value is determined.
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