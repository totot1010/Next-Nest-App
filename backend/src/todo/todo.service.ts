import { Injectable } from '@nestjs/common';

@Injectable()
export class TodoService {
  findAll() {
    return 'this is toodService';
  }
}
