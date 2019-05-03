import React, {Component} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Aux from '../components/hoc/Auxliary'
import ServiceCard from '../components/ServiceCard'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import axios from "axios";
import CssBaseline from "@material-ui/core/CssBaseline";
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core/styles";
import Pagination from "material-ui-flat-pagination";
import IconButton from '@material-ui/core/IconButton';
import FilterList from '@material-ui/icons/FilterList';
import Ne from '@material-ui/icons/FiberNew';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import SideNav, {NavIcon, NavItem, NavText} from '@trendmicro/react-sidenav';
import {FloatingMenu,
    MainButton,
    ChildButton,} from 'react-floating-button-menu';
import MdAdd from '@material-ui/icons/add';
import MdClose from '@material-ui/icons/clear';


import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import {Link} from 'react-router-dom';


const theme = createMuiTheme();

const ITEM_HEIGHT = 48;
const options = [
    'Show All Service',
    'Show Service Building',
    'Show Service Repair',
    'Show Service Leasing'
];


class Services extends Component {

    constructor(props) {
        super(props);
        let data = null;
        let aa = null;
        this.handleClick = this.handleClick.bind(this);
        let label = null;
    }

    state = {
        allServices: null,
        loading: false,
        currentPage: 1,
        todosPerPage: 4,
        offset: 0,
        isOpen: false,
        anchorEl: null
    }


    componentDidMount() {
        axios.get('http://localhost:5000/api/service/all')
            .then(response => {
                this.setState({loading: false});
                this.data = response.data.services;
                this.aa = [];
                this.aa = this.data;
                this.label = 'All Service'
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


    handleClose = (option) => {
        this.setState({anchorEl: null});
        if (option === 'Show Service Building') {

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


        } else if (option === 'Show All Service') {

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


        } else if (option === 'Show Service Repair') {
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
        } else if (option === 'Show Service Leasing') {
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


    handleClick(offset) {
        console.log(offset);
        this.setState({currentPage: offset + 1, offset});

    }

    handleClickFi = event => {
        this.setState({anchorEl: event.currentTarget});
    };


    render() {
        console.log(this.state.currentPage)
        const {currentPage, todosPerPage} = this.state;
        let renderPageNumbers;
        let pageNumbers;
        let service = null;
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
        }
        ;


        const open = Boolean(this.state.anchorEl);
        return (
            <Aux>
                <Header name={this.props.auth.user.username}/>


                <SideNav
                    onSelect={(selected) => {
                        if (selected === 'home') {
                            this.props.history.push('dashboard');
                            console.log('ddddddddddddddddddddddddddddd')
                        } else {
                            this.props.history.push('services');
                        }
                    }}
                    style={{backgroundColor: '#55407d'}}
                >
                    <SideNav.Toggle/>
                    <SideNav.Nav defaultSelected="home">
                        <NavItem eventKey="home">

                            <NavIcon>
                                <i className="fa fa-fw fa-home" style={{fontSize: '1.75em'}}/>
                            </NavIcon>
                            <NavText>
                                Home
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="services">
                            <NavIcon>
                                <i className="fa fa-fw fa-line-chart" style={{fontSize: '1.75em'}}/>
                            </NavIcon>
                            <NavText>
                                Services
                            </NavText>
                        </NavItem>
                    </SideNav.Nav>
                </SideNav>


                <section className="sectionpadding10050 featured-properties-area">
                    <div style={{position: 'absolute', right: '4px', textAlign: 'right'}}>
                        <FloatingMenu
                            slideSpeed={500}
                            direction="left"

                            spacing={8}
                            isOpen={this.state.isOpen}
                        >
                            <MainButton
                                iconResting={<Ne style={{fontSize: 45}} nativeColor="white"/>}
                                iconActive={<MdClose style={{fontSize: 40}} nativeColor="white"/>}
                                backgroundColor="#55407d"
                                onClick={() => this.setState({isOpen: !this.state.isOpen})}
                                size={70}
                            />
                            <ChildButton

                                icon={<Link to={{ pathname: '/servicemaker', state: { foo: 'builder'} }} style={{color : 'white', textAlign: 'center' }}>Builder</Link>}
                                backgroundColor="#f44336"
                                size={60}
                                onClick={() => console.log('First button clicked')}
                            />
                            <ChildButton
                                icon={<Link to={{ pathname: '/servicemaker', state: { foo: 'repair'} }} style={{color : 'white', textAlign: 'center'}}>Repair</Link>}
                                backgroundColor="#f44336"
                                size={60}
                                onClick={() => console.log('First button clicked')}
                            />
                            <ChildButton
                                icon={<Link to={{ pathname: '/servicemaker', state: { foo: 'leasing'} }} style={{color : 'white', textAlign: 'center'}}>Leasing</Link>}
                                backgroundColor="#f44336"
                                size={60}
                                onClick={() => console.log('First button clicked')}
                            />
                            <ChildButton
                                icon={<Link to={{ pathname: '/servicemaker', state: { foo: 'advertising'} }} style={{color : 'white', textAlign: 'center'}}>Ads</Link>}
                                backgroundColor="#f44336"
                                size={60}
                                onClick={() => console.log('First button clicked')}
                            />
                        </FloatingMenu>


                    </div>

                    <div className="row justify-content-center" style={{margin: '32px'}}>

                        <IconButton aria-label="Sort By :"
                                    aria-owns={open ? 'long-menu' : undefined}
                                    aria-haspopup="true"
                                    onClick={this.handleClickFi}>
                            <div className="row" >
                                <h3 style={{color : '#f44336', textAlign: 'center'}}> Sort By :</h3>
                                <h3 style={{paddingLeft: '15px', paddingRight: '15px', color : '#f44336', textAlign: 'center'}}>{this.label}</h3>
                                <FilterList style={{height: '20px', width: '20px',color : '#f44336', textAlign: 'center'}}/>

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
                                <MenuItem key={option} selected={option === 'Show All Service'}
                                          onClick={() => this.handleClose(option)}>
                                    {option}
                                </MenuItem>
                            ))}
                        </Menu>

                        {service}

                    </div>


                </section>
                <MuiThemeProvider theme={theme}>
                    <CssBaseline/>
                    <Pagination
                        limit={1}
                        offset={this.state.offset}
                        total={100}
                        size="large"
                        onClick={(e, offset) => this.handleClick(offset)}
                    />
                </MuiThemeProvider>

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