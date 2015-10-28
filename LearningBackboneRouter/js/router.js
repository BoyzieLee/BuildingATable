import Backbone from 'backbone';
import $ from 'jquery';

import TodosCollection from './todos_collection';

import homeTemplate from './views/home';
import todosTemplate from './views/todosTemplate';

let Router = Backbone.Router.extend({

  // says were on the home page, let find the 'home' method,
  // which is defined below.
  routes: {
    ""      : "home",
    "todos" : "showTodos",
    "todos/:id" : "showIndivualTodo",
    "about" : "showAbout"
  },

  initialize: function(appElement) {
    // el is a property
    this.$el = appElement;

    this.todos = new TodosCollection();

    this.$el.on('click', '.todo-list-item', function(event){
      let $li = $(event.currentTarget);
      var todoId = $le.data('todo-id');
      router.navigate('todos/${todoId');
      router.showSpecificTodo(todo);
      console.lot('showTodoId', todoId);
    });
  },

  home: function() {
    console.log('show home page');
    this.$el.html( homeTemplate() );
  },

  showSpinner: function() {
    this.$el.html(
      '<i class="fa fa-spinner fa-spin"></i>'
    );
  },

  showIndivualTodo: function(todoId) {
    console.log('should show', todoId);
  },

  showTodos: function() {
    console.log('show todos page');
    
    this.showSpinner();

    var router = this;

    this.todos.fetch().then(function(){

      router.$el.html( todosTemplate(router.todos.toJSON()) );

    });

  },

  showAbout: function() {
    console.log('show about page');
  },
  // this just looks for start intervals 
  start: function() {
    Backbone.history.start();
  }

});

export default Router;