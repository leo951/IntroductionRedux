import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {Text, View} from 'react-native';

import Counter from '../components/counter';
import Trombi from '../components/trombi';

const Home = ({navigation}) => {
  return (
    <ViewContainer>
      {/* <Counter /> */}
      <Trombi />
    </ViewContainer>
  );
};

const ViewContainer = styled.View`
  height: 800px;
  justify-content: center;
  align-items: center;
`;

export default Home;
