import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeStack from '../routes/homeStack';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeStack" component={HomeStack} />
    </Stack.Navigator>
  );
};

export default Routes;
