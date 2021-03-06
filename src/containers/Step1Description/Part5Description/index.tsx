import * as React from 'react';
import * as styles from '../styles.scss';

interface Part5SubProps {
}

class Part5Sub extends React.Component<Part5SubProps, any> {
  public render() {
    return(
      <div className={styles.tuInContainer}>
        <div className={styles.tuInHeader}>part five: parallel coupling</div>
        <div className={styles.tuInContent}>
          For the previous four simulations we used a serial coupling scheme, whether explicit or implicit.
          In a serial coupling scheme, the solvers operate in a staggered fashion so that solver A uses the old
          values from solver B for the current time window. Then solver B, which has been waiting on A to finish the
          computation, uses the updated values from A to compute the new values for the current time window. While B is
          performing the computation, A has to wait on it and this continues with both solvers alternately waiting on
          each other till the simulation ends.

          <br/><br/>
          In a parallel coupling scheme, however, both solvers use values from
          the old time window to compute the new values in parallel. This way we can minimize the waiting time and
          speed up our simulation. In this section we will use a
          <a
            className={styles.link}
            target="_blank"
            href={'https://www.researchgate.net/publication/301598918_preCICE_-_A_Fully_Parallel_Library_for_Multi-Physics_Surface_Coupling'}
          >
            <span> </span>parallel coupling <span> </span>
          </a>
          scheme with Quasi-Newton acceleration
          in order to further decrease the simulation time.
        </div>
      </div>
    );
  }
}

export default Part5Sub;
