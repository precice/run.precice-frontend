import * as React from 'react';
import * as styles from '../../styles.scss';
import { Tooltip } from 'react-tippy';

interface Sub6Props {
}

class Sub6 extends React.Component<Sub6Props, any> {
  public render() {
    return (
      <div>
        In order to move from a serial to a parallel scheme, we do not need to make radical changes to the configuration
        file.
        <br/><br/>

        <li>
          <span className={styles.highlight}>coupling-scheme:parallel-implicit</span>: The only change from the last part
          is that now both our solvers will be operating in parallel in a given time
          step. Doing so, we can potentially speed up the simulation by getting rid of the wait time incurred by a serial
          coupling scheme.
        </li>
      </div>
    );
  }
}

export default Sub6;
