import * as React from 'react';
import * as styles from '../../styles.scss';
import { Tooltip } from 'react-tippy';

interface Sub5Props {
}

class Sub5 extends React.Component<Sub5Props, any> {
  public render() {
    return (
      <div>
        Now that we have set up the two participants, we can define how the two solvers will communicate with each other.
        preCICE allows the participants to communicate over sockets or MPI.
        See the <a href="https://github.com/precice/precice/wiki/XML-Reference" target="_blank" className={styles.link}>XML reference</a> for details.
        <br/><br/>
        <li>
          <span className={styles.highlight}>m2n:sockets</span>: Use sockets for communication.
        </li>
        <br/>
        <li>
          <span className={styles.highlight}>m2n:sockets from</span>: Name of the first participant involved in the communication.
          The first participant initiates the communication.
          <Tooltip
            width="100"
            interactive
            html={(
              <div>
                In most case it makes no difference which participant initiates the communication.
              </div>
            )}
          >
            <span className="fa fa-question-circle" style={{ fontSize: '18px' }}/>&nbsp;
          </Tooltip>
        </li>
        <br/>
        <li>
          <span className={styles.highlight}>m2n:sockets to</span>: Name of the second participant involved in communication.
        </li>
        <br/>
      </div>
    );
  }
}

export default Sub5;

