import React, { Component } from 'react';
import axios from 'axios';
 

export default class listing extends Component {

    

    constructor(props) {
        super(props);
        this.state = {
          list: [
                  
                ],
          filtred:[
                         ],    
         filtre:{
           "meuble" : "all" , 
           "type" : "all",
           "nbchambre" : "all"
         }
        };
       this.handleChange = this.handleChange.bind(this);
     
      }

      componentDidMount() {
        axios.get(`http://localhost:5000/api/property/terrain/all`)
          .then(res => {
            const res_obj = res.data;
           // console.log(res_obj.rows);

           axios.get(`http://localhost:5000/api/property/building/all`)
           .then(res => {
              const newList = res.data.rows ;
            

           res_obj.rows.forEach(function (ele){
                   newList[newList.length]=ele ;
             });
             console.log(newList);

             this.setState({ list:newList , filtred:newList});
           });

          });
          
      }

      handleChange(e) {
        console.log(e) ;
        var a = document.getElementById("meuble");
        var b = a.options[a.selectedIndex].value;
        this.state.filtre.meuble=b ;

         a = document.getElementById("type");
         b = a.options[a.selectedIndex].value;
         this.state.filtre.type=b ;
         
         a = document.getElementById("chambre");
         b = a.options[a.selectedIndex].value;
         this.state.filtre.nbchambre=b ;
         if (this.state.filtre.type=="terrain") {
              this.state.filtre.meuble="all" ;
              this.state.filtre.nbchambre="all" ;
         }
        
         let currentList = [];
         let newList = [];
         currentList = this.state.list ;
         newList= currentList.filter(val=>{
                 return ( (this.state.filtre.meuble=="all" ||  (this.state.filtre.meuble == val.meuble)) && (this.state.filtre.type=="all" || this.state.filtre.type== val.type ) && (this.state.filtre.nbchambre=="all" || this.state.filtre.nbchambre== val.nbchambre)  )
            
         })
         this.setState({
            filtred: newList
          });
      }






    render() {
        return (

            <div class="site-wrap">

    
            <div class="site-section" id="listings-section">
              <div class="container">
                
                <div class="row">
                  <div class="col-md-3 order-1 order-md-2">
                  <div class="mb-5">
                    <h3 class="text-black mb-4 h5 font-family-2">Filter</h3>
                    <form action="#">
                      <div class="form-group">
                        <div class="select-wrap">
                          <span class="icon icon-keyboard_arrow_down"></span>
                          <select class="form-control px-3" onChange={this.handleChange} id="meuble">
                            <option value="all">ALL</option>
                            <option value="1">meuble</option>
                            <option value="0">non meuble</option>
                          </select>
                        </div>
                      </div>
                      <div class="form-group">
                        <div class="select-wrap">
                          <span class="icon icon-keyboard_arrow_down"></span>
                          <select class="form-control px-3" onChange={this.handleChange} id="chambre">
                            <option value="all">ALL</option>
                            <option value="1">S+1</option>
                            <option value="2">S+2</option>
                            <option value="3">S+3</option>

                          </select>
                        </div>
                      </div>
                      <div class="form-group">
                        <div class="select-wrap">
                          <span class="icon icon-keyboard_arrow_down"></span>
                          <select class="form-control px-3" onChange={this.handleChange} id="type">
                            <option value="all">ALL</option>
                            <option value="immeuble">Immeuble</option>
                            <option value="terrain">Terrain</option>
                          </select>
                        </div>
                      </div>
                    </form>
                    </div>
        
                    <div class="mb-5">
                      <h3 class="text-black mb-4 h5 font-family-2">Filter by Price</h3>
                      <div id="slider-range" class="border-primary" onTouchMove={this.handleChange} ></div>
                      <input type="text" name="text" id="amount"  class="form-control border-0 pl-0 bg-white" disabled=""  />
                    </div> 
                  </div>
                  <div class="col-md-9 order-2 order-md-1">

          {this.state.filtred.map(el => (

            <div class="property horizontal d-flex">
                      <div class="mr-3 img-entry">
                        <a href={'single_property'+el.idbien} ><img src={'/src/assets/listing/'+el.idbien+'.jpg'} alt="Image" class="img-fluid" /></a>
                      </div>
                      <div class="prop-details p-3">
                        <div><a href="property-single.html"><strong class="price"> {el.prix} DT </strong></a></div>
                        <div class="mb-2 d-flex justify-content-between">
                          <span class="w border-r">  {el.type=='terrain' ? el.prix_metre + ' dt/m²' :  'S + ' + el.nbchambre } </span> 
                          <span class="w border-r">      {el.type=='terrain' ? el.type_terrain :  (el.meuble==1 ? 'meuble' : 'non meuble') }   </span>
                          <span class="w">{el.surface} m². </span>
                        </div>
                        <div> {el.adresse}</div>
                      </div>
                    </div>



))}
                   
        
                    
                  </div>
                </div>
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
              </div>
            </div>
        
            
        
            
        
          </div> 





        )}


}
