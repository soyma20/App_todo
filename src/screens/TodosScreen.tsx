import {StyleSheet, Text, View} from 'react-native';
import {FC} from 'react';
import {Todos} from '../components';

const TodosScreen: FC = () => {
  return (
    <View style={styles.tasksWrapper}>
      <Text style={styles.sectionTitle}>Todos</Text>
      <View style={styles.container}>
        <Todos />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 150,
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'black',
  },
});

export {TodosScreen};
