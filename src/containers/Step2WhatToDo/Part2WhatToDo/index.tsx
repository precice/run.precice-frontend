import * as React from 'react';
import * as styles from '../styles.scss';

interface Part2SubProps {
}

class Part2Sub extends React.Component<Part2SubProps, any> {
  public render() {
    return(
      <div className={styles.textStyle}>
        In the xml file below, we have already changed the number of maximum time windows
        <div className={styles.contentCenter}>
        <pre>{`<max-time-windows value="50" />`}</pre>
        </div>
        in the coupling scheme section. Intuitively, this should allow us to see the flap in our model oscillate.
      </div>
    );
  }
}

export default Part2Sub;
