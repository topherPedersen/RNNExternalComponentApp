import { Navigation } from 'react-native-navigation';
import App from './App';

//AppRegistry.registerComponent(appName, () => App);

Navigation.registerComponent('com.rnnexternalcomponentapp.WelcomeScreen', () => App);
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'com.rnnexternalcomponentapp.WelcomeScreen'
            }
          }
        ]
      }
    }
  });
});
