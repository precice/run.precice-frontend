import { connect } from 'react-redux';
import { EXAMPLE_ACTION } from '../constants';
import { createStructuredSelector } from 'reselect';
import * as React from 'react';
import { Tooltip } from 'react-tippy';
import Part1Sub from '../Step2SubExplanation/Part1Sub/index';
import Part2Sub from '../Step2SubExplanation/Part2Sub/index';


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
    }

  }
}

const mapStateToProps = createStructuredSelector({});

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect<any, any, any>(
  mapStateToProps,
  mapDispatchToProps,
)(Step2SubExplanationBlock);

