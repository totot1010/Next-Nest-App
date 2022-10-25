import { Body, Controller, Get, Post } from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './todo.model';

@Controller('todo')
export class TodoController {
  constructor(private readonly TodoService: TodoService) {}
  @Get()
  findAll() {
    return this.TodoService.findAll();
  }

  @Post()
  create(@Body('name') name: string): Todo {
    const todo: Todo = {
      name,
    };
    return this.TodoService.create(todo);
  }
}
