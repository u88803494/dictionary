import { reducer as counter } from './counter/counter.slice';
import { reducer as dictionary } from './dictionary/dictionary.slice';

const reducers = {
  counter,
  dictionary,
};

export default reducers;
