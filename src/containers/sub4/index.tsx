import {connect} from 'react-redux';
import {EXAMPLE_ACTION} from '../constants';
import {createStructuredSelector} from 'reselect';
import * as React from 'react';
import {Link} from 'react-router-dom';

import { Tooltip } from 'react-tippy';

// import * as styles from './styles.scss';
// import * as TextForStep2 from './TextForStep2';

interface Sub4Props {
}

class Sub4 extends React.Component<Sub4Props, any> {
  constructor() {
    super();
    this.state = {
    };
  }
  public render() {
    return (
      <div>
        For Calculix, the procedure is the same. However, we don't need to set the mapping direction again.
        <br/>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({});

function mapDispatchToProps(dispatch) {
  return {
    example: () => dispatch({type: EXAMPLE_ACTION}),
  };
}

export default connect < any, any, any > (
  mapStateToProps,
  mapDispatchToProps,
)(Sub4);

