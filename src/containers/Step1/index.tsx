import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import * as React from 'react';
import {Link} from 'react-router-dom';
import * as styles from './styles.scss';
import {
  partNumberSelector,
} from '../Tutorial/selectors';
import Step1Description from '../Step1Description/index';

interface Step1Props {
  partNumber: number;
}

class Step1 extends React.Component<Step1Props, any> {
  constructor(props: Step1Props) {
    super(props);
  }
  public render() {
    return (
      <Step1Description partNumber={this.props.partNumber}/>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  partNumber: partNumberSelector(),
});

export default connect(
  mapStateToProps,
)(Step1);
