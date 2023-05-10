import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from '@instabug-react-native-monorepo/shared';

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello from Instabug{'\n'}ft. monorepo!</Text>
      <Button
        onPress={() => {
          // TODO: Add Instabug
        }}>
        Show Instabug
      </Button>
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
