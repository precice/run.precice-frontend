import * as React from 'react';
import { Link } from 'react-router-dom';
import * as styles from './styles.scss';
import * as Dmytro from '../../static/faces/Dmytro.jpg';
import * as Felix from '../../static/faces/Felix.jpg';
import * as Hasan from '../../static/faces/Hasan.jpg';
import * as Jan from '../../static/faces/Jan.jpg';
import * as Kirill from '../../static/faces/Kirill.jpg';
import * as Pei from '../../static/faces/Pei.jpg';
import * as einstein from '../../static/einstein.jpg';
import * as trump from '../../static/trump.jpg';
import * as bolt from '../../static/bolt.jpg';

interface LandPageProps {
}

class LandingPage extends React.Component<LandPageProps, any> {

  public render() {
    return (
      <div className={styles.landingbox}>{/*containing everything in this child: landing page and team intro*/}
        <div className={styles.landingPage}>{/*landing page with titles and start button*/}
          <div className={styles.intro}>Coupling tool for partitioned simulations<br/>of multi-physics scenarios.</div>
          <div className={styles.subIntro}>Make Coupling Easy Again</div>
          <div className={styles.btnContainer}><Link to="/tutorial/part1/step1" className={styles.btn}> Start The
            Tutorial
            Now</Link></div>
        </div>
        {/*landing page with titles and start button*/}
        <div className={styles.team}>{/*the introduction for our team*/}
          <div className={styles.intro}>
            Team
          </div>
          <div className={styles.imgGroup}>{/*photos*/}
            {[{
              imgP: Dmytro,
              nameP: 'Dmytro Sashko',
            }, {
              imgP: Felix,
              nameP: 'Felix Lachenmaier',
            }, {
              imgP: Hasan,
              nameP: 'Hasan Ashraf',
            }, {
              imgP: Jan,
              nameP: 'Jan Sültemeyer',
            }, {
              imgP: Kirill,
              nameP: 'Kirill Martynov',
            }, {
              imgP: Pei,
              nameP: 'Pei-Hsuan Huang',
            }].map(({ imgP, nameP }) => {
              return (
                <div key={nameP} className={styles.imgContainer}>
                  <img src={imgP} className={styles.img}/>
                  <div className={styles.subIntro}>
                    {nameP}
                  </div>
                </div>
              );
            })}
          </div>
          {/*photos of BGCE_CSE 2017*/}
          <div className={styles.subIntro}>{/*intros of BGCE_CSE 2017*/}
            This website was developed as a part of our<span> </span>
            <a className={styles.link} target="_blank" href={'http://www.bgce.de'}>BGCE</a> project.
          </div>
        </div>
        {/*the introduction for our team*/}

        <div className={styles.successStories}>
          <div className={styles.intro}>Voices of our users</div>
          <div className={styles.storyGroups}>
          {[{
            name: 'Albert Einstein',
            text: 'Precice has always proven as a reliable choice for my coupled FSI simulations. It\'s so easy, it\'s so smart. I just love it',
            img: einstein,
          }, {
            name: 'Donald Trump',
            text: 'This coupling software is good. It is the best. Everything else is fake news.',
            img: trump,
          }, {
            name: 'Usain Bolt',
            text: 'I wish I was as fast as preCICE',
            img: bolt,
          }].map(({ name, text, img }) => {
            return (
              <div key={name} className={styles.successStory}>
                <img className={styles.img} src={img}/>
                <div className={styles.text}>
                  <div className={styles.name}>{name}</div>
                  <div className={styles.quote}>"{text}"</div>
                </div>
              </div>
            );
          })}
          </div>
        </div>
        <div className={styles.privacyNotice}>
          <div className={styles.intro}>Privacy notice</div>
          <div className={styles.subIntro}>
          This website uses google analytics. It is a service, that collects and stores data about your usage of the website, such as time spent on the page, 
          your operating system, your country, etc. We use this data solely to understand behaviour of our users and improve your experience of the website. 
          Our usage of google analytis falls under its  <a className={styles.link} target="_blank" href={'https://www.google.com/analytics/terms/us.html'}>terms of service</a> 
          </div> 
        </div> 
      </div>
    );
  }
}


export default LandingPage;


