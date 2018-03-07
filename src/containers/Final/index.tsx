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
            You have finished the tutorial.<br/>
            If you want to run it on your computer, <br/>
            please go to the github repository, <br/>
            and follow the instructions.
          </div>
          <div className={styles.btnContainer}><a target="_blank" href="https://github.com/precice/precice/wiki/FSI-tutorial" className={styles.btn}> preCICE github</a></div>
          <div className={styles.feedbackText}>We are curious about your feedback on this tutorial.<br />
            Please help us to further improve the user experience by
            <a className={styles.feedbackLink} target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSdEg4E2vXydfbRoQ3EzcfRyOGV0jHnLuZo6eIKW1a7B3v3tqg/viewform">filling out this feedback form</a></div>
        </div>
      </div>
    );
  }
}

export default Final;
