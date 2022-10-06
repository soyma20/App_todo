import React from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import {Provider as ReduxProvider} from 'react-redux';

import {setupStore} from './src/redux';
import {Todos} from './src/components';

const store = setupStore();

const App = () => {
  return (
    <ReduxProvider store={store}>
      <SafeAreaView>
        <StatusBar />
        <Text>I am working!!!!!</Text>
        <View>
          <Todos />
        </View>
      </SafeAreaView>
    </ReduxProvider>
  );
};

export default App;
