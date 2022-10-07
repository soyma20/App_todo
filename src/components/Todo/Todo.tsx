import {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {ITodo} from '../../interfaces';

interface IProps {
  todo: ITodo;
  text: string;
}

const Todo: FC<IProps> = ({todo, text}) => {
  console.log(todo.todo);
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square} />
        <Text style={styles.todoText}>
          {text.toString()}
          {todo.todo.toString()}
        </Text>
      </View>
      <View style={styles.circular} />
    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  todoText: {
    maxWidth: '80%',
    color: 'black',
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 5,
  },
});
export {Todo};
