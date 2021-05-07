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
  Platform,
} from 'react-native';
import { Navigation } from 'react-native-navigation';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>RNNExternalComponentApp (WelcomeScreen)</Text>
        <Button
          title="Launch RNN ExternalComponent" 
          onPress={ () => this.launchExternalComponent() } />
      </SafeAreaView>
    );
  }

  launchExternalComponent() {
    Navigation.showModal({
      externalComponent: {
        name: 'RNNCustomComponent',
        passProps: {
          text: "Text from JS"
        }
      }
    });
  }
}

export default App;
