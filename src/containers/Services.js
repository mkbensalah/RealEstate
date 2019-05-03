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

<<<<<<< HEAD

    handleClose = (option) => {
        this.setState({ anchorEl: null });
        if( option === 'Show Service Building') {

            axios.get('http://localhost:5000/api/service/re-construct/all')
                .then(response => {
                    this.setState({loading: false});
                    this.data = response.data.construction;
                    this.aa = [];
                    this.aa = this.data;
                    this.label = 'Service Building'
                    console.log(response.data.construction)
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
        else if( option === 'Show All Service') {

            axios.get('http://localhost:5000/api/service/all')
                .then(response => {
                    this.setState({loading: false});
                    this.data = response.data.services;
                    this.aa = [];
                    this.aa = this.data;
                    this.label = 'All Service'
                    console.log(response.data.services)
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

        else if( option === 'Show Service Repair') {
            axios.get('http://localhost:5000/api/service/repair/all')
                .then(response => {
                    this.setState({loading: false});
                    this.data = response.data.repair;
                    this.aa = [];
                    this.aa = this.data;
                    this.label = 'Service Repair'
                    console.log(response.data.repair)
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
        else if( option === 'Show Service Leasing') {
            axios.get('http://localhost:5000/api/service/leasing/all')
                .then(response => {
                    this.setState({loading: false});
                    this.data = response.data.leasing;
                    this.aa = [];
                    this.aa = this.data;
                    this.label = 'Service Leasing'
                    console.log(response.data.leasing)
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


    };


=======
>>>>>>> parent of fb273ff... change
    handleClick(offset) {
        this.setState({ offset });
    }

    render() {
        let service = null;
<<<<<<< HEAD
        if (this.state.loading) {

            const indexOfLastTodo = currentPage * todosPerPage;
            const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
            const currentTodos = this.aa.slice(indexOfFirstTodo, indexOfLastTodo);


            service = currentTodos.map(element => (
                <Aux key={element.serviceID}>
                    <ServiceCard key={element.serviceID} elt={element}/>

                </Aux>
            ))

            // Logic for displaying page numbers
            pageNumbers = [];
            for (let i = 1; i <= Math.ceil(this.aa.length / todosPerPage); i++) {
                pageNumbers.push(i);
            }

            renderPageNumbers = pageNumbers.map(number => {
                return (
                    <li
                        key={number}
                        id={number}
                        onClick={this.handleClick}
                    >
                        {number}
                    </li>
                );
            });
            const open = Boolean(this.state.anchorEl);
=======
        if(this.state.loading){
            service = this.aa.map(element => (
                <Aux  key={element.serviceID}>
                <ServiceCard key={element.serviceID} elt={element}/>

                </Aux>
            ))
>>>>>>> parent of fb273ff... change
        };
        return (
            <Aux>
                <Header/>
                <section className="sectionpadding10050 featured-properties-area">


                            <div className="row justify-content-center">

                                <h2 className="section-title mb-3">How It Works</h2>

<<<<<<< HEAD
                    <IconButton aria-label="Sort By :"
                                aria-owns={open ? 'long-menu' : undefined}
                                aria-haspopup="true"
                                onClick={this.handleClickFi}>
                        <div className="row">
                            <h2>Sort By :</h2>
                            <h2 style={{paddingLeft : '15px', paddingRight : '15px'}}>{this.label}</h2>
                            <FilterList  style={ { height: '40px', width: '40px' } }/>

                        </div>
                    </IconButton>
                    <Menu
                        id="long-menu"
                        anchorEl={this.state.anchorEl}
                        open={open}
                        onClose={this.handleClose}
                        PaperProps={{
                            style: {
                                maxHeight: ITEM_HEIGHT * 4.5,
                                width: 200,
                            },
                        }}
                    >
                        {options.map(option => (
                            <MenuItem key={option} selected={option === 'Show All Service'} onClick={() => this.handleClose(option)}>
                                {option}
                            </MenuItem>
                        ))}
                    </Menu>

                    <div className="row justify-content-center" style={{margin: '32px'}}>



                        {service}

                    </div>
=======
                                <div className="row justify-content-center" style={{margin : '32px'}}>
                                    {service}

>>>>>>> parent of fb273ff... change

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