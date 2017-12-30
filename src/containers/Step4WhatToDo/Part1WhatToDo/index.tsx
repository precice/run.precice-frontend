import * as React from 'react';
import * as styles from '../styles.scss';


interface Part1SubProps {
}

class Part1Sub extends React.Component<Part1SubProps, any> {
  public render() {
    return (
      <div>
        <div>
          The SU2 output on the left provides visualization of horizontal velocity profile,
          during right most bending of the flap, left most of the flap, and the condition of the flap on the last
          iteration, after 4.6 seconds or 160 iterations.
        </div>
        <div>
          We see that the flap is bending under the pressure that builds up on its surface and fluctuates accordingly,
          demonstrating reasonable physical behaviour.
        </div>
      </div>
    );
  }
}

export default Part1Sub;

