import React, { Component } from 'react'
import im from '../../assets/images/florist.svg'
import { Link } from "react-router-dom";




export default class HomeDecorator extends Component {



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
                            <Link to={'/'}> <h1>Home Decorator</h1> </Link>
                        </div>

                        <div className="descriptionContainer">


                            {/* This is where you use dangerouslySetInnerHTML */}
                            <div className="description">
                                <p>
                                    Many people buy their home but never get around to making it their own.
                                    Perhaps that’s why you’re here?
                                    Maybe you recently moved into your house and it still doesn’t feel like it’s truly yours.
                                    Or you’re putting off throwing a dinner party because your dining room isn’t set up for entertaining.
                                    Or you want to host your monthly book club but your living room layout isn’t conducive to easy conversation.
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