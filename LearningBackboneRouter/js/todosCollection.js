import Backbone from 'backbone';

let todosCollection = Backbone.Collection.extend({

parse: function(data){
  return data.results;
}

});