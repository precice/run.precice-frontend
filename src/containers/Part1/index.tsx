
import * as React from 'react';
import * as styles from './styles.scss';

interface Part1Props {
}

class Part1 extends React.Component<Part1Props, undefined> {

  public render() {
    return (
      <div className={styles.container}>
        {this.props.children}
      </div>
    );
  }
}

export default Part1;
