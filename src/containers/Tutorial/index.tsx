import {connect} from 'react-redux';
import {EXAMPLE_ACTION} from '../constants';
import {createStructuredSelector} from 'reselect';
import * as React from 'react';
import {Link} from 'react-router-dom';
import * as styles from './styles.scss';
import ProgressBar from '../Progress/index';
import {buttonLinksSelector, percentageSelector} from './selectors';

interface TutorialProps {
  percentage: number;
  buttonLinks: {
    previous?: string,
    current: string,
    next?: string,
  };
}

class Tutorial extends React.Component<TutorialProps, undefined> {
  public render() {
    return (
      <div className={styles.tutorialContainer}>
        <ProgressBar percentage={this.props.percentage}/>
        <div className={styles.child}>{this.props.children}</div>
        <div className={styles.btnContainer}>
          {/* Remove buttons on first and last step */}
          <div className={styles.btnSubCon}>
            {this.props.buttonLinks.previous && <Link to={this.props.buttonLinks.previous} className={styles.btnL}>BACK</Link>}
          </div>
          <div className={styles.btnSubCon}>
            <Link to={this.props.buttonLinks.current} className={styles.btn}> VALIDATE</Link>
          </div>
          <div className={styles.btnSubCon}>
            {this.props.buttonLinks.next && <Link to={this.props.buttonLinks.next} className={styles.btnR}>NEXT</Link>}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  percentage: percentageSelector(),
  buttonLinks: buttonLinksSelector(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect<{}, {}, TutorialProps>(
  mapStateToProps,
  mapDispatchToProps,
)(Tutorial);
