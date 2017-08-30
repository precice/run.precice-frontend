import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import * as React from 'react';
import {Link} from 'react-router-dom';
import * as styles from './styles.scss';
import {socket} from '../Root/index';

interface LandPageProps {
}

class LandingPage extends React.Component<LandPageProps, any> {
  constructor(props) {
    super(props);
    this.state = {code: '', text: ''};
    this.updateCode = this.updateCode.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  /*send the command to backend*/
  public componentWillReceiveProps() {
    socket.emit('cmd2Backend', {code: this.state.code});
  }
  /*when someone type something in the texting area, update the code*/
  private updateCode(data) {
    this.setState({
      code: data.target.value});
  }
  /*receive the data sent from the backend*/
  private getReceivedData() {
    socket.on('data2Backend', (data) => {
      this.setState({
        text: data.text,
      });
    });
  }
  /*make sure when we click the button, the page does not refresh*/
  private handleSubmit(event) {
    alert('A code was submitted: ' + this.state.code);
    event.preventDefault();
    this.componentWillReceiveProps();
    this.getReceivedData();
  }

  public render() {
    return (
      <div className={styles.landingbox}>{/*containing everything in this child: landing page and team intro*/}
        <div className={styles.landingPage}>{/*landing page with titles and start button*/}
          <div className={styles.intro}>Coupling tool for partitioned simulations<br />of multi-physics scenarios.</div>
          <div className={styles.subIntro}>Make Coupling Easy Again</div>
          <div className={styles.btnContainer}><Link to="/tutorial/step1" className={styles.btn}> Start The Tutorial Now</Link></div>
        </div>{/*landing page with titles and start button*/}
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
          </div>{/*photos of BGCE_CSE 2017*/}
          <div className={styles.subIntro}>{/*intros of BGCE_CSE 2017*/}
            The tutorial website is designed by us.<br/>
            We all study at Msc. Computational Science and Engineering, TUM now :-)
          </div>{/*intros of BGCE_CSE 2017*/}
          <form onSubmit={this.handleSubmit}>{/*testing command area for input*/}
            <input type="text" value={this.state.code} onChange={this.updateCode} placeholder="Enter a test code"/>
            <button>input</button>
          </form>{/*testing command area for input*/}
          <div>{this.state.text}</div>{/*testing command area for output*/}
        </div>{/*the introduction for our team*/}
      </div>
    );
  }
}


export default LandingPage;


