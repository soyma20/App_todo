import {StyleSheet, Text, View} from 'react-native';
import {FC} from 'react';

const TodoScreen: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>reacttttttt</Text>
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
  title: {
    fontSize: 20,
    textAlign: 'center',
  },
});

export {TodoScreen};
