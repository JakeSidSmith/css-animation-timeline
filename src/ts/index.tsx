import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { connect, Dispatch, Provider } from 'react-redux';
import { store, Store } from './store';

interface Props {
  count: number;
  dispatch: Dispatch<Store>;
}

const increment = () => ({
  type: 'INCREMENT'
});

class App extends React.PureComponent<Props> {
  public render () {
    const { count, dispatch } = this.props;

    return (
      <p>
        Count: {count}
        <button onClick={() => dispatch(increment())}>
          Increment
        </button>
      </p>
    );
  }
}

export const mapStateToProps = (state: Store) => {
  return {
    count: state.counter
  };
}

const ConnectedApp = connect(mapStateToProps)(App);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById('app')
);
