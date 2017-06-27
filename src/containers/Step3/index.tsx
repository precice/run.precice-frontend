import {connect} from 'react-redux';
import {EXAMPLE_ACTION} from '../constants';
import {createStructuredSelector} from 'reselect';
import * as React from 'react';
import {Link} from 'react-router-dom';
import * as styles from './styles.scss';

interface step3Props {
}


class Step3 extends React.Component<step3Props, undefined> {

  public render() {
    return (
      <div className={styles.subContainer}>
        <div className={styles.subsubContainer}>
          <div className={styles.expContainer}>
            <div className={styles.expHeader}>
              what to do
            </div>
          </div>
          <div className={styles.solvers}>
            <div className={styles.solL}>
              <div className={styles.solHeader}>
                solver One
              </div>
            </div>
            <div className={styles.solR}>
              <div className={styles.solHeader}>
                solver Two
              </div>
            </div>
          </div>
        </div>
        <div className={styles.convergePlot}>
          <div className={styles.cpU}>
            <div className={styles.solHeader}>
              convergence plot for solver 1
            </div>
          </div>
          <div className={styles.cpD}>
            <div className={styles.solHeader}>
              convergence plot for solver 2
            </div>
          </div>
        </div>
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

export default connect<any, any, any>(
  mapStateToProps,
  mapDispatchToProps
)(Step3);
