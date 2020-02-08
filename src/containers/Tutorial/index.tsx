import { connect } from 'react-redux';
import { CHANGE_BLOCK_NUMBER } from '../constants';
import { createStructuredSelector } from 'reselect';
import * as React from 'react';
import { Link } from 'react-router-dom';
import * as styles from './styles.scss';
import ProgressBar from '../Progress/index';
import { buttonLinksSelector, partNumberSelector, } from './selectors';
import { xmlflagSelector } from '../Step2/selectors';
import { busySelector } from '../Step3/selectors';
import { ConsoleId } from '../Step3/index';
import { Tooltip } from 'react-tippy';


interface TutorialProps {
  buttonLinks: {
    previous?: string,
    next?: string,
  };


  leftBusy: boolean;
  rightBusy: boolean;

  xmlSkip: (partNumber: number) => void;
  xmlflag: {
    part1: boolean[];
    part2: boolean[];
    part3: boolean[];
    part4: boolean[];
    part5: boolean[];
  };

  partNumber: number;
  changeBlockNumber: (partNumber: number, blockNumber: string) => void;
}

class Tutorial extends React.Component<TutorialProps, any> {
  constructor(props: TutorialProps) {
    super(props);
  }

  public render() {
    return (
      <div className={styles.tutorialContainer}>
        {/* Render progress bar if we in valid path*/ }
        <div> 
        { 
        ( this.props.buttonLinks.previous || this.props.buttonLinks.next) ? 
        <ProgressBar partNumber={this.props.partNumber}/> :
        <div/> 
        }
        </div> 
        <div className={styles.child}>{this.props.children}</div>
        {/* Button previous on all pages*/}
        <div className={styles.btnContainer}>
          {/* Remove buttons on first and last step */}
          <div className={styles.btnSubCon}>
            {
              (this.props.buttonLinks.previous === '/tutorial/part' + (this.props.partNumber - 1).toString() + '/step4' &&
              ( this.props.leftBusy || this.props.rightBusy )) ?
                this.props.buttonLinks.previous && <div className={styles.btnLDisabled}><Tooltip
                  title="Simulation is runnning"
                ><span>BACK</span>
                </Tooltip></div> :
              this.props.buttonLinks.previous && <Link to={this.props.buttonLinks.previous} className={styles.btnL}>BACK</Link>}
          </div>
          {/* Button next on almost all pages */}
          {/* If simulation is not running */} 
          {/* And if we are not in the end of the curent part */} 
          {/* If we go to the new part, we want to go the block number 6 */} 
          <div className={styles.btnSubCon}>
            {
              (((this.props.buttonLinks.next === '/tutorial/part' + this.props.partNumber.toString() + '/step4' &&
                ( this.props.leftBusy || this.props.rightBusy )) ?
                  this.props.buttonLinks.next &&
                  <div className={styles.btnRDisabled}><Tooltip
                    title="Simulation is runnning"
                  ><span>NEXT</span>
                  </Tooltip></div> :
                  ((this.props.buttonLinks.next === '/tutorial/part' + this.props.partNumber.toString() + '/step2' &&
                    this.props.partNumber !== 1) ?
                    <div/> : this.props.buttonLinks.next &&
                    <Link
                      onClick={() => {
                        if (this.props.buttonLinks.next.substr(-5) === 'step1') {
                          this.props.changeBlockNumber(this.props.partNumber, '6');
                        }
                      }
                      }
                      to={this.props.buttonLinks.next}
                      className={styles.btnR}
                    >NEXT
                    </Link>)))
            }
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  buttonLinks: buttonLinksSelector(),
  xmlflag: xmlflagSelector(),
  leftBusy: busySelector(ConsoleId.left),
  rightBusy: busySelector(ConsoleId.right),
  partNumber: partNumberSelector(),
});

function mapDispatchToProps(dispatch) {
  return {
    changeBlockNumber: (partNumber, blockNumber) => {
      dispatch({
        type: CHANGE_BLOCK_NUMBER,
        partNumber,
        blockNumber,
      });
    },
  };
}


export default connect<{}, {}, TutorialProps>(
  mapStateToProps,
  mapDispatchToProps,
)(Tutorial);
