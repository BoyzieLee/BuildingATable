import Backbone from 'backbone';
import homeTemplate from './views/home';
import todosView form './views/todos';
// when creating a Backbone app, you only should use one router.
// using multiple routers will cause the app to break.
let Router = Backbone.Router.extend({
  // define your routs
  routes: {
    ""      : "home",
    "todos" : "showTodos",
    "about" : "showAbout"
  },
  //now that the routs are defined, need to define the fuctions.
  home: function() {
    console.log('show home page');
    this.$el.html( homeTemplate() );

  },
  showTodos: function() {
    console.log('show todos page');

    var collection = new Backbone.collection ([
    this.$el.html( todosTemplate() );
      {title: 'Foo'}.,
      {title: 'Bar'}
    ]);
    this.$el.html( todosTemplate(collection.toJSON()) );
  },
  showAbout: function() {
    console.log('show about page');
  },

  start: function(){
    Backbone.history.start();
  }

});

export default Router;