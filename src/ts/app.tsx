import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { Store } from './store';

interface Props {
  count: number;
  dispatch: Dispatch<Store>;
}

const increment = () => ({
  type: 'INCREMENT'
});

export class App extends React.PureComponent<Props> {
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

export default connect(mapStateToProps)(App);
