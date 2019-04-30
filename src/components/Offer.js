import React, { Component } from 'react';
import Aux from './hoc/Auxliary';

class Offer extends Component {
    
 

    render(){
        return (
       <Aux>
         <div>
             {this.props.client_id}
         </div>  
       </Aux>  
        )
    }
        
}


export default Offer;
