import * as React from 'react';
import * as styles from '../styles.scss';

interface Part4SubProps {
}

class Part4Sub extends React.Component<Part4SubProps, any> {
  public render() {
    return(
      <div className={styles.textStyle}>
        The xml file below has already been changed to use the Inverse Least-Squares method, IQN-ILS in preCICE,
        as the post-processing step. This method reuses information from previous time steps, which can increase the
        speed of convergence. However, the performance benefit cannot be demonstrated in this small-scale example. Details can be found<span> </span>
        <a className={styles.link} target="_blank" href={'https://github.com/precice/precice/wiki/Quasi-Newton-Post-Processing-Methods'}>here</a>.
      </div>
    );
  }
}

export default Part4Sub;
