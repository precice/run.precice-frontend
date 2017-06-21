import {connect} from 'react-redux';
import {EXAMPLE_ACTION} from '../constants';
import {createStructuredSelector} from 'reselect';
import * as React from 'react';
import {Link} from 'react-router-dom';
import * as styles from './styles.scss';
import ProgressBar from '../Progress/index';
import {percentageSelector} from './selectors';

interface TutorialProps {
  percentage: number;
  example: () => void;
}

class Tutorial extends React.Component<TutorialProps, undefined> {
  public render() {
    return (
      <div>
        <ProgressBar percentage={this.props.percentage}/>
{/*        <div className={styles.barContainer}>
          <div className={styles.progressBtnAfter} />
          <div className={styles.progressBtnAfter} />
          <div className={styles.progressBtnBefore} />
          <div className={styles.progressBtnBefore} />
         </div>
         */}
        <div>{this.props.children}</div>
        <div className={styles.btnContainer}>
          <Link to="/tutorial/step2" className={styles.btnL}>BACK</Link>
          <Link to="/tutorial/step2" className={styles.btn}> VALIDATE</Link>
          <Link to="/tutorial/step2" className={styles.btnR}>NEXT</Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  percentage: percentageSelector(),
});

function mapDispatchToProps(dispatch) {
  return {
    example: () => dispatch({type: EXAMPLE_ACTION}),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Tutorial);
