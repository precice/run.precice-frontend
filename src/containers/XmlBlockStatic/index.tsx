import * as React from 'react';
import * as styles from './styles.scss';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { sunburstModified } from '../Step2/styleForSyntaxHighlighter';
import * as config1 from '../configurationFile/config1';
import * as config2 from '../configurationFile/config2';
import * as config3 from '../configurationFile/config3';
import * as config4 from '../configurationFile/config4';
import * as config5 from '../configurationFile/config5';



interface XmlBlockStaticProps {
  blockNumber: string;
  partNumber: number;
}

// this part is essential for eval
const initial1 = config1.initial;
const initial2 = config2.initial;
const initial3 = config3.initial;
const initial4 = config4.initial;
const initial5 = config5.initial;

class XmlBlockStatic extends React.Component<XmlBlockStaticProps, any> {
  public render() {
    if (eval('config' + this.props.partNumber.toString() + '.sec' + this.props.blockNumber + '.total') === 0) {
      return <div/>; } else {
    return (
        <SyntaxHighlighter
          style={sunburstModified}
          showLineNumbers="true"
          startingLineNumber={eval('config' + this.props.partNumber.toString() + '.sec' + this.props.blockNumber + '.start')}
          language="xml"
          className={styles.highlighter}
          wrapLines={true}
        >
          {eval('config' + this.props.partNumber.toString() + '.initialCodeString' + this.props.blockNumber)
          }
        </SyntaxHighlighter>
    ); }
  }
}

export default XmlBlockStatic;
