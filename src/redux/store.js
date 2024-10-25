import { createStore } from 'redux';
import bookingReducer from './reducers';

const store = createStore(bookingReducer);

export default store;