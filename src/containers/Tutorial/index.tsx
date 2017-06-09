import { connect } from "react-redux";
import { EXAMPLE_ACTION } from "../constants";
import { createStructuredSelector } from "reselect";
import * as React from 'react';
import { Link } from 'react-router-dom';

interface tutorialProps {
}


class Tutorial extends React.Component<tutorialProps, undefined> {

  render() {
    return <div>Tutorial (progressbar)<div>{this.props.children}</div></div>;
  }
}

const mapStateToProps = createStructuredSelector({});

function mapDispatchToProps(dispatch) {
  return {
    example: () => dispatch({ type: EXAMPLE_ACTION }),
  };
}

export default connect<any, any, any>(
  mapStateToProps,
  mapDispatchToProps
)(Tutorial);
