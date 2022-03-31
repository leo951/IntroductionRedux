import {DECREMENT_COUNTER, INCREMENT_COUNTER} from '../actions/counter';

const initialState = {
  counterValue: 0,
};

//state = initialState signifie en ES6
//qui si state = undefined alors state = initialState
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        counterValue: state.counterValue + action.payload,
      };

      case DECREMENT_COUNTER:
        return {
          ...state,
          counterValue: state.counterValue - 1,
        };
    default:
      return state;
  }
};
