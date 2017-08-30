import {connect} from 'react-redux';
import {EXAMPLE_ACTION} from '../constants';
import {createStructuredSelector} from 'reselect';
import * as React from 'react';
import {Link} from 'react-router-dom';
import * as styles from './styles.scss';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { sunburst } from 'react-syntax-highlighter/dist/styles/';
import * as TextForStep2 from './TextForStep2';
import {lineSelector} from './selectors';

interface Step2Props {
  lineIndex: {
    start: number,
    end: number,
  };
}

class Step2 extends React.Component<Step2Props, any> {
  constructor() {
    super();
    this.state = {
      code: TextForStep2.initialCodeString,
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

  public render() {
    return (
      <div className={styles.subContainer}>
        <div className={styles.expContainer}>
          <div onClick={this.shrinkWhatToDo} className={styles.expHeader}>
            what to do
          </div>
          <div className={styles.expContent} hidden={this.state.hid}>
            preCICE is set up via a precice-config.xml file. It contains all the settings preCICE needs to run the
            coupled simulation.
            <br/>
            Following this five sub-step, you will learn how to set up the configuration file.
            <br/>
            <li><Link to="/tutorial/step2/sub1" className={styles.link}>{TextForStep2.sub1}</Link></li>
            <li><Link to="/tutorial/step2/sub2" className={styles.link}>{TextForStep2.sub2}</Link></li>
            <li><Link to="/tutorial/step2/sub3" className={styles.link}>{TextForStep2.sub3}</Link></li>
            <li><Link to="/tutorial/step2/sub4" className={styles.link}>{TextForStep2.sub4}</Link></li>
            <li><Link to="/tutorial/step2/sub5" className={styles.link}>{TextForStep2.sub5}</Link></li>
            (TIP1: click "WHAT TO DO" to shrink the instruction)
            <br/>
            (TIP2: click each step to go directly to the step)
          </div>
        </div>
        <div className={styles.interactContainer}>
        <div className={styles.xml}>
          <SyntaxHighlighter style={sunburst}
                             showLineNumbers="true"
                             language="xml"
                             wrapLines={true}
                             lineStyle={lineNumber => {
                               let style = { display: 'block', backgroundColor: '' };
                               if (lineNumber > this.props.lineIndex.start && lineNumber < this.props.lineIndex.end) {
                                 style.backgroundColor = '#404040';
                               }
                               return style;
                             }}>
            {this.state.code}
            {}
          </SyntaxHighlighter>
        </div>
        <div className={styles.commentContainer}>
          <div className={styles.commentHeader}>
            Explanation
          </div>
          <div className={styles.exp}>
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
});

function mapDispatchToProps(dispatch) {
  return {
    example: () => dispatch({type: EXAMPLE_ACTION}),
  };
}

export default connect < any, any, any > (
  mapStateToProps,
  mapDispatchToProps
)(Step2);

