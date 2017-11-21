import { connect } from 'react-redux';
import { HID_CHECK2, XML_CLICK, IVE_READ,  } from '../constants';
import { xmlBackgroundColor, xmlEmphasizeBackgroundColor} from '../constants';
import { createStructuredSelector } from 'reselect';
import * as React from 'react';
import { Link } from 'react-router-dom';
import * as styles from './styles.scss';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { sunburst } from 'react-syntax-highlighter/dist/styles/';
import * as TextForStep2 from './TextForStep2';
import {
  lineSelector,
  titleSelector,
  hidCheckSelector,
  xmlFlag1Selector,
  xmlFlag2Selector,
  xmlFlag3Selector,
  xmlFlag4Selector,
  xmlFlag5Selector,
  xmlFlag6Selector,
  iveReadSelector,
  initialRelaxationValueSelector} from './selectors';
import {
  completedTaskSelector,
  modalClickSelector} from '../Tutorial/selectors';

interface Step2Props {
  lineIndex: {
    start: number,
    end: number,
    section: string,
  };
  hidAction: () => void;
  hidCheck2: boolean;
  subStepTitle: string;
  firstTaskCompleted: boolean;
  iveReadAction: () => void;
  iveReadStep2: boolean;
  modalClick: boolean;
  xmlAction: () => void;
  xmlflag1: boolean;
  xmlflag2: boolean;
  xmlflag3: boolean;
  xmlflag4: boolean;
  xmlflag5: boolean;
  xmlflag6: boolean;
  initialRelaxationValue: number;
}

