import {connect} from 'react-redux';
import {XML_ALL_CLICK, MODAL_CLICK, BLOCKNUMBER_FLAG} from '../constants';
import {createStructuredSelector} from 'reselect';
import * as React from 'react';
import {Link} from 'react-router-dom';
import * as styles from './styles.scss';
import ProgressBar from '../Progress/index';
import * as config1 from '../configurationFile/config1';
import * as config2 from '../configurationFile/config2';
import * as config3 from '../configurationFile/config3';
import * as config4 from '../configurationFile/config4';
import * as config5 from '../configurationFile/config5';
import {
  buttonLinksSelector,
  percentageSelector,
  modalClickSelector,
  partNumberSelector,
  } from './selectors';
import { blockNumberSelector, xmlflagSelector} from '../Step2/selectors';
import {
  busySelector} from '../Step3/selectors';
import {
  ConsoleId} from '../Step3/index';
import { Tooltip } from 'react-tippy';


interface TutorialProps {
  percentage: number;
  buttonLinks: {
    previous?: string,
    next?: string,
  };


  leftBusy: boolean;
  rightBusy: boolean;

  xmlSkip: () => void;
  xmlflag: {
    part1: boolean[];
    part2: boolean[];
  };

  partNumber: number;
  blockNumber: string;
  blockNumberAction: () => void;
}

const initial1 = config1.initial;
const initial2 = config2.initial;
const initial3 = config3.initial;
const initial4 = config4.initial;
const initial5 = config5.initial;

let partNumber = 1;

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
  public componentWillReceiveProps(nextProps) {
    const xmlflag = eval('nextProps.xmlflag.part' + this.props.partNumber);
    const index = ['2', '3', '4', '5', '6'];
    let highest = 2;
    for (let i in index) {
      document.getElementById('mouse' + index[i]).hidden = true;

    }
    for (let i in xmlflag) {
      if (xmlflag[i] === false) {
        highest = Number(i)+1;
        document.getElementById('mouse' + highest).hidden = false;
        break;
      }
    }
  }

  public render() {
    return (
      <div className={styles.tutorialContainer}>
        <script>{partNumber = this.props.partNumber}</script>
        <div id="myModal" className={styles.modal}>
          {
            window.onclick = (event) => {
              if (event.target === document.getElementById('myModal')) {
                document.getElementById('myModal').style.display = 'none';
              }
            }
          }
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <div className={styles.subCon}/>
              <div className={styles.subTitle}>
                <h2>Oops, you forgot some parts</h2>
              </div>
              <div className={styles.subCon}>
                <div onClick={this.closeModal} className={styles.close}>&times;</div>
              </div>
            </div>
            <div className={styles.modalBody}>
              <div>
                <div hidden={eval('this.props.xmlflag.part' + this.props.partNumber + '[1]')}>
                  <div id="modallink2" onMouseOver={this.setMouseOver} onClick={this.props.blockNumberAction} className={styles.modalItem}>
                    {eval('config' + this.props.partNumber + '.sub2')}
                    <span id="mouse2" hidden={false}> <i className="fa fa-mouse-pointer" aria-hidden="true"/></span>
                  </div>
                </div>
                <div hidden={eval('this.props.xmlflag.part' + this.props.partNumber + '[2]')}>
                  <div id="modallink3" onMouseOver={this.setMouseOver} onClick={this.props.blockNumberAction} className={styles.modalItem}>
                    {eval('config' + this.props.partNumber + '.sub3')}
                    <span id="mouse3" hidden={true}> <i className="fa fa-mouse-pointer" aria-hidden="true"/></span>
                  </div>
                </div>
                <div hidden={eval('this.props.xmlflag.part' + this.props.partNumber + '[3]')}>
                  <div id="modallink4" onMouseOver={this.setMouseOver} onClick={this.props.blockNumberAction} className={styles.modalItem}>
                    {eval('config' + this.props.partNumber + '.sub4')}
                    <span id="mouse4" hidden={true}> <i className="fa fa-mouse-pointer" aria-hidden="true"/></span>
                  </div>
                </div>
                <div hidden={eval('this.props.xmlflag.part' + this.props.partNumber + '[4]')}>
                  <div id="modallink5" onMouseOver={this.setMouseOver} onClick={this.props.blockNumberAction} className={styles.modalItem}>
                    {eval('config' + this.props.partNumber + '.sub5')}
                    <span id="mouse5" hidden={true}> <i className="fa fa-mouse-pointer" aria-hidden="true"/></span>
                  </div>
                </div>
                <div hidden={eval('this.props.xmlflag.part' + this.props.partNumber + '[5]')}>
                  <div id="modallink6" onMouseOver={this.setMouseOver} onClick={this.props.blockNumberAction} className={styles.modalItem}>
                    {eval('config' + this.props.partNumber + '.sub6')}
                    <span id="mouse6" hidden={true}> <i className="fa fa-mouse-pointer" aria-hidden="true"/></span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.modalFooter}>
            {this.props.buttonLinks.next && <Link onClick={this.props.xmlSkip} to={this.props.buttonLinks.next} className={styles.modalBtn}>
              I want to skip those parts.
            </Link>}
            </div>
          </div>{/*modal content*/}
        </div>{/*the modal*/}
        <ProgressBar percentage={this.props.percentage} partNumber={partNumber}/>
        <div className={styles.child}>{this.props.children}</div>
        <div className={styles.btnContainer}>
          {/* Remove buttons on first and last step */}
          <div className={styles.btnSubCon}>
            {
              (this.props.buttonLinks.next === '/tutorial/part' + this.props.partNumber.toString() + '/step4' &&
              ( this.props.leftBusy || this.props.rightBusy )) ?
                this.props.buttonLinks.previous && <div className={styles.btnLDisabled}><Tooltip
                  width="100"
                  title="Simulation is runnning"
                ><span>BACK</span>
                </Tooltip></div> :
              this.props.buttonLinks.previous && <Link to={this.props.buttonLinks.previous} className={styles.btnL}>BACK</Link>}
          </div>
          <div className={styles.btnSubCon}>
            {
              ((this.props.buttonLinks.next === '/tutorial/part' + this.props.partNumber.toString() + '/step3' &&
              (
              !eval('this.props.xmlflag.part' + this.props.partNumber + '[1]') ||
              !eval('this.props.xmlflag.part' + this.props.partNumber + '[2]') ||
              !eval('this.props.xmlflag.part' + this.props.partNumber + '[3]') ||
              !eval('this.props.xmlflag.part' + this.props.partNumber + '[4]') ||
              !eval('this.props.xmlflag.part' + this.props.partNumber + '[5]') )) ?
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
                <Link to={this.props.buttonLinks.next} className={styles.btnR}>NEXT</Link>)))
            }
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  percentage: percentageSelector(),
  buttonLinks: buttonLinksSelector(),
  xmlflag: xmlflagSelector(),
  leftBusy: busySelector(ConsoleId.left),
  rightBusy: busySelector(ConsoleId.right),
  partNumber: partNumberSelector(),
  blockNumber: blockNumberSelector(),
});

function mapDispatchToProps(dispatch) {
  return {
    xmlSkip: () => {
      dispatch({type: XML_ALL_CLICK, part: partNumber});
      document.getElementById('myModal').style.display = 'none';
    },
    blockNumberAction: (event) => {
      dispatch({
        type: BLOCKNUMBER_FLAG,
        check: event.currentTarget.id.substring(9, 10),
      });
      document.getElementById('myModal').style.display = 'none';
    },
  };
}


export default connect<{}, {}, TutorialProps>(
  mapStateToProps,
  mapDispatchToProps,
)(Tutorial);
