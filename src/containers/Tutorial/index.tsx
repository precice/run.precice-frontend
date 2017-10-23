import {connect} from 'react-redux';
import {XML_ALL_CLICK} from '../constants';
import {createStructuredSelector} from 'reselect';
import * as React from 'react';
import {Link} from 'react-router-dom';
import * as styles from './styles.scss';
import ProgressBar from '../Progress/index';
import {
  buttonLinksSelector,
  percentageSelector} from './selectors';
import {
  xmlFlag1Selector,
  xmlFlag2Selector,
  xmlFlag3Selector,
  xmlFlag4Selector,
  xmlFlag5Selector,
  xmlFlag6Selector} from '../Step2/selectors';

interface TutorialProps {
  percentage: number;
  buttonLinks: {
    previous?: string,
    current: string,
    next?: string,
  };
  xmlSkip: () => void;
  xmlflag2: boolean;
  xmlflag3: boolean;
  xmlflag4: boolean;
  xmlflag5: boolean;
  xmlflag6: boolean;
}

class Tutorial extends React.Component<TutorialProps, any> {
  constructor(props: TutorialProps) {
    super(props);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  private openModal() {
    document.getElementById('myModal').style.display = 'block';
  }
  private closeModal() {
    document.getElementById('myModal').style.display = 'none';
  }
  public render() {
    return (
      <div className={styles.tutorialContainer}>
        <div id="myModal" className={styles.modal}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <span onClick={this.closeModal} className={styles.close}>&times;</span>
              <h2>Oops, you forgot some parts ;-)</h2>
            </div>
            <div className={styles.modalBody}>
              Click on line
              <span hidden={this.props.xmlflag2}> 12~20,</span>
              <span hidden={this.props.xmlflag3}> 26~35,</span>
              <span hidden={this.props.xmlflag4}> 37~41,</span>
              <span hidden={this.props.xmlflag5}> 44,</span>
              <span hidden={this.props.xmlflag6}> 46-61,</span>
               to check the explanation.
            </div>
            {this.props.buttonLinks.next && <Link onClick={this.props.xmlSkip} to={this.props.buttonLinks.next} className={styles.modalFooter}>
            No, I want to skip those parts.
            </Link>}
          </div>{/*modal content*/}
        </div>{/*the modal*/}
        <ProgressBar percentage={this.props.percentage}/>
        <div className={styles.child}>{this.props.children}</div>
        <div className={styles.btnContainer}>
          {/* Remove buttons on first and last step */}
          <div className={styles.btnSubCon}>
            {this.props.buttonLinks.previous && <Link to={this.props.buttonLinks.previous} className={styles.btnL}>BACK</Link>}
          </div>
          {/*
          <div className={styles.btnSubCon}>
            <Link to={this.props.buttonLinks.current} className={styles.btn}> VALIDATE</Link>
          </div>
          */}
          <div className={styles.btnSubCon}>
            {
              (this.props.buttonLinks.next === '/tutorial/step3' &&
              ( this.props.xmlflag2 === false ||
                this.props.xmlflag3 === false ||
                this.props.xmlflag4 === false ||
                this.props.xmlflag5 === false ||
                this.props.xmlflag6 === false )) ?
                this.props.buttonLinks.next && <div onClick={this.openModal} className={styles.btnR}>NEXT</div> :
                this.props.buttonLinks.next && <Link to={this.props.buttonLinks.next} className={styles.btnR}>NEXT</Link>
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
  xmlflag2: xmlFlag2Selector(),
  xmlflag3: xmlFlag3Selector(),
  xmlflag4: xmlFlag4Selector(),
  xmlflag5: xmlFlag5Selector(),
  xmlflag6: xmlFlag6Selector(),
});

function mapDispatchToProps(dispatch) {
  return {
    xmlSkip: () => { dispatch({ type: XML_ALL_CLICK}); document.getElementById('myModal').style.display = 'none'; },
  };
}

export default connect<{}, {}, TutorialProps>(
  mapStateToProps,
  mapDispatchToProps,
)(Tutorial);
