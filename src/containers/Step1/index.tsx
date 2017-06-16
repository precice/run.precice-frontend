import { connect } from 'react-redux';
import { EXAMPLE_ACTION } from '../constants';
import { createStructuredSelector } from 'reselect';
import * as React from 'react';
import { Link } from 'react-router-dom';
import * as styles from './styles.scss';

interface Step1Props {
  example: () => void;
}


class Step1 extends React.Component<Step1Props, undefined> {

  render() {
    return <div className={styles.tuInContainer}>
      <header className={styles.tuInHeader}>introduction</header>
      <li className={styles.tuInContent}>In this tutorial, we are going to solve a 1D problem. </li>
      <li className={styles.tuInContent}>We use two solvers: SU2 and Calculix.</li>
      <li className={styles.tuInContent}>The role of preCICE is to couple those two solvers.</li>
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
)(Step1);
