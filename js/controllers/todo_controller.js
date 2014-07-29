Todos.TodoController = Ember.ObjectController.extend({
  actions: {
    editTodo: function() {
      this.set('isEditing', true);
    }
  },

  isEditing: false,

  isCompleted: function(key, value){
    var model = this.get('model');
    // getter
    if (value === undefined) {
      return model.get('isCompleted');
    } else {
      // setter
      model.set('isCompleted', value);
      model.save();
      return value;
    }
  }.property('model.isCompleted')
});
