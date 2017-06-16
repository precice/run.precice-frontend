import { connect } from 'react-redux';
import { EXAMPLE_ACTION } from '../constants';
import { createStructuredSelector } from 'reselect';
import * as React from 'react';
import { Link } from 'react-router-dom';
import * as styles from './styles.scss';


interface TutorialProps {
  example: () => void;
}


class Tutorial extends React.Component<TutorialProps, undefined> {

  render() {
    return <div>
      <div className={styles.barContainer}>
        <div className={styles.progressBtnAfter}>
        </div>
        <div className={styles.progressBtnAfter}>
        </div>
        <div className={styles.progressBtnBefore}>
        </div>
        <div className={styles.progressBtnBefore}>
        </div>
      </div>
      <div>{this.props.children}</div>
      <div className={styles.btnContainer}>
        <Link to="/tutorial/step2" className={styles.btnL}>BACK</Link>
        <Link to="/tutorial/step2" className={styles.btn}> VALIDATE</Link>
        <Link to="/tutorial/step2" className={styles.btnR}>NEXT</Link>
      </div>
    </div>;
  }
}

const mapStateToProps = createStructuredSelector({});

function mapDispatchToProps(dispatch) {
  return {
    example: () => dispatch({ type: EXAMPLE_ACTION }),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Tutorial);
