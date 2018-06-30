angular.module('todoApp', [])
  .controller('TodoListController', function($http) {
    var todoList = this;

    this.onInit = $http.get('https://localhost:44307/api/todo')
    .then(response => {
      todoList.todos = []
      response.data.forEach(td => todoList.todos.push(td));
    });

    todoList.addTodo = function() {
      todoList.todos.push({text:todoList.todoText, isCompleted:false});
      todoList.todoText = '';
    };
 
    todoList.remaining = function() {
      var count = 0;
      angular.forEach(todoList.todos, function(todo) {
        count += todo.isCompleted ? 0 : 1;
      });
      return count;
    };
 
    todoList.archive = function() {
      var oldTodos = todoList.todos;
      todoList.todos = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.isCompleted) todoList.todos.push(todo);
      });
    };
  });