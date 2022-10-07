import {ITodo} from './todo.interface';

export interface IResponse {
  todos: ITodo[];
  total: number;
  skip: number;
  limit: number;
}
