import * as React from 'react';

export default class PreviewArea extends React.PureComponent {
  public render () {
    const { children } = this.props;

    return (
      <div className="preview-area">
        {children}
      </div>
    );
  }
}
