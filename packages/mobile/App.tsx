import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from '@instabug-react-native-monorepo/shared';
import Instabug, {InvocationEvent} from 'instabug-reactnative';

const App: React.FC = () => {
  useEffect(() => {
    Instabug.init({
      token: 'deb1910a7342814af4e4c9210c786f35',
      invocationEvents: [InvocationEvent.floatingButton],
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello from Instabug{'\n'}ft. monorepo!</Text>
      <Button onPress={Instabug.show}>Show Instabug</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    color: 'black',
    marginBottom: 30,
    textAlign: 'center',
  },
});

export default App;
