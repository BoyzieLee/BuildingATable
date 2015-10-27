import Backbone from 'Backbone';

let todoModel = Backbone.Model.extend( {

  urlRoot: 'https://api.parse.com/1/class/Todo',


  model: TodoModel,
  
  parse: function(data) {
    return data.results;
  }
});

export default TodoCollections;