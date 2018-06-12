import { connect } from 'react-redux';
import { CHANGE_BLOCK_NUMBER, XML_VISIT_ALL } from '../constants';
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

window.onclick = (event) => {
  if (event.target === document.getElementById('myModal')) {
    document.getElementById('myModal').style.display = 'none';
  }
};

class Tutorial extends React.Component<TutorialProps, any> {
  constructor(props: TutorialProps) {
    super(props);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.setMouseOver = this.setMouseOver.bind(this);
  }
  private openModal() {
    document.getElementById('myModal').style.display = 'block';
  }
  private closeModal() {
    document.getElementById('myModal').style.display = 'none';
  }
  private setMouseOver(e) {
    const mouseOn = e.currentTarget.id.substring(9, 10);
    const index = ['2', '3', '4', '5', '6'];
    for (let i in index) {
      document.getElementById('mouse' + index[i]).hidden = true;

    }
    document.getElementById('mouse' + mouseOn).hidden = false;
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
                  width="100"
                  title="Simulation is runnning"
                ><span>BACK</span>
                </Tooltip></div> :
              this.props.buttonLinks.previous && <Link to={this.props.buttonLinks.previous} className={styles.btnL}>BACK</Link>}
          </div>
          {/* Button next on almost all pages */}
          <div className={styles.btnSubCon}>
            {
              ((this.props.buttonLinks.next === '/tutorial/part' + this.props.partNumber.toString() + '/step3' &&
                (
                  !this.props.xmlflag['part' + this.props.partNumber][1] ||
                  !this.props.xmlflag['part' + this.props.partNumber][2] ||
                  !this.props.xmlflag['part' + this.props.partNumber][3] ||
                  !this.props.xmlflag['part' + this.props.partNumber][4] ||
                  !this.props.xmlflag['part' + this.props.partNumber][5] )) ?
                this.props.buttonLinks.next && <div onClick={this.openModal} className={styles.btnR}>NEXT</div> :
                ((this.props.buttonLinks.next === '/tutorial/part' + this.props.partNumber.toString() + '/step4' &&
                ( this.props.leftBusy || this.props.rightBusy )) ?
                  this.props.buttonLinks.next &&
                  <div className={styles.btnRDisabled}><Tooltip
                    width="100"
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
    xmlSkip: (partNumber) => {
      dispatch({type: XML_VISIT_ALL, part: partNumber});
      document.getElementById('myModal').style.display = 'none';
    },
    changeBlockNumber: (partNumber, blockNumber) => {
      dispatch({
        type: CHANGE_BLOCK_NUMBER,
        partNumber,
        blockNumber,
      });
      document.getElementById('myModal').style.display = 'none';
    },
  };
}


export default connect<{}, {}, TutorialProps>(
  mapStateToProps,
  mapDispatchToProps,
)(Tutorial);
