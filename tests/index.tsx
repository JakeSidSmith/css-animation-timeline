import * as React from 'react';
import * as renderer from 'react-test-renderer';
import App from '../src/ts/app';

describe('App', () => {

  it('should match snapshot', () => {
    const tree = renderer.create(
      <App />
    );

    expect(tree).toMatchSnapshot();
  })

});
