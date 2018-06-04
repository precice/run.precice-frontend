import * as React from 'react';
import { Link } from 'react-router-dom';
import * as styles from './styles.scss';
import * as preiceLogo from '../../static/Precice-logo.png';
import * as preciceLogoCropped from '../../static/Precice-logo-cropped.png' 
import Popup from "reactjs-popup"

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

        <Popup trigger={        <div className={styles.menuButton}> 
            <i className="fa fa-bars" aria-hidden="true"/>  
            </div> } 
        			position="bottom left" 
        			on="click"
        			arrow={false}
        			contentStyle={{ padding: "0px", borderRadius: "15px"}}
                    closeOnDocumentClick={true} 
        			> 
        		<div className={styles.menu}> 
        		<div className={styles.menuItem}> <Link to="/tutorial/part1/step1" > Part 1. Introduction </Link> </div>
        		<div className={styles.menuItem}> <Link to="/tutorial/part2/step1" > Part 2. Longer simulation  </Link> </div> 
        		<div className={styles.menuItem}> <Link to="/tutorial/part3/step1" > Part 3: Implicit coupling </Link> </div> 
        		<div className={styles.menuItem}> <Link to="/tutorial/part4/step1" > Part 4: Quasi-Newton post-processing  </Link> </div> 
        		<div className={styles.menuItem}> <Link to="/tutorial/part5/step1" > Part 5: Parallel Coupling </Link> </div> 
        		</div>
        		</Popup>
        <Link to="/" className={styles.label}>{/*preCICE label*/}
        <img src={preciceLogoCropped} className={styles.img}/> 
        </Link> 
        </div> 
            {/* </Link>{/*preCICE label*/} 
        </div> 
        <div className={styles.child}>{this.props.children}</div>
      </div>
    );
  }
}

export default Root;

