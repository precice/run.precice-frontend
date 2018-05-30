import * as React from 'react';
import { Link } from 'react-router-dom';
import * as styles from './styles.scss';
import * as preiceLogo from '../../static/Precice-logo.png';

interface RootProps {
  children: any;
}
class Root extends React.Component<RootProps, undefined> {
  public render() {

    return (
      <div className={styles.container}>
        <div className={styles.banner}>
        {/* logo */} 
        <div className={styles.label}> 
           <img src={preiceLogo} className={styles.img}/>
        </div> 
            {/* </Link>{/*preCICE label*/} 
        </div> 
        <div className={styles.child}>{this.props.children}</div>
      </div>
    );
  }
}

export default Root;

