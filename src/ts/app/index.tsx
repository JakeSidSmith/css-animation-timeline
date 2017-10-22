import * as React from 'react';
import LayersArea from './layers-area';
import PreviewArea from './preview-area';
import TimelineArea from './timeline-area';

export default class App extends React.PureComponent {
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
