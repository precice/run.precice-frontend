import * as React from 'react';
import * as styles from './styles.scss';

interface Part3Props {
}

class Part3 extends React.Component<Part3Props, undefined> {

  public render() {
    return (
      <div className={styles.container}>
        {this.props.children}
      </div>
    );
  }
}

export default Part3;
