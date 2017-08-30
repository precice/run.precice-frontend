import {connect} from 'react-redux';
import {EXAMPLE_ACTION} from '../constants';
import {createStructuredSelector} from 'reselect';
import * as React from 'react';
import {Link} from 'react-router-dom';
import * as styles from './styles.scss';
import Console from 'react-console-component';

interface Step3Props {
}


class Step3 extends React.Component<Step3Props, any> {
  public child: {
    console?: Console,
  } = {};
  constructor(props: {}) {
    super(props);
    this.state = {
      hid: false,
    };
    this.shrinkWhatToDo = this.shrinkWhatToDo.bind(this);
  }
  private shrinkWhatToDo(event) {
    if (this.state.hid === false) {
      this.setState({
        hid: true,
      });
    } else {
      this.setState({
        hid: false,
      });
    }
  }
  public echo = (text: string) => {
    this.child.console.log(text);
    this.setState({}, this.child.console.return);
  }
  public render() {
    return (
      <div className={styles.subContainer}>
        <div className={styles.expContainer}>
          <div onClick={this.shrinkWhatToDo} className={styles.expHeader}>
            what to do
          </div>
          <div className={styles.expContent} hidden={this.state.hid}>
            After the setup is complete, we are ready to run the coupled simulation. We need to start two terminals,
            one for each solver that we use.
            <br/>
            In each terminal we start a simulation, the order in which they are started is not important.
            The solver we start first will run until it needs to communicate with the other one and wait until it
            receives the required data.
            <br/>
            For CalculiX, type in command:
            <p className={styles.expCommand}>
              ccx_preCICE -i flap -precice-participant Calculix
            </p>
            For SU2, type in command:
            <p className={styles.expCommand}>
              ./SU2_CFD su2-config.cfg
            </p>
            (TIP: click "WHAT TO DO" to shrink the instruction)
          </div>
        </div>
        <div className={styles.subsubContainer}>
          <div className={styles.solvers}>
            <div className={styles.solL} contentEditable={true}>
              <Console ref={ref => this.child.console = ref}
                       handler={this.echo}
                       promptLabel={'> '}
                       welcomeMessage={'Welcome to Terminal for CalculiX!'}
                       autofocus={true}
              />
            </div>
            <div className={styles.solR} contentEditable={true}>
              <Console ref={ref => this.child.console = ref}
                       handler={this.echo}
                       promptLabel={'> '}
                       welcomeMessage={'Welcome to Terminal for SU2!'}
                       autofocus={true}
              />
            </div>
          </div>
          <div className={styles.convergePlot}>
              <div className={styles.solHeader}>
                convergence plot for coupling
              </div>
          </div>
        </div>

      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({});

export default connect<any, any, any>(
  mapStateToProps,
)(Step3);

