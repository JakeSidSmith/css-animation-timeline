import * as React from 'react';
import { connect } from 'react-redux';
import { Store } from '../../store';

type Props = Only<Store, 'layersAreaWidth'>;

export class LayersArea extends React.PureComponent<Props> {
  public render () {
    const { children, layersAreaWidth: width } = this.props;

    return (
      <div className="layers-area" style={{width}}>
        {children}
      </div>
    );
  }
}

export const mapStateToProps = ({layersAreaWidth}: Store) => {
  return {
    layersAreaWidth
  };
}

export default connect(mapStateToProps)(LayersArea);
