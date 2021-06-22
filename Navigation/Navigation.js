import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import NearPostFeed from '../Screens/NearPostFeed';
import Camera from '../Components/Camera';
import PicUpload from '../Screens/PicUpload';
import Profile from '../Screens/Profile';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="NearPostFeed" component={NearPostFeed} />
        <Stack.Screen name="Camera" component={Camera} />
        <Stack.Screen name="PicUpload" component={PicUpload} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
