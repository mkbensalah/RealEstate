import React, {Component} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Aux from '../components/hoc/Auxliary'
import ServiceCard from '../components/ServiceCard'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import axios from "axios";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import Pagination from "material-ui-flat-pagination";


const theme = createMuiTheme();
class Services extends Component {

    constructor(props){
        super(props);
        let data = null;
        let aa =  null;
    }

    state = {
        allServices: null,
        loading: false,
        offset: 0
    }


    componentDidMount() {
        axios.get('http://localhost:5000/api/service/all')
            .then(response => {
                this.setState({loading: false});
                this.data = response.data.services;
                this.aa = [];
                this.aa = this.data;
                this.setState({loading: true});
                //console.log(this.aa[1].serviceID);
                // this.setState({allServices: response.data.services});

            })
            .catch(error => {
                this.setState({loading: false});
                console.log("nnnnnnnnnnn");
                console.log(error);
            });
    }

    handleClick(offset) {
        this.setState({ offset });
    }

    render() {
        let service = null;
        if(this.state.loading){
            service = this.aa.map(element => (
                <Aux  key={element.serviceID}>
                <ServiceCard key={element.serviceID} elt={element}/>

                </Aux>
            ))
        };
        return (
            <Aux>
                <Header/>
                <section className="sectionpadding10050 featured-properties-area">


                            <div className="row justify-content-center">

                                <h2 className="section-title mb-3">How It Works</h2>

                                <div className="row justify-content-center" style={{margin : '32px'}}>
                                    {service}


                                </div>

                            </div>


                </section>
                
                <h1> Mar7be bik si {this.props.auth.user.username}</h1>
                <Footer/>
            </Aux>
        );
    }
}

Services.propTypes = {
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, {})(Services);