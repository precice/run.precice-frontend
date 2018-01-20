import * as React from 'react';
import * as styles from '../styles.scss';



interface Part2SubProps {
}

class Part2Sub extends React.Component<Part2SubProps, any> {
  public render() {
    return(
      <div className={styles.tuInContainer}>
        <div className={styles.tuInHeader}>part two</div>
        <div className={styles.tuInContent}>
          Now we want to see the bar ocsillate, so we raise the time step.
        </div>
      </div>
    );
  }
}

export default Part2Sub;
