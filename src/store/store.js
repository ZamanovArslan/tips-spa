import { createStore } from 'redux';
import alertReducer from './reducers/alertReducer'

const store = createStore(alertReducer);

export default store;