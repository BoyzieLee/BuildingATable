import Backbone from 'backbone';
// when creating a Backbone app, you only should use one router.
// using multiple routers will cause the app to break.

import todosCollection from './todosCollection';
window.todosCollection = todosCollection;

let Router = Backbone.Router.extend({

  // define your routs
  routes: {
    ""      : "home",
    "todos" : "showTodos",
    "about" : "showAbout"
  },

  initialize: function(appElement) {
    this.$el = appElement;


  },

  // now that the routs are deined, you need to define the fuctions.
  home: function() {
    console.log('show home page');
    this.$el.html('Home page coming soon...');
  },

  showTodos: function() {
    console.log('show todos page');
    this.$el.html('Coming soon, something Todo...');
    
    this.todos.fetch().then(function(){
      this.$el.html(todosTemplate(this.todos.toJSON()) );
    });

    this.todos = new todosCollection();

  },

  showAbout: function() {
    console.log('show about page');
  },

  start: function(){
    Backbone.history.start();
  }

});

export default Router;