const mockApp = () => {
  // Require the un-mocked module to prevent infinite loop
  const original = require.requireActual('../src/ts/app');
  const { App: OriginalApp } = original;

  // Construct a mock from a combination of the original module & a new default
  return {
    ...original,
    // Prepropulate our mock
    default: (props) => <OriginalApp {...props} count={5} />
  };
};

// We have to keep our mock function outside of this context so jest doesn't complain
jest.mock('../src/ts/app', () => mockApp());

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
