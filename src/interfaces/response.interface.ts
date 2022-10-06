import {ITodo} from './todo.interface';

export interface IResponse {
  limit: number;
  skip: number;
  todos: ITodo[];
  total: number;
}
