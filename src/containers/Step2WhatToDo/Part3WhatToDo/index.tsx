import * as React from 'react';
import * as styles from '../styles.scss';

interface Part3SubProps {
}

class Part3Sub extends React.Component<Part3SubProps, any> {
  public render() {
    return(
      <div className={styles.textStyle}>
        To use an implicit coupling scheme, we provide preCICE with convergence measures for data that is to be exchanged
        at the interface of the two solvers. Furthermore, we have to specify that we want to use adaptive Aitken underrelaxation.
        The preCICE configuration allows us to specify this through the tag
        <div className={styles.contentCenter}>
          <pre>{`<acceleration:aitken>`}</pre>
        </div>
      </div>
    );
  }
}

export default Part3Sub;
