import * as React from 'react';
import {Link} from 'react-router-dom';
import * as styles from './styles.scss';

interface RootProps {
  children: any;
}
class Root extends React.Component<RootProps, undefined> {
  public render() {
    return (
      <div className={styles.container}>
        <div className={styles.banner}>
      <span className={styles.label}>
      <span className={styles.pre}>pre</span>
      <span className={styles.cice}>CICE</span>
      </span>
        </div>
        <div>{this.props.children}</div>
        <footer className={styles.footer}>Copyright &copy;
          <span className={styles.label}>
      <span className={styles.pre}>pre</span>
      <span className={styles.cice}>CICE</span>
      </span>
        </footer>
      </div>
    );
  }
}

export default Root;
