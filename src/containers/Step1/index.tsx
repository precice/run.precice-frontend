import {connect} from 'react-redux';
import {EXAMPLE_ACTION} from '../constants';
import {createStructuredSelector} from 'reselect';
import * as React from 'react';
import {Link} from 'react-router-dom';
import * as styles from './styles.scss';

interface Step1Props {
  example: () => void;
}


class Step1 extends React.Component<Step1Props, undefined> {

  public render() {
    return (
      <div className={styles.tuInContainer}>
        <header className={styles.tuInHeader}>introduction</header>
        <li className={styles.tuInContent}>In this tutorial, we are going to do a coupled fluid- structure interaction
          (FSI) simulation.
          <div><br/>We model a compressible fluid flowing through a channel. In the channel, an elastic flap is fixed to the
            floor. This flap oscillates due to the fluid pressure building up on its surface.
            The setup is shown schematically here:</div><br/>
          <img src="/src/containers/Step1/geometry.png" className={styles.img}/><br/>
          <div>Although this test case is two-dimensional, we use a three-dimensional simulation with a constant width
            in y-direction. The fluid flow is simulated by solving the compressible Navier- Stokes equations for laminar
            viscous flow. A constant velocity profile is assumed on the input on the left of the channel and on the
            walls no-slip conditions are prescribed. More on the definition of the case and its parameters can be found in
            <a href="https://www5.in.tum.de/pub/Rusch2016_BA.pdf" className={styles.link}> Rusch2016</a>.
          </div>
        </li>
        <li className={styles.tuInContent}>We use two solvers: SU2 and CalculiX.
          <ul>
            <li>
              <a href="http://www.calculix.de" className={styles.link}>CalculiX
              </a>
              : a free three-dimensional finite element solver. We use it to simulate the flap deformation</li>
            <li>
              <a href="http://su2.stanford.edu" className={styles.link}>SU2
              </a>
              : an open source CFD solver developed at Stanford. We use it to simulate the fluid flow.</li>
          </ul>
        </li>
        <li className={styles.tuInContent}>The role of preCICE is to couple those two solvers.</li>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Step1);
