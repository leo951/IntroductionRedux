import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {Text, View} from 'react-native';

import Counter from '../components/counter';

const Home = ({navigation}) => {
  console.log('Je suis dans Home');
  return (
    <ViewContainer>
      <Counter />
    </ViewContainer>
  );
};

const ViewContainer = styled.View`
  height: 800px;
  justify-content: center;
  align-items: center;
`;

export default Home;
