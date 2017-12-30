import * as React from 'react';
import * as styles from './styles.scss';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { sunburstModified } from '../Step2/styleForSyntaxHighlighter';
import { xmlBackgroundColor, xmlEmphasizeBackgroundColor} from '../constants';

import * as config1 from '../configurationFile/config1';
import * as config2 from '../configurationFile/config2';

interface XmlBlockDynamicProps {
  blockNumber: string;
  lineIndexStart: number;
  lineIndexEnd: number;
  mouseOverLineIndexStart: number;
  mouseOverLineIndexEnd: number;
  partNumber: number;
}

const initial1 = config1.initial;
const initial2 = config2.initial;


class XmlBlockDynamic extends React.Component<XmlBlockDynamicProps, any> {
  public render() {
    return (
      <SyntaxHighlighter
        style={sunburstModified}
        showLineNumbers="true"
        startingLineNumber={eval('config' + this.props.partNumber.toString() + '.sec' + this.props.blockNumber + '.start')}
        language="xml"
        className={styles.highlighter}
        wrapLines={true}
        lineStyle={lineNumber => {
          const style = { display: 'block', backgroundColor: '' };
          const localLineNumber = lineNumber + eval('config' + this.props.partNumber.toString() + '.sec' + this.props.blockNumber + '.start') - 1;
          if (localLineNumber > this.props.lineIndexStart && localLineNumber < this.props.lineIndexEnd ) {
            style.backgroundColor = xmlBackgroundColor;
          } else if (localLineNumber > this.props.mouseOverLineIndexStart && localLineNumber < this.props.mouseOverLineIndexEnd) {
            style.backgroundColor = xmlBackgroundColor;
          }
          return style;
        }}
      >
        {eval('config' + this.props.partNumber.toString() + '.initialCodeString' + this.props.blockNumber)}
      </SyntaxHighlighter>
    );
  }
}

export default XmlBlockDynamic;
