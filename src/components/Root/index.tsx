import * as React from 'react';
import { Link } from 'react-router-dom';
import * as styles from './styles.scss';
import * as preiceLogo from '../../static/Precice-logo.png';
import * as preciceLogoCropped from '../../static/Precice-logo-cropped.png'
import * as preciceCircle from '../../static/precice-circle.png'
import * as rglogo from '../../static/RG_square_green.png'
import {slide as Menu} from 'react-burger-menu'
import ExpandableList from "../Expandable"
import ScrollArea from 'react-scrollbar' 

const burgerStyles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '26px',
    height: '20px',
    left: '20px',
    top: '20px',
    background: '#dddddd',
    border: '5px solid #dddddd',
    zIndex: '0' 
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenu: {
    background: '#dddddd',
    padding: '1.5em 1.0em 0',
    fontSize: '1.15em',
    overflow: 'hidden'
  },
  bmItemList: {
    display: 'flex',
    flexDirection: 'column'
  },
  bmItem: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '0'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

interface RootProps {
  children: any;
}
class Root extends React.Component<RootProps, undefined> {
  public render() {
    return (
      <div className={styles.container}>
        <Menu styles={burgerStyles}
              width={275}>

        <div className={"menu-item"} style={{flex: "1 1 auto"}}>
          <div>
            <img src={preiceLogo} className={styles.img}/>
          </div>
      <div className={styles.menu}>
	 <ScrollArea 
		horizontal={false}
	  speed={0.6}
	  verticalScrollBarStyle={{opacity: '1'}}
	>
		<ExpandableList header="Introduction" partNumber={1} />
		<ExpandableList header="Longer simulation"  partNumber={2}/>
		<ExpandableList header="Implicit coupling" partNumber={3}/>
		<ExpandableList header="Acceleration with Quasi-Newton"  partNumber={4}/>
		<ExpandableList header="Parallel Coupling" partNumber={5} />
	  </ScrollArea>
      </div>
      <div>
	{/* Social icons */} 
      <div className={styles.mediaBarHeader}> 
      Check out our <a href="https://github.com/precice/precice/wiki" target="_blank"> wiki </a> and connect with us:
      </div> 
      <div className={styles.mediaBar}>
        <div className={styles.mediaItem}> <a href="https://mailman.informatik.uni-stuttgart.de/mailman/listinfo/precice" target="_blank" style={{color: "black"}}> <i className="fa fa-envelope"></i> </a> </div>
        <div className={styles.mediaItem}> <a href="https://gitter.im/precice/Lobby" target="_blank"> <div className={styles.gitterSvg}> </div> </a> </div>
        <div className={styles.mediaItem}> <a href="https://twitter.com/preCICE_org" target="_blank"> <i className="fa fa-twitter" style={{color: '#00aced', width: '35px'}}></i> </a> </div>
      </div>
	{/* Research icons */} 
      <div className={styles.mediaBar}>
        <div className={styles.mediaItem}> <a href="https://github.com/precice" target="_blank" style={{color: "black"}}> <i className="fa fa-github" style={{width: '35px'}}></i> </a> </div>
        <div className={styles.mediaItem}> <a href="https://www.researchgate.net/project/preCICE" target="_blank"> <img src={rglogo} /> </a> </div>
        <div className={styles.mediaItem}> <a href="https://www.precice.org/" target="_blank"> <img src={preciceCircle} /> </a> </div>
      </div>
    </div>
    </div>
        </Menu>
        <div className={styles.banner}>
        {/* logo */}

        </div>
        <div className={styles.child}>{this.props.children}</div>
      </div>
    );
  }
}

export default Root;

