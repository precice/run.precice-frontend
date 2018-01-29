import * as React from 'react';
import * as styles from '../styles.scss';



interface Part2SubProps {
}

class Part2Sub extends React.Component<Part2SubProps, any> {
  public render() {
    return(
      <div className={styles.tuInContainer}>
        <div className={styles.tuInHeader}>part two: longer simulation</div>
        <div className={styles.tuInContent}>
          The results from our first simulation seem promising. With twenty timesteps using an explicit coupling scheme,
          we can already see the flap move. Increasing the number of timesteps should allow us to
          see the flap oscillate. In this section of the tutorial, we will edit the preCICE configuration file to increase
          the number of timesteps and see what results we get.
        </div>
      </div>
    );
  }
}

export default Part2Sub;
