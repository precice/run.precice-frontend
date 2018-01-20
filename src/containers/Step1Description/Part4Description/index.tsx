import * as React from 'react';
import * as styles from '../styles.scss';



interface Part4SubProps {
}

class Part4Sub extends React.Component<Part4SubProps, any> {
  public render() {
    return(
      <div className={styles.tuInContainer}>
        <div className={styles.tuInHeader}>part four</div>
        <div className={styles.tuInContent}>
          Now we want to see the bar ocsillate, so we raise the time step.
        </div>
      </div>
    );
  }
}

export default Part4Sub;
