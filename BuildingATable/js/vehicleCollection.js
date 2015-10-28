import Backbone from 'backbone';
import VehicleModel from './vehicleModel';

// Collectin is responsible for laoding all the data
let vehicleCollection = Backbone.Collection.extend({
  
  url: 'https://api.parse.com/1/classes/Vehicle',

  model: VehicleModel,

  parse: function(data) {
    return data.results;
  }

});

export default vehicleCollection;