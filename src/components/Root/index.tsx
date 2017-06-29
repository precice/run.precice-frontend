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
          <Link to="/" className={styles.label}>
            <span className={styles.pre}>pre</span>
            <span className={styles.cice}>CICE</span>
          </Link>
        </div>
        <div className={styles.child}>{this.props.children}</div>
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
