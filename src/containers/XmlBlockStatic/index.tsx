import {connect} from 'react-redux';
import {EXAMPLE_ACTION} from '../constants';
import {createStructuredSelector} from 'reselect';
import * as React from 'react';
import {Link} from 'react-router-dom';
import * as styles from './styles.scss';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { sunburstModified } from '../Step2/styleForSyntaxHighlighter';
import * as config1 from '../configurationFile/config1';
import * as config2 from '../configurationFile/config2';



interface XmlBlockStaticProps {
  blockNumber: string;
  partNumber: number;
}

const initial1 = config1.initial;
const initial2 = config2.initial;

class XmlBlockStatic extends React.Component<XmlBlockStaticProps, any> {
  public render() {
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
    );
  }
}

export default XmlBlockStatic;
