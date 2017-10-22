import * as React from 'react';

export default class TimelineArea extends React.PureComponent {
  public render () {
    const { children } = this.props;

    return (
      <div className="timeline-area">
        {children}
      </div>
    );
  }
}
