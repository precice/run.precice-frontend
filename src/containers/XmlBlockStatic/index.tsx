import * as React from 'react';
import * as styles from './styles.scss';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { sunburstModified } from '../Step2/styleForSyntaxHighlighter';
import { config } from '../configurationFile/global_config';


interface XmlBlockStaticProps {
  blockNumber: string;
  partNumber: number;
}

class XmlBlockStatic extends React.Component<XmlBlockStaticProps, any> {
  public render() {
    if ( config[ this.props.partNumber - 1] ['sec' + this.props.blockNumber].total === 0) 
      return <div/>; 
    else 
        {
          const content = config[ this.props.partNumber  - 1]['initialCodeString' + this.props.blockNumber]
          if (content === "") 
              return ( <p></p> );
        else return (
        <SyntaxHighlighter
          style={sunburstModified}
          startingLineNumber={ config[ this.props.partNumber - 1]['sec' + this.props.blockNumber].start}
          language="xml"
          className={styles.highlighter}
          wrapLines={true}
        >
        {/* Display correpposnding part of the xml file */} 
        { content } 
        </SyntaxHighlighter>
        ); 
        }
    }
}

export default XmlBlockStatic;
