import {FC} from 'react';
import {Text, View} from 'react-native';

import {ITodo} from '../../interfaces';

interface IProps {
  todo: ITodo;
}
const Todo: FC<IProps> = ({todo: {id, todo, userId, completed}}) => {
  return (
    <View>
      <Text>id: {id}</Text>
      <Text>{todo}</Text>
      <Text>userId:{userId}</Text>
      <Text>completed:{completed}</Text>
    </View>
  );
};

export {Todo};
