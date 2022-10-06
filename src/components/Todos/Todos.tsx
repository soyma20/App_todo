import {Text, View} from 'react-native';
import {FC, useEffect} from 'react';

import {useAppDispatch, useAppSelector} from '../../hook';
// import {Todo} from '../Todo/Todo';
import {todoActions} from '../../redux/slices';
import {todoService} from '../../services';

const Todos: FC = () => {
  const {response} = useAppSelector(state => state.todoReducer);
  let dispatch = useAppDispatch();
  // let [todos, setTodos] = useState([]);
  useEffect(() => {
    dispatch(todoActions.getAll);
    console.log(todoService.getAll());
  }, [dispatch, response]);
  return (
    <View>
      <Text>I am working!!!!!!!!!!!!!!</Text>
      {/*{todos.map(todo => (*/}
      {/*  <Todo todo={todo} key={todo.id} />*/}
      {/*))}*/}
    </View>
  );
};

export {Todos};
