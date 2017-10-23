import { combineReducers, createStore } from 'redux';
import * as layersAreaReducers from '../app/layers-area/reducers';

export interface Store {
  layersAreaWidth: number;
}

export const store = createStore<Store>(combineReducers<Store>({
  ...layersAreaReducers
}));

export default store;
