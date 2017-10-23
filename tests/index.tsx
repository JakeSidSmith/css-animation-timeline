import * as React from 'react';
import { Provider } from 'react-redux';
import * as renderer from 'react-test-renderer';
import App from '../src/ts/app';
import { store } from '../src/ts/store';

describe('App', () => {

  it('should match snapshot', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(tree).toMatchSnapshot();
  });

});
