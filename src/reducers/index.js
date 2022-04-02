import {combineReducers} from 'redux';

import counter from './counter';
import poudlard from './poudlard';

export default combineReducers({
  counter,
  poudlard
});
