import {connect} from "react-redux";
import {EXAMPLE_ACTION} from "../constants";
import {createStructuredSelector} from "reselect";
import * as React from 'react';
import {Link} from 'react-router-dom';
import * as styles from './styles.scss';

interface step2Props {
}


class Step2 extends React.Component<step2Props, undefined> {

  public render() {
    return (
      <div className={styles.subContainer}>
        <div className={styles.expContainer}>
          <div className={styles.expHeader}>
            what to do
          </div>
        </div>
        <div className={styles.interaction}>
          <div className={styles.interactionHeader}>
            Explaination
          </div>
          <div className={styles.text}>
            hello world
          </div>
        </div>
        <div className={styles.interaction}>
          <div className={styles.interactionHeader}>
            XML
          </div>
          <textarea type="text" className={styles.text}>
        print('hello world');
      </textarea>
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({});

function mapDispatchToProps(dispatch) {
  return {
    example: () => dispatch({type: EXAMPLE_ACTION}),
  };
}

export default connect<any, any, any>(
  mapStateToProps,
  mapDispatchToProps
)(Step2);
