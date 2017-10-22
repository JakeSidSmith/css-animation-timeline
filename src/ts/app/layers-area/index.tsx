import * as React from 'react';

export default class LayersArea extends React.PureComponent {
  public render () {
    const { children } = this.props;

    return (
      <div className="layers-area">
        {children}
      </div>
    );
  }
}
