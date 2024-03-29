(function() {
    'use strict';

    // two way date binding (to UI)

    var vm = new Vue({
        el: '#app' ,
        data: {
            newItem: '',
            todos: [{
                title: 'task1',
                isDone: false

            }, {
                title: 'task2',
                isDone: false 
            },  {
                title: 'task3',
                isDone: false

            } ]
        },
        methods: {
            addItem: function() {
                var item = {
                    title: this.newItem,
                    isDone: false
                };
                this.todos.push(item);
                this.newItem = '';
            },  
            deleteItem: function(index) {
                if (confirm('are you sure?')) {
                this.todos.splice(index, 1);
                }
            }  
        }
    })
  })();