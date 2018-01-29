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
          In this case we can use a number of fixed-point acceleration methods that improve stability and convergence
          speed. One such family of acceleration methods is called Quasi-Newton post-processing methods.
          <br/><br/>
          In this section, we will try to use a Quasi-Newton post-processing method in order to improve the convergence rate.
          There are three different types of fixed point acceleration methods available in preCICE:
          <ul>
            <li>
              Inverse Least-Squares (Anderson) Acceleration
            </li>
            <li>
              Generalized Broyden
            </li>
            <li>
              Manifold Mapping
            </li>
          </ul>

          Here we will use Inverse Least-Squares acceleration -- it is matrix free and has low computational costs.

        </div>
      </div>
    );
  }
}

export default Part4Sub;