let whichSection = '';
class Step2 extends React.Component<Step2Props, any> {
  constructor(props: Step2Props) {
    super(props);
    this.state = {
      mouseOverLineIndex: {
        start: 1,
        end: 1,
      },
    };
    this.setMouseOver = this.setMouseOver.bind(this);
    this.setMouseOut = this.setMouseOut.bind(this);
    this.closeOverlay = this.closeOverlay.bind(this);
    this.ButtonColorChange = this.ButtonColorChange.bind(this);
    this.ButtonColorOriginal = this.ButtonColorOriginal.bind(this);
  }
  private setMouseOver(event) {
    switch (event.currentTarget.id) {
      case 'xml1': {
        return this.setState({mouseOverLineIndex: {
          start: TextForStep2.sec1.start - 1 ,
          end: TextForStep2.sec1.end + 1,
        }});
      }
      case 'xml2': {
        return this.setState({mouseOverLineIndex: {
          start: TextForStep2.sec2.start - 1,
          end: TextForStep2.sec2.end + 1,
        }});
      }
      case 'xml3': {
        return this.setState({mouseOverLineIndex: {
          start: TextForStep2.sec3.start - 1,
          end: TextForStep2.sec3.end + 1,
        }});
      }
      case 'xml4': {
        return this.setState({mouseOverLineIndex: {
          start: TextForStep2.sec4.start - 1,
          end: TextForStep2.sec4.end + 1,
        }});
      }
      case 'xml5': {
        return this.setState({mouseOverLineIndex: {
          start: TextForStep2.sec5.start - 1,
          end: TextForStep2.sec5.end + 1,
        }});
      }
      case 'xml6': {
        return this.setState({mouseOverLineIndex: {
          start: TextForStep2.sec6.start - 1,
          end: TextForStep2.sec6.end + 1,
        }});
      }
    }
  }
  private setMouseOut(event) {
    this.setState({mouseOverLineIndex: {
      start: 1,
      end: 1,
    }});
  }
  private closeOverlay() {
    document.getElementById('overlay').style.display = 'none';
    this.props.iveReadAction();
  }
  private ButtonColorChange(event) {
    document.getElementById(event.currentTarget.id).style.color = 'gray';
    document.getElementById(event.currentTarget.id).style.borderColor = 'gray';
  }
  private ButtonColorOriginal(event) {
    document.getElementById(event.currentTarget.id).style.color = 'white';
    document.getElementById(event.currentTarget.id).style.borderColor = 'white';
  }
  public render() {
    return (
      <div onMouseOver={this.props.xmlAction} className={styles.subContainer}>
        {!this.props.iveReadStep2 ?
        <div id="overlay" className={styles.overlay}>
          <div className={styles.overlayLanding}>This is a small guide on how to use the website</div>
          <div className={styles.overlayIntro}>You can hide this box <br/> by clicking HIDE <span className="fa fa-long-arrow-right" style={{ fontSize: '18px' }}/></div>
          <div className={styles.overlayXml}>By clicking on these lines, <br/>you can see an explanation of each section on the right</div>
          <div className={styles.overlayExp}>You see the explanation for each section here.
          Also, you can click on <span className="fa fa-question-circle" style={{ fontSize: '18px' }}/> to get further information.</div>
          <div id="overlayButton"onClick={this.closeOverlay} onMouseOver={this.ButtonColorChange} onMouseOut={this.ButtonColorOriginal} className={styles.overlayButton}>CLOSE</div>
        </div> :
          <div/>}
        <script>{whichSection = this.props.lineIndex.section}</script>
        <div className={styles.expContainer}>
          <div className={styles.expHeader}>
            <span className={styles.hide}/>
            <span className={styles.title}>what to do</span>
            <span id="hideButton" onClick={this.props.hidAction} className={styles.hide} onMouseOver={this.ButtonColorChange}  onMouseOut={this.ButtonColorOriginal} >{this.props.hidCheck2 ? 'expand' : 'hide'}
            </span>
          </div>
          <div id="hideStep2" className={styles.expContent} hidden={this.props.hidCheck2}>
            preCICE is set up via a precice-config.xml file. It contains most of the settings preCICE needs to run the
            coupled simulation. Furthermore, we need solver specific configuartion files, that we will not discuss in this tutorial.
            <br/>
            Click on the XML code on the left to learn how to set up the configuration file.
            <br/>
            <li><Link to="/tutorial/step2/sub1" className={styles.link}>{TextForStep2.sub1} (line 5 ~ 9)</Link></li>
            <li><Link to="/tutorial/step2/sub2" className={styles.link}>{TextForStep2.sub2} (line 12 ~ 20)</Link></li>
            <li><Link to="/tutorial/step2/sub3" className={styles.link}>{TextForStep2.sub3} (line 26 ~ 35)</Link></li>
            <li><Link to="/tutorial/step2/sub4" className={styles.link}>{TextForStep2.sub4} (line 37 ~ 40)</Link></li>
            <li><Link to="/tutorial/step2/sub5" className={styles.link}>{TextForStep2.sub5} (line 44)</Link></li>
            <li><Link to="/tutorial/step2/sub6" className={styles.link}>{TextForStep2.sub6} (line 46 ~ 61)</Link></li>
          </div>
        </div>
        <div className={styles.interactContainer}>
          <div id="ScrollableXmlContainer" className={styles.xml}>
            <SyntaxHighlighter
              id="xml0"
              style={TextForStep2.sunburstModified}
              showLineNumbers="true"
              language="xml"
              className={styles.highlighter}
              wrapLines={true}
              lineStyle={lineNumber => {
                const style = { display: 'block', backgroundColor: '' };
                if (lineNumber > this.props.lineIndex.start && lineNumber < this.props.lineIndex.end ) {
                  style.backgroundColor = xmlBackgroundColor;
                } else if (lineNumber > this.state.mouseOverLineIndex.start && lineNumber < this.state.mouseOverLineIndex.end) {
                  style.backgroundColor = xmlBackgroundColor;
                }
                return style;
              }}
              onMouseOver={this.setMouseOver}
              onMouseOut={this.setMouseOut}
            >
              {TextForStep2.initialCodeString0}
            </SyntaxHighlighter>{/*text01*/}
            <Link to="/tutorial/step2/sub1">
              <SyntaxHighlighter
                id="xml1"
                style={TextForStep2.sunburstModified}
                showLineNumbers="true"
                startingLineNumber={TextForStep2.sec1.start}
                language="xml"
                className={styles.highlighter}
                wrapLines={true}
                lineStyle={lineNumber => {
                  const style = { display: 'block', backgroundColor: '' };
                  const localLineNumber = lineNumber + TextForStep2.sec01.end;
                  if (localLineNumber > this.props.lineIndex.start && localLineNumber < this.props.lineIndex.end ) {
                    style.backgroundColor = xmlBackgroundColor;
                  } else if (localLineNumber > this.state.mouseOverLineIndex.start && localLineNumber < this.state.mouseOverLineIndex.end) {
                    style.backgroundColor = xmlBackgroundColor;
                  }
                  return style;
                }}
                onMouseOver={this.setMouseOver}
                onMouseOut={this.setMouseOut}
              >
              {TextForStep2.initialCodeString1}
              </SyntaxHighlighter>{/*text1*/}
            </Link>
            <SyntaxHighlighter
              id="xml12"
              style={TextForStep2.sunburstModified}
              showLineNumbers="true"
              startingLineNumber={TextForStep2.sec12.start}
              language="xml"
              className={styles.highlighter}
              wrapLines={true}
              lineStyle={lineNumber => {
                const style = { display: 'block', backgroundColor: '' };
                const localLineNumber = lineNumber + TextForStep2.sec1.end;
                if (localLineNumber > this.props.lineIndex.start && localLineNumber < this.props.lineIndex.end ) {
                  style.backgroundColor = xmlBackgroundColor;
                } else if (localLineNumber > this.state.mouseOverLineIndex.start && localLineNumber < this.state.mouseOverLineIndex.end) {
                  style.backgroundColor = xmlBackgroundColor;
                }
                return style;
              }}
              onMouseOver={this.setMouseOver}
              onMouseOut={this.setMouseOut}
            >
              {TextForStep2.initialCodeString12}
            </SyntaxHighlighter>{/*text12*/}
            <Link to="/tutorial/step2/sub2">
              <SyntaxHighlighter
                id="xml2"
                style={TextForStep2.sunburstModified}
                showLineNumbers="true"
                startingLineNumber={TextForStep2.sec2.start}
                language="xml"
                className={styles.highlighter}
                wrapLines={true}
                lineStyle={lineNumber => {
                  const style = { display: 'block', backgroundColor: '' };
                  const localLineNumber = lineNumber + TextForStep2.sec12.end;
                  if (localLineNumber > this.props.lineIndex.start && localLineNumber < this.props.lineIndex.end ) {
                    style.backgroundColor = xmlBackgroundColor;
                  } else if (localLineNumber > this.state.mouseOverLineIndex.start && localLineNumber < this.state.mouseOverLineIndex.end) {
                    style.backgroundColor = xmlBackgroundColor;
                  } else if (this.props.modalClick &&
                              !this.props.xmlflag2 &&
                          (localLineNumber > TextForStep2.sec2.start - 1 && localLineNumber < TextForStep2.sec2.end + 1)) {
                    style.backgroundColor = xmlEmphasizeBackgroundColor;
                  }
                  return style;
                }}
                onMouseOver={this.setMouseOver}
                onMouseOut={this.setMouseOut}
              >
                {TextForStep2.initialCodeString2}
              </SyntaxHighlighter>{/*text2*/}
            </Link>
            <SyntaxHighlighter
              id="xml23"
              style={TextForStep2.sunburstModified}
              showLineNumbers="true"
              startingLineNumber={TextForStep2.sec23.start}
              language="xml"
              className={styles.highlighter}
              wrapLines={true}
              lineStyle={lineNumber => {
                const style = { display: 'block', backgroundColor: '' };
                const localLineNumber = lineNumber + TextForStep2.sec2.end;
                if (localLineNumber > this.props.lineIndex.start && localLineNumber < this.props.lineIndex.end ) {
                  style.backgroundColor = xmlBackgroundColor;
                } else if (localLineNumber > this.state.mouseOverLineIndex.start && localLineNumber < this.state.mouseOverLineIndex.end) {
                  style.backgroundColor = xmlBackgroundColor;
                }
                return style;
              }}
              onMouseOver={this.setMouseOver}
              onMouseOut={this.setMouseOut}
            >
              {TextForStep2.initialCodeString23}
            </SyntaxHighlighter>{/*text23*/}
            <Link to="/tutorial/step2/sub3">
              <SyntaxHighlighter
                id="xml3"
                style={TextForStep2.sunburstModified}
                showLineNumbers="true"
                startingLineNumber={TextForStep2.sec3.start}
                language="xml"
                className={styles.highlighter}
                wrapLines={true}
                lineStyle={lineNumber => {
                  const style = { display: 'block', backgroundColor: '' };
                  const localLineNumber = lineNumber + TextForStep2.sec23.end;
                  if (localLineNumber > this.props.lineIndex.start && localLineNumber < this.props.lineIndex.end ) {
                    style.backgroundColor = xmlBackgroundColor;
                  } else if (localLineNumber > this.state.mouseOverLineIndex.start && localLineNumber < this.state.mouseOverLineIndex.end) {
                    style.backgroundColor = xmlBackgroundColor;
                  }else if (this.props.modalClick &&
                    !this.props.xmlflag3 &&
                    (localLineNumber > TextForStep2.sec3.start - 1 && localLineNumber < TextForStep2.sec3.end + 1)) {
                    style.backgroundColor = xmlEmphasizeBackgroundColor;
                  }
                  return style;
                }}
                onMouseOver={this.setMouseOver}
                onMouseOut={this.setMouseOut}
              >
                {TextForStep2.initialCodeString3}
              </SyntaxHighlighter>{/*text3*/}
            </Link>
            <SyntaxHighlighter
              id="xml34"
              style={TextForStep2.sunburstModified}
              showLineNumbers="true"
              startingLineNumber={TextForStep2.sec34.start}
              language="xml"
              className={styles.highlighter}
              wrapLines={true}
              lineStyle={lineNumber => {
                const style = { display: 'block', backgroundColor: '' };
                const localLineNumber = lineNumber + TextForStep2.sec3.end;
                if (localLineNumber > this.props.lineIndex.start && localLineNumber < this.props.lineIndex.end ) {
                  style.backgroundColor = xmlBackgroundColor;
                } else if (localLineNumber > this.state.mouseOverLineIndex.start && localLineNumber < this.state.mouseOverLineIndex.end) {
                  style.backgroundColor = xmlBackgroundColor;
                }
                return style;
              }}
              onMouseOver={this.setMouseOver}
              onMouseOut={this.setMouseOut}
            >
              {TextForStep2.initialCodeString34}
            </SyntaxHighlighter>{/*text34*/}
            <Link to="/tutorial/step2/sub4">
              <SyntaxHighlighter
                id="xml4"
                style={TextForStep2.sunburstModified}
                showLineNumbers="true"
                startingLineNumber={TextForStep2.sec4.start}
                language="xml"
                className={styles.highlighter}
                wrapLines={true}
                lineStyle={lineNumber => {
                  const style = { display: 'block', backgroundColor: '' };
                  const localLineNumber = lineNumber + TextForStep2.sec34.end;
                  if (localLineNumber > this.props.lineIndex.start && localLineNumber < this.props.lineIndex.end ) {
                    style.backgroundColor = xmlBackgroundColor;
                  } else if (localLineNumber > this.state.mouseOverLineIndex.start && localLineNumber < this.state.mouseOverLineIndex.end) {
                    style.backgroundColor = xmlBackgroundColor;
                  } else if (this.props.modalClick &&
                    !this.props.xmlflag4 &&
                    (localLineNumber > TextForStep2.sec4.start - 1 && localLineNumber < TextForStep2.sec4.end + 1)) {
                    style.backgroundColor = xmlEmphasizeBackgroundColor;
                  }
                  return style;
                }}
                onMouseOver={this.setMouseOver}
                onMouseOut={this.setMouseOut}
              >
                {TextForStep2.initialCodeString4}
              </SyntaxHighlighter>{/*text4*/}
            </Link>
            <SyntaxHighlighter
              id="xml45"
              style={TextForStep2.sunburstModified}
              showLineNumbers="true"
              startingLineNumber={TextForStep2.sec45.start}
              language="xml"
              className={styles.highlighter}
              wrapLines={true}
              lineStyle={lineNumber => {
                const style = { display: 'block', backgroundColor: '' };
                const localLineNumber = lineNumber + TextForStep2.sec4.end;
                if (localLineNumber > this.props.lineIndex.start && localLineNumber < this.props.lineIndex.end ) {
                  style.backgroundColor = xmlBackgroundColor;
                } else if (localLineNumber > this.state.mouseOverLineIndex.start && localLineNumber < this.state.mouseOverLineIndex.end) {
                  style.backgroundColor = xmlBackgroundColor;
                }
                return style;
              }}
              onMouseOver={this.setMouseOver}
              onMouseOut={this.setMouseOut}
            >
              {TextForStep2.initialCodeString45}
            </SyntaxHighlighter>{/*text45*/}
            <Link to="/tutorial/step2/sub5">
              <SyntaxHighlighter
                id="xml5"
                style={TextForStep2.sunburstModified}
                showLineNumbers="true"
                startingLineNumber={TextForStep2.sec5.start}
                language="xml"
                className={styles.highlighter}
                wrapLines={true}
                lineStyle={lineNumber => {
                  const style = { display: 'block', backgroundColor: '' };
                  const localLineNumber = lineNumber + TextForStep2.sec45.end;
                  if (localLineNumber > this.props.lineIndex.start && localLineNumber < this.props.lineIndex.end ) {
                    style.backgroundColor = xmlBackgroundColor;
                  } else if (localLineNumber > this.state.mouseOverLineIndex.start && localLineNumber < this.state.mouseOverLineIndex.end) {
                    style.backgroundColor = xmlBackgroundColor;
                  } else if (this.props.modalClick &&
                    !this.props.xmlflag5 &&
                    (localLineNumber > TextForStep2.sec5.start - 1 && localLineNumber < TextForStep2.sec5.end + 1)) {
                    style.backgroundColor = xmlEmphasizeBackgroundColor;
                  }
                  return style;
                }}
                onMouseOver={this.setMouseOver}
                onMouseOut={this.setMouseOut}
              >
                {TextForStep2.initialCodeString5}
              </SyntaxHighlighter>{/*text5*/}
            </Link>
            <SyntaxHighlighter
              id="xml56"
              style={TextForStep2.sunburstModified}
              showLineNumbers="true"
              startingLineNumber={TextForStep2.sec56.start}
              language="xml"
              className={styles.highlighter}
              wrapLines={true}
              lineStyle={lineNumber => {
                const style = { display: 'block', backgroundColor: '' };
                const localLineNumber = lineNumber + TextForStep2.sec5.end;
                if (localLineNumber > this.props.lineIndex.start && localLineNumber < this.props.lineIndex.end ) {
                  style.backgroundColor = xmlBackgroundColor;
                } else if (localLineNumber > this.state.mouseOverLineIndex.start && localLineNumber < this.state.mouseOverLineIndex.end) {
                  style.backgroundColor = xmlBackgroundColor;
                }
                return style;
              }}
              onMouseOver={this.setMouseOver}
              onMouseOut={this.setMouseOut}
            >
              {TextForStep2.initialCodeString56}
            </SyntaxHighlighter>{/*text56*/}
            <Link to="/tutorial/step2/sub6">
              <SyntaxHighlighter
                id="xml6"
                style={TextForStep2.sunburstModified}
                showLineNumbers="true"
                startingLineNumber={TextForStep2.sec6.start}
                language="xml"
                className={styles.highlighter}
                wrapLines={true}
                lineStyle={lineNumber => {
                  const style = { display: 'block', backgroundColor: '' };
                  const localLineNumber = lineNumber + TextForStep2.sec56.end;
                  if (this.props.firstTaskCompleted && localLineNumber === 60 ) {
                    style.backgroundColor = xmlEmphasizeBackgroundColor;
                  } else if (localLineNumber > this.props.lineIndex.start && localLineNumber < this.props.lineIndex.end ) {
                    style.backgroundColor = xmlBackgroundColor;
                  } else if (localLineNumber > this.state.mouseOverLineIndex.start && localLineNumber < this.state.mouseOverLineIndex.end) {
                    style.backgroundColor = xmlBackgroundColor;
                  } else if (this.props.modalClick &&
                    !this.props.xmlflag6 &&
                    (localLineNumber > TextForStep2.sec6.start - 1 && localLineNumber < TextForStep2.sec6.end + 1)) {
                    style.backgroundColor = xmlEmphasizeBackgroundColor;
                  }
                  return style;
                }}
                onMouseOver={this.setMouseOver}
                onMouseOut={this.setMouseOut}
              >
                {TextForStep2.initialCodeString6Begin + '"' + this.props.initialRelaxationValue.toString() + '"' + TextForStep2.initialCodeString6End}
              </SyntaxHighlighter>{/*text6*/}
            </Link>
            <SyntaxHighlighter
              id="xmlEnd"
              style={TextForStep2.sunburstModified}
              showLineNumbers="true"
              startingLineNumber={TextForStep2.sec60.start}
              language="xml"
              className={styles.highlighter}
              wrapLines={true}
              lineStyle={lineNumber => {
                const style = { display: 'block', backgroundColor: '' };
                const localLineNumber = lineNumber + TextForStep2.sec6.end;
                if (localLineNumber > this.props.lineIndex.start && localLineNumber < this.props.lineIndex.end ) {
                  style.backgroundColor = xmlBackgroundColor;
                } else if (localLineNumber > this.state.mouseOverLineIndex.start && localLineNumber < this.state.mouseOverLineIndex.end) {
                  style.backgroundColor = xmlBackgroundColor;
                }
                return style;
              }}
              onMouseOver={this.setMouseOver}
              onMouseOut={this.setMouseOut}
            >
              {TextForStep2.initialCodeStringEnd}
            </SyntaxHighlighter>{/*textend*/}
          </div>{/*XML*/}
          <div className={styles.commentContainer}>
            <div className={styles.commentHeader}>
              {this.props.subStepTitle}
            </div>
            <div  className={styles.exp}>
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  lineIndex: lineSelector(),
  subStepTitle: titleSelector(),
  hidCheck2: hidCheckSelector(),
  xmlflag1: xmlFlag1Selector(),
  xmlflag2: xmlFlag2Selector(),
  xmlflag3: xmlFlag3Selector(),
  xmlflag4: xmlFlag4Selector(),
  xmlflag5: xmlFlag5Selector(),
  xmlflag6: xmlFlag6Selector(),
  firstTaskCompleted: completedTaskSelector(),
  modalClick: modalClickSelector(),
  iveReadStep2: iveReadSelector('Step2'),
  initialRelaxationValue: initialRelaxationValueSelector(),
});

function mapDispatchToProps(dispatch) {
  return {
    hidAction: () => { dispatch({ type: HID_CHECK2, check: document.getElementById('hideStep2').hidden}); },
    xmlAction: () => { dispatch({ type: XML_CLICK, check: whichSection}); },
    iveReadAction: () => { dispatch({ type: IVE_READ, whichStep: 'Step2'}); },
  };
}

export default connect<any, any, any>(
  mapStateToProps,
  mapDispatchToProps,
)(Step2);

