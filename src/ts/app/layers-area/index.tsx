import * as React from 'react';
import { connect } from 'react-redux';
import { Store } from '../../store';

type Props = Only<Store['layersArea'], 'width'>;

export class LayersArea extends React.PureComponent<Props> {
  public render () {
    const { children, width } = this.props;

    return (
      <div className="layers-area" style={{width}}>
        {children}
      </div>
    );
  }
}

export const mapStateToProps = ({layersArea: {width}}: Store) => {
  return {
    width
  };
}

export default connect(mapStateToProps)(LayersArea);
