import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Modal from '../components/Modal'
import Aux from '../components/hoc/Auxliary'
import Register from '../components/Register'
import SideBar from '../components/SideBar';
import axios from 'axios';
import Popup from "reactjs-popup";
import Offer from '../components/Offer';

class Property_single extends Component {

    
    state = {
        bien_id : 0,
        bien : 0
      }

      constructor(props){
        super(props);
        this.state.bien_id = this.props.match.params.id ;
      }

      componentDidMount() {
        axios.get(`https://localhost:22/users`)
          .then(res => {
            const res_obj = res.data;
            this.setState({ bien:res_obj });
          })
      }
    

	render() {
		return (
         <Aux>
                <Modal>
                    <Register />
                </Modal>
                <Header ordered={this.purchaseHandler} />
                <SideBar type="AdvancedSearch"/>

             <h3>   id offre :   {this.state.bien_id}</h3>
              
                 <Popup trigger={<button> Make offer</button>} position="right center" modal>
                   
                   
                  <Offer client_id={'1'} agency_id={'2'} service_id={'3'} />

                </Popup>
                
                <Footer />
         </Aux>
            
          
		);
	}
}

export default Property_single;
