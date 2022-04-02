import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';
import {getSorcerer} from '../../actions/poudlard';

const Trombi = () => {
  const [offset, setOffset] = useState(0);
  const characters = useSelector(state => state.poudlard.characters);
  console.log('Je suis characters = ', characters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSorcerer(offset));
  }, [offset]);

  return (
    <Component>
      {characters.map(c => (
        <Text>{c.name}</Text>
      ))}
      <TouchableOpacity onPress={() => setOffset(offset + 10)}>
        <Text>+</Text>
      </TouchableOpacity>
    </Component>
  );
};

const TouchableOpacity = styled.TouchableOpacity`
`;
const Text = styled.Text``;

const Component = styled.ScrollView`
`;

export default Trombi;
