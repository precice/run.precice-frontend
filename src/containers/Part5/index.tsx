import * as React from 'react';
import * as styles from './styles.scss';

interface Part5Props {
}

class Part5 extends React.Component<Part5Props, undefined> {

  public render() {
    return (
      <div className={styles.container}>
        {this.props.children}
      </div>
    );
  }
}

export default Part5;
