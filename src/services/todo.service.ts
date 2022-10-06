import {AxiosResponse} from 'axios';

import {ITodo} from '../interfaces';
import {axiosService} from './axios.service';
import {urls} from '../constants';

export type Res<T> = Promise<AxiosResponse<T>>;
const todoService = {
  create: (todo: ITodo): Res<ITodo> =>
    axiosService.post(urls.todos + '/add', todo),
  getAll: (): Res<ITodo[]> => axiosService.get(urls.todos),
  getById: (id: string): Res<ITodo> =>
    axiosService.get(`${urls.todos} +/+ ${id}`),
  updateById: (id: string, todo: ITodo): Res<ITodo> =>
    axiosService.put(`${urls.todos} +/+ ${todo}`),
  deleteById: (id: string): Res<void> =>
    axiosService.delete(`${urls.todos} +/+ ${id}`),
};

export {todoService};
