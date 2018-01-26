import * as React from 'react';
import * as styles from '../styles.scss';


interface Part1SubProps {
}
// TODO: Do we need to inform the users about the plot button on the top left?
// TODO: Do we need to specify the commands to start the sovlers if they are in the terminals already?
class Part1Sub extends React.Component<Part1SubProps, any> {
  public render() {
    return (
      <div>
        Once we have configured preCICE, we are ready to start our first coupled simulation. To achieve this,
        we will simultaneously run both SU2 and CalculiX. The easiest way to achieve this is to run
        them in separate terminals. The order in which we start our solvers does not matter.
        The solver we start first will run until it needs to communicate with the other one and will then wait until
        it receives the required data.
        <br/>
        <br/>
        To make it more convenient, we have already typed in the commands to start the two solvers in the terminals below.
        Go ahead and start the two solvers.
      </div>
    );
  }
}

export default Part1Sub;

