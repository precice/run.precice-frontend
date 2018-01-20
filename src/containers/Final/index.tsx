import * as React from 'react';
import * as styles from './styles.scss';
import { Link } from 'react-router-dom';


interface FinalProps {
}

class Final extends React.Component<FinalProps, any> {
  public render() {
    return (
      <div className={styles.landingbox}>{/*containing everything in this child: landing page and team intro*/}
        <div className={styles.landingPage}>{/*landing page with titles and start button*/}
          <div className={styles.intro}>Congratulations!</div>
          <div className={styles.subIntro}>
            You finished all the tutorial.<br/>
            If you want to download the tutorial and run it on your computer, <br/>
            please go to the github repository.
          </div>
          <div className={styles.btnContainer}><a href="https://github.com/precice/precice/wiki/FSI-tutorial" className={styles.btn}> preCICE github</a></div>
        </div>
      </div>
    );
  }
}

export default Final;
