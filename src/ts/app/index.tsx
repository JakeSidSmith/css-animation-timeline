import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { Store } from '../store';
import LayersArea from './layers-area';
import PreviewArea from './preview-area';
import TimelineArea from './timeline-area';

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
      <div className="app">
        <PreviewArea>
          Preview area
        </PreviewArea>
        <LayersArea>
          Layers area
        </LayersArea>
        <TimelineArea>
          Timeline area
        </TimelineArea>
      </div>
    );
  }
}

export const mapStateToProps = (state: Store) => {
  return {
    count: state.counter
  };
}

export default connect(mapStateToProps)(App);
