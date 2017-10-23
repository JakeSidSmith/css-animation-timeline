import { AnyAction } from 'redux';
import { RESIZE_WINDOW } from '../../window/actions';
import { SET_LAYERS_WIDTH } from './actions';

const MIN_WIDTH = 100;
const MAX_WIDTH = 500;

const constrainWidth = (value: number) => Math.max(Math.min(value, MAX_WIDTH, window.innerWidth), MIN_WIDTH);

export const width = (state = constrainWidth(300), action: AnyAction) => {
  switch (action.type) {
    case SET_LAYERS_WIDTH:
      return constrainWidth(action.payload);
    case RESIZE_WINDOW:
      return constrainWidth(state);
    default:
      return state;
  }
};
