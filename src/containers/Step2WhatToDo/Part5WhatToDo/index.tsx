import * as React from 'react';
import * as styles from '../styles.scss';

interface Part5SubProps {
}

class Part5Sub extends React.Component<Part5SubProps, any> {
  public render() {
    return(
      <div className={styles.textStyle}>
        There's not much to do here. We only need to change the coupling scheme to parallel from serial:
        <div className={styles.contentCenter}>
           <pre>{`<coupling-scheme:parallel-implicit>`}</pre>
        </div>
      </div>
    );
  }
}

export default Part5Sub;
