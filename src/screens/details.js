import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {Text, View} from 'react-native';

import {useSelector} from 'react-redux';

const Details = ({navigation}) => {
  const counterValue = useSelector(state => state.counter.counterValue);
  return (
    <ViewContainer>
      <Text>{counterValue}</Text>
    </ViewContainer>
  );
};

const ViewContainer = styled.View`
  height: 800px;
  justify-content: center;
  align-items: center;
`;

export default Details;
