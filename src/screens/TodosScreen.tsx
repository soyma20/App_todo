import {Pressable, StyleSheet, Text, View} from 'react-native';
import {FC} from 'react';
import {Todos} from '../components';

const TodosScreen: FC = () => {
  return (
    <View style={styles.tasksWrapper}>
      <Text style={styles.sectionTitle}>Todos</Text>
      <View style={styles.container}>
        <View style={styles.buttonsContainer}>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Prev page</Text>
          </Pressable>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Next page</Text>
          </Pressable>
        </View>
        <Todos />
        <View style={styles.buttonsContainer}>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Prev page</Text>
          </Pressable>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Next page</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
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
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
  },
  button: {
    width: 100,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 10,
    alignItems: 'center',
    margin: 5,
  },
  buttonText: {
    color: '#55BCF6',
    textTransform: 'uppercase',
  },
});

export {TodosScreen};
