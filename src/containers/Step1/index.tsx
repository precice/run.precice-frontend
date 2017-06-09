import { connect } from "react-redux";
import { EXAMPLE_ACTION } from "../constants";
import { createStructuredSelector } from "reselect";
import * as React from 'react';
import { Link } from 'react-router-dom';
import * as styles from './styles.scss';

interface step1Props {
}


class Step1 extends React.Component<step1Props, undefined> {

  render() {
    return <body className={styles.TuInContainer}>
      <header className={styles.TuInHeader}>introduction</header>
      <li className={styles.TuInContent}>In this tutorial, we are going to solve a 1D problem. </li>
      <li className={styles.TuInContent}>We use two solvers: SU2 and Calculix.</li>
      <li className={styles.TuInContent}>The role of preCICE is to couple those two solvers.</li>
    </body>;
  }
}

const mapStateToProps = createStructuredSelector({});

function mapDispatchToProps(dispatch) {
  return {
    example: () => dispatch({ type: EXAMPLE_ACTION }),
  };
}

export default connect<any, any, any>(
  mapStateToProps,
  mapDispatchToProps
)(Step1);
