import * as React from 'react';
import * as styles from '../styles.scss';



interface Part4SubProps {
}

class Part4Sub extends React.Component<Part4SubProps, any> {
  public render() {
    return(
      <div className={styles.tuInContainer}>
        <div className={styles.tuInHeader}>part four: quasi-newton post-processing</div>
        <div className={styles.tuInContent}>
          Now that we have a running simulation that converges, we can try a different post-processing method.
          preCICE includes a number of fixed-point acceleration methods that improve stability and convergence
          speed. One such family of acceleration methods is called Quasi-Newton post-processing methods.
          <br/><br/>
          In this section, we will try to use Inverse Least-Squares acceleration, a Quasi-Newton post-processing method,
          in order to improve the convergence rate of the simulation.

        </div>
      </div>
    );
  }
}

export default Part4Sub;
