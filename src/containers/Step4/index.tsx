import { connect } from "react-redux";
import { EXAMPLE_ACTION } from "../constants";
import { createStructuredSelector } from "reselect";
import * as React from 'react';
import { Link } from 'react-router-dom';
import * as styles from './styles.scss';

interface step4Props {
}


class Step4 extends React.Component<step4Props, undefined> {

  render() {
    return <body className={styles.subContainer}>
    <div className={styles.expContainer}>
      <div className={styles.expHeader}>
        what to do
      </div>
    </div>
    <div className={styles.visialize}>
      <div className={styles.visialHeader}>
        Visualization
      </div>
    </div>
    </body>;
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
)(Step4);
