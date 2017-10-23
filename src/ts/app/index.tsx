import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { Store } from '../store';
import { resizeWindow } from '../window/actions';
import LayersArea from './layers-area';
import PreviewArea from './preview-area';
import TimelineArea from './timeline-area';

interface Props {
  dispatch: Dispatch<Store>;
}

export class App extends React.PureComponent<Props> {
  private resizeWindow: () => void;

  public constructor (props: Props) {
    super(props);

    this.resizeWindow = () => props.dispatch(resizeWindow());
  }

  public componentDidMount () {
    window.addEventListener('resize', this.resizeWindow);
  }

  public componentWillUnmount () {
    window.removeEventListener('resize', this.resizeWindow);
  }

  public render () {
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

export default connect()(App);
