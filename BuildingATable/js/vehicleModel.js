import Backbone from 'backbone';

let vehicleModel = Backbone.Model.extend({
  urlRoot: 'https://api.parse.com/1/classes/Vehicle',
  idAttribute:'objectId'
});

export default vehicleModel;