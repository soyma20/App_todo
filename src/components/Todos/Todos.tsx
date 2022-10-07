import {StyleSheet, View} from 'react-native';
import {FC, useEffect} from 'react';

import {useAppDispatch, useAppSelector} from '../../hook';
import {Todo} from '../Todo/Todo';
import {todoActions} from '../../redux/slices';

const Todos: FC = () => {
  const {
    response: {todos},
  } = useAppSelector(state => state.todoReducer);

  let dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(todoActions.getAll());
    console.log(todoActions.getAll());
  }, [dispatch]);

  return (
    <View>
      <View style={styles.container}>
        {todos.map(todo => (
          <Todo text={todo.todo} todo={todo} key={todo.id} />
        ))}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export {Todos};
