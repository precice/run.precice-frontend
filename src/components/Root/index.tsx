import {connect} from 'react-redux';
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
          <Link to="/" className={styles.label}>{/*preCICE label*/}
            <img src="src/components/Root/Precice-logo.png" className={styles.img}/>
            <span className={styles.pre}>pre</span>
            <span className={styles.cice}>CICE</span>
          </Link>{/*preCICE label*/}
        </div>
        <div className={styles.child}>{this.props.children}</div>
        <footer className={styles.footer}>Copyright &copy;
          <span className={styles.label}>{/*preCICE label*/}
            <span className={styles.pre}>pre</span>
            <span className={styles.cice}>CICE</span>
          </span>{/*preCICE label*/}
        </footer>
      </div>
    );
  }
}

export default Root;

