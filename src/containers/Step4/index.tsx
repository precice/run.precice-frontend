import {connect} from 'react-redux';
import {EXAMPLE_ACTION} from '../constants';
import {createStructuredSelector} from 'reselect';
import * as React from 'react';
import {Link} from 'react-router-dom';
import * as styles from './styles.scss';
import * as exampleGraph from '../../static/visualization.png';

interface Step4Props {
}


class Step4 extends React.Component<Step4Props, undefined> {

  public render() {
    return (
      <div className={styles.subContainer}>
        <div className={styles.expContainer}>
          <div className={styles.expHeader}>
            what to do
          </div>
        </div>
        <div className={styles.visialize}>
          <div className={styles.visialHeader}>
            Visualization
            <img src={exampleGraph} className={styles.graph} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({});

export default connect<any, any, any>(
  mapStateToProps,
)(Step4);
