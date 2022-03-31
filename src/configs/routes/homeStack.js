import React from 'react';
import styled from 'styled-components';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../../screens/home';
import Details from '../../screens/details';

const Bottom = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Bottom.Navigator screenOptions={{headerShown: false}}>
      <Bottom.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => (
            <Icon
              source={{
                uri: 'https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/000000/external-home-essentials-tanah-basah-basic-outline-tanah-basah-2.png',
              }}
            />
          ),
        }}
      />
      <Bottom.Screen
        name="Details"
        component={Details}
        options={{
          tabBarIcon: () => (
            <Icon
              source={{
                uri: 'https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/000000/external-home-essentials-tanah-basah-basic-outline-tanah-basah-2.png',
              }}
            />
          ),
        }}
      />
    </Bottom.Navigator>
  );
};

const Icon = styled.Image`
  width: ${25}px;
  height: ${25}px;
`;

export default HomeStack;
