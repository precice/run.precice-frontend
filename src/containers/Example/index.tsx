import { connect } from 'react-redux';
import { EXAMPLE_ACTION } from '../constants';
import { createStructuredSelector } from 'reselect';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { exampleFieldSelector } from './selectors';

interface ExampleProps {
  example: () => void;
  exampleField: string;
}


class Example extends React.Component<ExampleProps, undefined> {

  public render() {
    return (
      <div>This is an Example <Link to="/"> Link to Landing</Link>
        <button onClick={this.props.example}>Change state
        </button>
        <div>Example Field value: {this.props.exampleField}</div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  exampleField: exampleFieldSelector(),
});

function mapDispatchToProps(dispatch) {
  return {
    example: () => { dispatch({ type: EXAMPLE_ACTION, newText: 'The current timestamp is ' + Date.now() }) },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Example);
