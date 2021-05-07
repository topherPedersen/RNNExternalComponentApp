/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>RNNExternalComponentApp</Text>
        <Button
          title="Launch RNN ExternalComponent" 
          onPress={ () => this.launchExternalComponent() } />
      </SafeAreaView>
    );
  }

  launchExternalComponent() {
    alert("TODO: Create an ExternalComponent to launch...");
  }
}

export default App;
