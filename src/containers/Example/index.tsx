import { connect } from "react-redux";
import { EXAMPLE_ACTION } from "../constants";
import { createStructuredSelector } from "reselect";
import * as React from 'react';
import { Link } from 'react-router-dom';

interface exampleProps {
}


class Example extends React.Component<exampleProps, undefined> {

  render() {
    return <div>This is an Example <Link to="/"> Link to Landing</Link></div>;
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
)(Example);
