import * as React from 'react';
import { Link } from 'react-router-dom';
import * as styles from './styles.scss';

interface LandPageProps {
}

class LandingPage extends React.Component<LandPageProps, any> {

  public render() {
    return (
      <div className={styles.landingbox}>{/*containing everything in this child: landing page and team intro*/}
        <div className={styles.landingPage}>{/*landing page with titles and start button*/}
          <div className={styles.intro}>Coupling tool for partitioned simulations<br />of multi-physics scenarios.</div>
          <div className={styles.subIntro}>Make Coupling Easy Again</div>
          <div className={styles.btnContainer}><Link to="/tutorial/step1" className={styles.btn}> Start The Tutorial
            Now</Link></div>
        </div>
        {/*landing page with titles and start button*/}
        <div className={styles.team}>{/*the introduction for our team*/}
          <div className={styles.intro}>
            Our Team
          </div>
          <div className={styles.imgGroup}>{/*photos*/}
            <div className={styles.imgContainer}>
              <img src="src/components/LandingPage/Dmytro.jpg" className={styles.img}/>
              <div className={styles.subIntro}>
                Dmytro Sashko
              </div>
            </div>
            <div className={styles.imgContainer}>
              <img src="src/components/LandingPage/Felix.jpg" className={styles.img}/>
              <div className={styles.subIntro}>
                Felix Lachenmaier
              </div>
            </div>
            <div className={styles.imgContainer}>
              <img src="src/components/LandingPage/Hasan.jpg" className={styles.img}/>
              <div className={styles.subIntro}>
                Hasan Ashraf
              </div>
            </div>
            <div className={styles.imgContainer}>
              <img src="src/components/LandingPage/Jan.jpg" className={styles.img}/>
              <div className={styles.subIntro}>
                Jan Sültemeyer
              </div>
            </div>
            <div className={styles.imgContainer}>
              <img src="src/components/LandingPage/Kirill.jpg" className={styles.img}/>
              <div className={styles.subIntro}>
                Kirill Martynov
              </div>
            </div>
            <div className={styles.imgContainer}>
              <img src="src/components/LandingPage/Pei.jpg" className={styles.img}/>
              <div className={styles.subIntro}>
                Pei-Hsuan Huang
              </div>
            </div>
          </div>
          {/*photos of BGCE_CSE 2017*/}
          <div className={styles.subIntro}>{/*intros of BGCE_CSE 2017*/}
            The tutorial website is designed by us.<br/>
            We all study at Msc. Computational Science and Engineering, TUM now :-)
          </div>
        </div>
        {/*the introduction for our team*/}
      </div>
    );
  }
}


export default LandingPage;


