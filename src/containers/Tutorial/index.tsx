import { connect } from 'react-redux';
import { EXAMPLE_ACTION } from '../constants';
import { createStructuredSelector } from 'reselect';
import * as React from 'react';
import { Link } from 'react-router-dom';

interface TutorialProps {
  example: () => void;
}


class Tutorial extends React.Component<TutorialProps, undefined> {

  public render() {
    return (
      <div>Tutorial (progressbar)
        <div>{this.props.children}</div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({});

function mapDispatchToProps(dispatch) {
  return {
    example: () => dispatch({ type: EXAMPLE_ACTION }),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Tutorial);
