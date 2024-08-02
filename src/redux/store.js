import { createStore, combineReducers } from 'redux';
import { gameReducer } from './reducers/game-reducer';

const rootReducer = combineReducers({
   game: gameReducer,
});

const store = createStore(rootReducer);

export default store;
