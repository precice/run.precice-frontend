import * as React from 'react';
import * as styles from '../../styles.scss';
import { Tooltip } from 'react-tippy';
import * as https from "https";

interface Sub6Props {
}

class Sub6 extends React.Component<Sub6Props, any> {
  public render() {
    return (
      <div>
        To further speed up the fixed point iteration, we are now using a Quasi-Newton solver for acceleration.
        <br/><br/>

        <li>
          <span className={styles.highlight}>acceleration: IQN-ILS</span>: Use Inverse Least Squares acceleration
          for fixed-point acceleration.
        </li>
        <br/>

        <li>
          <span className={styles.highlight}>preconditioner</span>: To improve the performance, a preconditioner can be
          applied. A residual-sum preconditioner scales acceleration data in each time window.
        </li>
        <br/>

        <li>
          <span className={styles.highlight}>filter</span>:  In order to maintain good conditioning in the least-squares
          system, we can use a filter to remove linearly dependent columns.
        </li>
        <br/>

        <li>
          <span className={styles.highlight}>max-used-iterations</span>:  This is the
          maximum number of columns in the quasi-Newton system.
        </li>
        <br/>

        <li>
          <span className={styles.highlight}>time-windows-reused</span>:  In Inverse Least-Squares acceleration, we can
          reuse data from old time windows to further speed up the convergence. This specifies the maximum number of
          reused time windows.
        </li>

      </div>
    );
  }
}

export default Sub6;
