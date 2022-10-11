import {StyleSheet, View} from 'react-native';
import {FC, useEffect} from 'react';

import {useAppDispatch, useAppSelector} from '../../hook';
import {Todo} from '../Todo/Todo';
import {todoActions} from '../../redux/slices';

const Todos: FC = () => {
  const {response} = useAppSelector(state => state.todoReducer);
  let dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(todoActions.getAll(0));
    console.log(todoActions.getAll(0));
  }, [dispatch]);

  return (
    <View style={styles.container}>
      {response.todos.map(todo => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
});

export {Todos};
