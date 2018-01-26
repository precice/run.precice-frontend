import * as React from 'react';
import * as styles from '../styles.scss';

interface Part4SubProps {
}

class Part4Sub extends React.Component<Part4SubProps, any> {
  public render() {
    return(
      <div className={styles.textStyle}>
        The xml file below has already been changed to use Anderson Acceleration, IQN-ILS in preCICE,
        as the post-processing step. With this post-processing step we reuse information from previous time steps
        since that can potentially increase the speed of convergence.
      </div>
    );
  }
}

export default Part4Sub;
