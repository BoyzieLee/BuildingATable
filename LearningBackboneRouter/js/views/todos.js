function TodosView(collection) {
  this.collection = collection;
}

TodosView.prototype = {
  render: function(){
    return `
    <h2>Something Todo</h2>
    `;
  }
}

export defualt todosView;