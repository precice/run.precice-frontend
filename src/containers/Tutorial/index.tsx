import { connect } from "react-redux";
import { EXAMPLE_ACTION } from "../constants";
import { createStructuredSelector } from "reselect";
import * as React from 'react';
import { Link } from 'react-router-dom';
import * as styles from './styles.scss';


interface tutorialProps {
}


class Tutorial extends React.Component<tutorialProps, undefined> {

  render() {
    return <div>
      <div className={styles.BarContainer}>
        <div className={styles.progressBtnAfter}>
        </div>
        <div className={styles.progressBtnAfter}>
        </div>
        <div className={styles.progressBtnBefore}>
        </div>
        <div className={styles.progressBtnBefore}>
        </div>
      </div>
      <div>{this.props.children}</div>
      <div className={styles.Btn_container}>
        <Link to="/tutorial/step2" className={styles.BtnL}>BACK</Link>
        <Link to="/tutorial/step2" className={styles.Btn}> VALIDATE</Link>
        <Link to="/tutorial/step2" className={styles.BtnR}>NEXT</Link>
      </div>
    </div>;
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
