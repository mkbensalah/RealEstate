import React, { Component } from 'react';
import axios from 'axios';


import Aux from './hoc/Auxliary';
import style from '../components/listing_style/style.css' ; 


class Offers extends Component {

  
  constructor(props) {
    super(props);
    this.state = {
      list: [
               {"id" : 1 , "adresse" : 'bizerte' , "prix" : 600 , "meuble" : true ,"HS" : true , "surface" : 300},
               {"id" : 2 , "adresse" : 'tunis',  "prix" : 500 , "meuble" : true , "HS" : false , "surface" : 400}
            ],
      filtred:[
               {"id" : 1 , "adresse" : 'bizerte' , "prix" : 600 , "meuble" : true ,"HS" : true , "surface" : 300},
               {"id" : 2 , "adresse" : 'tunis',  "prix" : 500 , "meuble" : true , "HS" : false , "surface" : 400}
     ],    
     filtre:{
       "pattern" : "", 
       "meuble" : false , 
       "HS" : false,
       "nb_chambre" : '0'
     }
    };
    this.handleChange = this.handleChange.bind(this);
 
  }

  handleChange(e) {
    // Variable to hold the original version of the list
let currentList = [];
    // Variable to hold the filtered list before putting into state
let newList = [];
    
    // If the search bar isn't empty

  if (e.target.id=="HS") this.state.filtre.HS=!(this.state.filtre.HS) ;
  if (e.target.id=="meuble") this.state.filtre.meuble=!(this.state.filtre.meuble) ;
  if (e.target.id=="adresse") this.state.filtre.pattern = (e.target.value);
     // Assign the original list to currentList
  currentList = this.state.list;      
        // Use .filter() to determine which items should be displayed
        // based on the search terms
  newList = currentList.filter(val => {
    const adresse=val.adresse ;
    const meuble = val.meuble;
    const HS = val.HS; 
    // change current item to lowercase
    const lc = adresse.toLowerCase();

            // change search term to lowercase
            console.log(this.state.filtre.pattern);
            if (this.state.filtre.pattern!="")
                     {const filterpattern = this.state.filtre.pattern.toLowerCase();
                      return lc.includes(filterpattern) && (meuble==this.state.filtre.meuble) && (HS==this.state.filtre.HS)  ;
                    }
                    else 
          return  (meuble == this.state.filtre.meuble) && (HS==this.state.filtre.HS)  ;
             
         // check to see if the current list item includes the search term
            // If it does, it will be added to newList. Using lowercase eliminates
            // issues  capitalization in search terms and search content
       
  });

       

    // Set the filtered state based on what our rules added to newList
this.setState({
  filtred: newList
});
}



    render() {
        return (
            <Aux>    
        <div class="container">
 
        <div class="container_list">


          <div class="list_prop"> /** debut listing */
          {this.state.filtred.map(el => (

                 <div class="property">
                 
                   <div class="image_maison">
                      <img src="https://imgs.nestimg.com/houppeville_location_maison_76_111272547698065516.jpg"  />
                   </div>
                  
                   <div class="detail">

                   <div class="btn_datail">
                         <button class="btn btn-default" > Detaille </button>
                        </div>

                        <div class="row">
                           <div class="col-md-1">
                           <h4>{el.prix}DT</h4>     
                           </div>
                        </div>

                        <div class="row">
                            <div class="col-md-2">
                            S+3
                            </div>

                            <div class="col-md-1">
                            &nbsp;
                                   <div class="sep">
                                   </div>
                            </div>
                            
                            <div class="col-md-2">
                            hautstanding 
                            </div>

                            <div class="col-md-1">
                            &nbsp;
                                   <div class="sep">
                                   </div>
                            </div>
                            <div class="col-md-2">
                            Meublé 
                            </div>

                            <div class="col-md-1">
                            &nbsp;
                                   <div class="sep">
                                   </div>
                            </div>
                            <div class="col-md-2">
                            {el.surface}m² 
                            </div>

                        </div>

                        <div class="row">
                        <div class="col-md-8">
                        Adresse : 14 rue monji slim , Menzel Bourguiba.
                        </div>
                        </div>
                        
                        

                   </div> 

                 </div>
          ))}
            <hr></hr>


 <br></br>
 <div class="row mt-4">
          <div class="col-md-9">
            <div class="custom-pagination text-center">
              <span>1</span>
              <a href="#">2</a>
              <a href="#">3</a>
              <span class="more-page">...</span>
              <a href="#">7</a>
            </div>
            
          </div>
        </div>
 
        /** fin listing */  </div>  


         <div class="filtre">
       
         <form>

  <div class="form-group">
      <label for="adresse" >Adresse </label>
      <input type="text" onChange={this.handleChange} id="adresse" class="form-control" />
  </div>  
 
  <div class="form-check">
    <input type="checkbox" onChange={this.handleChange} id="HS" />
    <label class="form-check-label" for="exampleCheck1" >hautstanding</label>
  </div>

  <div class="form-check">
    <input type="checkbox" onChange={this.handleChange}  id="meuble" />
    <label class="form-check-label" for="exampleCheck1">meublé</label>
  </div>

  <div class="form-group">
    <label for="exampleFormControlSelect1">Nombre de chambres</label>
    <select class="form-control" id="nbchambre">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>

         

          /** fin filtre */ </div>     
         
          
      </div>

    

      </div>


            </Aux >
        )
    }
}

export default Offers;
