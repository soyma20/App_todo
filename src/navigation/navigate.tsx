import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {TodoScreen, TodosScreen} from '../screens';

const Stack = createStackNavigator();

const Navigate: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Main" component={TodosScreen} />
        <Stack.Screen name="SingleTodo" component={TodoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export {Navigate};
