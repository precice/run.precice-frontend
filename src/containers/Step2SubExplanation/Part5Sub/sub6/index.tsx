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
        To help you deal with the deluge of information, here we present the highlights of all the things that you
      should know but might have missed about using different coupling schemes in preCICE.
        <br/><br/>

        <li>
          <span className={styles.highlight}>coupling-scheme:parallel-implicit</span>: The only change from the last part
          is that now both our solvers will be operating in parallel in a given time
          step. Doing so, we can potentially speed up the simulation by getting rid of the wait time incurred by a serial
          coupling scheme.
        </li>
        <br/>

      <li>
        <span className={styles.highlight}>participants</span>: The participants in our simulation. The attributes should
        be self-evident by this point.
      </li>
      <br/>

      <li>
        <span className={styles.highlight}>exchange</span>: Data to be exchanged between the two solvers at the interface.
        In this FSI simulation, we need only worry about the displacement of the flap and the force exerted by the fluid.
      </li>
      <br/>

      <li>
          <span className={styles.highlight}>relative-convergence-measure</span>: In an implicit scheme,
          we want to sub-iterate in a given time step until we fulfill a convergence criterion.
        </li>
        <br/>

        <li>
          <span className={styles.highlight}>post-processing: IQN-ILS </span>: Use Inverse Least Squares /
          Anderson Acceleration for fixed-point
          acceleration. We can use a filter to maintain the conditioning of the problem and reuse information from the
          last time steps to further speed up the convergence.
        </li>
        <br/>

      </div>
    );
  }
}

export default Sub6;
