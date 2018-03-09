import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import * as React from 'react';
import { Link } from 'react-router-dom';
import * as styles from './styles.scss';
import { buttonLinksSelector, partNumberSelector } from '../Tutorial/selectors';
import { busySelector } from '../Step3/selectors';
import Step1Description from '../Step1Description/index';
import {PLOT_DELETE_DATA, CONSOLE_CLEAR, SIMULATION_CLEAR_DONE} from '../constants';

interface Step1Props {
  partNumber: number;
  buttonLinks: {
    previous?: string,
    next?: string,
  };
  initial: () => any;

  clearConsole: any;
  clearDone: any;
  leftBusy: boolean;
  rightBusy: boolean;

}

export enum ConsoleId {
  left = 'LEFT_CONSOLE',
  right = 'RIGHT_CONSOLE',
}

class Step1 extends React.Component<Step1Props, any> {
  constructor(props: Step1Props) {
    super(props);
  }

  public componentWillMount() {
    if (!this.props.leftBusy && !this.props.rightBusy) {
      this.props.initial();
      this.props.clearConsole(ConsoleId.right);
      this.props.clearConsole(ConsoleId.left);
      this.props.clearDone(ConsoleId.right);
      this.props.clearDone(ConsoleId.left);
    }
  }
  public render() {
    return (
      <div className={styles.tuInContainer}>
        <Step1Description partNumber={this.props.partNumber}/>
        {(this.props.partNumber !== 1) ?
          <Link className={styles.tuInProceed} to={this.props.buttonLinks.next}>
            <div className={styles.tuInProceedComponentGroup}>
              <div className={styles.tuInProceedComponent1}>
                <i className="fa fa-chevron-right" aria-hidden="true"/>
              </div>
              <div className={styles.tuInProceedComponent2}>
                <i className="fa fa-chevron-right" aria-hidden="true"/>
              </div>
              <div className={styles.tuInProceedComponent3}>
                <i className="fa fa-chevron-right" aria-hidden="true"/>
              </div>
            </div>
            <div className={styles.tuInProceedText}>{'Go to part' + this.props.partNumber.toString()}</div>
          </Link> : <div/>}
      </div>
    );
  }
}

function mapDispatchToProps( dispatch ) {
  return {
    initial: () => {
      dispatch({ type: PLOT_DELETE_DATA});
    },
    clearConsole: (consoleId: ConsoleId) => {
      dispatch({ type: CONSOLE_CLEAR, consoleId });
    },
    clearDone: (consoleId: ConsoleId) => {
      dispatch({type: SIMULATION_CLEAR_DONE, consoleId});
    },
  };
}

const mapStateToProps = createStructuredSelector({
  partNumber: partNumberSelector(),
  buttonLinks: buttonLinksSelector(),
  leftBusy: busySelector(ConsoleId.left),
  rightBusy: busySelector(ConsoleId.right),
});

export default connect<any, any, any>(
  mapStateToProps,
  mapDispatchToProps,
)(Step1);
