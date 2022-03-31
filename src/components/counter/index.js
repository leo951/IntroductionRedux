import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';
import {decrementCounter, incrementCounter} from '../../actions/counter';
const Counter = () => {
  // const [counter, setCounter] = useState([])

  const counterValue = useSelector(state => state.counter.counterValue);
  const dispatch = useDispatch();

  return (
    <View>
      <View>
        <View>
          <Text>{counterValue}</Text>
        </View>
      </View>
      <View>
        <View>
          <Text onPress={() => dispatch(decrementCounter())}>-</Text>
        </View>
        <View>
          <Text onPress={() => dispatch(incrementCounter(100))}>+</Text>
        </View>
      </View>
    </View>
  );
};

export default Counter;
