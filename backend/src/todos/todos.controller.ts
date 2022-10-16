import { Controller, Get } from '@nestjs/common';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private readonly TodosService: TodosService) {}
  @Get()
  findAll() {
    return this.TodosService.findAll();
  }
}
