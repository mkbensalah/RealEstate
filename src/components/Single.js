import React, { Component } from 'react';
import axios from 'axios';
 

export default class Single extends Component {

    




    render() {
        return (
          
            <div class="site-section" id="property-details">
            <div class="container">
              <div class="row">
                <div class="col-lg-7">
                  <div class="owl-carousel slide-one-item with-dots">
                    <div><img src="/src/assets/images/property_1.jpg" alt="Image" class="img-fluid" /></div>
                    <div><img src="/src/assets/images/property_2.jpg" alt="Image" class="img-fluid" /></div>
                    <div><img src="/src/assets/images/property_3.jpg" alt="Image" class="img-fluid" /></div>
                  </div>
                </div>
                <div class="col-lg-5 pl-lg-5 ml-auto">
                  <div class="mb-5">
                    <h3 class="text-black mb-4">Property Description</h3>
                    <p>Elle comprend 9 pièces au total. Au rez-de-chaussée :</p>
                    <p>Le grenier déjà équipé d'un plancher et de deux  fenêtres  vélux  est accessible par une échelle de meunier et peut-être  encore aménagé.

Le sous-sol se compose d'un espace rangement , d'une pièce chauffée, entièrement insonorisée, destinée à la pratique de la musique,  une salle  de gym et  salle de  ping pong.</p>
                    <p class="mb-4">Un garage de 26 m² avec porte électrique complète le tout. Deux autres places de parking sont possibles dans la cour.</p>
                    <p><a href="#" class="btn btn-primary">Make a deal !</a></p>
                  </div>
      
                  <div class="mb-5">
                    <h3 class="text-black mb-4">Contact Agent</h3>
                    <div class="mt-5">
                      <img src="/src/assets/images/person_8.jpg" alt="Image" class="w-25 mb-3 rounded-circle" />
                      <h4 class="text-black">Hamza Daoues</h4>
                      <p class="text-muted mb-4">Real Estate Agent</p>
                      <p>1er réseau d'agences immobilières en Tunisie et leader européen avec une présence dans 12 pays. Consultez nos annonces en ligne pour l'achat ou la ...</p>
                      <p><a href="#" class="btn btn-primary btn-sm" />Contact Agent</p>
                    </div>
                  </div>
      
                </div>
              </div>
            </div>
          </div>





        )}


}
