import { combineReducers, createStore } from 'redux';
import * as layersAreaReducers from '../app/layers-area/reducers';

export interface Store {
  layersArea: {
    width: number;
  }
}

export const store = createStore<Store>(combineReducers<Store>({
  layersArea: combineReducers<Store['layersArea']>({
    ...layersAreaReducers,
  }),
}));

export default store;
