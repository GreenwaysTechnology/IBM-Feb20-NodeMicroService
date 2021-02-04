const TODOS = require('../mock-data/todos');

class TodoService {
    constructor() {
    }
    listTodos() {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 5000, TODOS);
        });
    }
    save(todo){
      //todo: save it
      console.log(todo);
    }
 
}

module.exports = new TodoService();

