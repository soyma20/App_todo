import {View} from 'react-native';
import {FC} from 'react';

import {useAppSelector} from '../../hook';
import {Todo} from '../Todo/Todo';

const Todos: FC = () => {
  const {todos} = useAppSelector(state => state.todoReducer);

  return (
    <View>
      {todos.map(todo => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </View>
  );
};

export {Todos};
