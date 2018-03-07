import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import * as React from 'react';
import { Tooltip } from 'react-tippy';
import Part1Sub from '../Step2SubExplanation/Part1Sub/index';
import Part2Sub from '../Step2SubExplanation/Part2Sub/index';
import Part3Sub from '../Step2SubExplanation/Part3Sub/index';
import Part4Sub from '../Step2SubExplanation/Part4Sub/index';
import Part5Sub from '../Step2SubExplanation/Part5Sub/index';


interface Step2SubExplanationBlockProps {
  partNumber: number;
  blockNumber: string;
}

class Step2SubExplanationBlock extends React.Component<Step2SubExplanationBlockProps, any> {
  public render() {
    switch (this.props.partNumber) {
      case 1 :
        return (<Part1Sub blockNumber={this.props.blockNumber}/>);
      case 2:
        return (<Part2Sub blockNumber={this.props.blockNumber}/>);
      case 3:
        return (<Part3Sub blockNumber={this.props.blockNumber}/>);
      case 4:
        return (<Part4Sub blockNumber={this.props.blockNumber}/>);
      case 5:
        return (<Part5Sub blockNumber={this.props.blockNumber}/>);
    }

  }
}

const mapStateToProps = createStructuredSelector({});

export default connect<any, any, any>(
  mapStateToProps,
)(Step2SubExplanationBlock);

