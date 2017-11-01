import {connect} from 'react-redux';
import {EXAMPLE_ACTION} from '../constants';
import {createStructuredSelector} from 'reselect';
import * as React from 'react';
import {Link} from 'react-router-dom';

import * as styles from '../sub1/styles.scss';
import { Tooltip } from 'react-tippy';

// import * as styles from './styles.scss';
// import * as TextForStep2 from './TextForStep2';

interface Sub5Props {
}

class Sub5 extends React.Component<Sub5Props, any> {
  constructor() {
    super();
    this.state = {
    };
  }
  public render() {
    return (
      <div>
        Now, we can set the way to communicate the two solvers to each other.
        <br/><br/>
        preCICE provides different options for communication (see the <a href="https://github.com/precice/precice/wiki/XML-Reference">XML reference</a>).
        Here, we use TCP/IP socket communication.
        <br/><br/>
        <li>
          <span className={styles.highlight}>from</span>: Name of the first participant involved in communication. This is the one that initiates communication.
          <Tooltip
            trigger="click"
            width="100"
            interactive
            html={(
              <div>
                For the most of the cases, it makes no difference which participant initiates the communication.
              </div>
            )}
          >
            <span className="fa fa-question-circle" style={{ fontSize: '18px' }}/>&nbsp;
          </Tooltip>
        </li>
        <br/>
        <li>
          <span className={styles.highlight}>to</span>: Name of the second participant involved in communication.
        </li>
        <br/>
        <li>
          <span className={styles.highlight}>distribution-type</span>: Please set this option to <span className={styles.highlight}>gather-scatter</span> if at least one participant runs in serial.
          <br/>If both participants run in parallel, communication is more efficient if you set the option to <span className={styles.highlight}>point-to-point</span>
        </li>
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
  mapDispatchToProps
)(Sub5);

