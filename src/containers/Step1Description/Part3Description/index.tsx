import * as React from 'react';
import * as styles from '../styles.scss';



interface Part3SubProps {
}

class Part3Sub extends React.Component<Part3SubProps, any> {
  public render() {
    return(
      <div className={styles.tuInContainer}>
        <div className={styles.tuInHeader}>part three</div>
        <div className={styles.tuInContent}>
          Now we want to see the bar ocsillate, so we raise the time step.
        </div>
      </div>
    );
  }
}

export default Part3Sub;
