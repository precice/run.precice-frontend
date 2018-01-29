import * as React from 'react';
import { Link } from 'react-router-dom';
import * as styles from './styles.scss';
import * as Dmytro from '../../static/faces/Dmytro.jpg';
import * as Felix from '../../static/faces/Felix.jpg';
import * as Hasan from '../../static/faces/Hasan.jpg';
import * as Jan from '../../static/faces/Jan.jpg';
import * as Kirill from '../../static/faces/Kirill.jpg';
import * as Pei from '../../static/faces/Pei.jpg';

interface LandPageProps {
}

class LandingPage extends React.Component<LandPageProps, any> {

  public render() {
    return (
      <div className={styles.landingbox}>{/*containing everything in this child: landing page and team intro*/}
        <div className={styles.landingPage}>{/*landing page with titles and start button*/}
          <div className={styles.intro}>Coupling tool for partitioned simulations<br />of multi-physics scenarios.</div>
          <div className={styles.subIntro}>Make Coupling Easy Again</div>
          <div className={styles.btnContainer}><Link to="/tutorial/part1/step1" className={styles.btn}> Start The Tutorial
            Now</Link></div>
        </div>
        {/*landing page with titles and start button*/}
        <div className={styles.team}>{/*the introduction for our team*/}
          <div className={styles.intro}>
            Team
          </div>
          <div className={styles.imgGroup}>{/*photos*/}
            <div className={styles.imgContainer}>
              <img src={Dmytro} className={styles.img}/>
              <div className={styles.subIntro}>
                Dmytro Sashko
              </div>
            </div>
            <div className={styles.imgContainer}>
              <img src={Felix} className={styles.img}/>
              <div className={styles.subIntro}>
                Felix Lachenmaier
              </div>
            </div>
            <div className={styles.imgContainer}>
              <img src={Hasan} className={styles.img}/>
              <div className={styles.subIntro}>
                Hasan Ashraf
              </div>
            </div>
            <div className={styles.imgContainer}>
              <img src={Jan} className={styles.img}/>
              <div className={styles.subIntro}>
                Jan Sültemeyer
              </div>
            </div>
            <div className={styles.imgContainer}>
              <img src={Kirill} className={styles.img}/>
              <div className={styles.subIntro}>
                Kirill Martynov
              </div>
            </div>
            <div className={styles.imgContainer}>
              <img src={Pei} className={styles.img}/>
              <div className={styles.subIntro}>
                Pei-Hsuan Huang
              </div>
            </div>
          </div>
          {/*photos of BGCE_CSE 2017*/}
          <div className={styles.subIntro}>{/*intros of BGCE_CSE 2017*/}
            This website was developed as a part of our
            <a className={styles.link} href={'http://www.bgce.de'}>BGCE</a> project.
          </div>
        </div>
        {/*the introduction for our team*/}
      </div>
    );
  }
}


export default LandingPage;


