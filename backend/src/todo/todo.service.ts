import { Injectable } from '@nestjs/common';
import { Todo } from './todo.model';

@Injectable()
export class TodoService {
  private todos: Todo[] = [];
  findAll() {
    return 'this is toodService';
  }

  create(todo: Todo): Todo {
    this.todos.push(todo);
    return todo;
  }
}
