import * as React from 'react'
import { Link } from 'react-router-dom';
import * as styles from './styles.scss';


interface ExpandableListState{
  isToggleOn: boolean;
}

interface ExpandableListProps{
  header: string;
  partNumber: number;
}

class ExpandableList extends React.Component<ExpandableListProps, ExpandableListState> {
  constructor(props)
  {
    super(props);
    this.state = { isToggleOn: false };
    this.handleClick = this.handleClick.bind( this );
  }
  handleClick() {
    this.setState( prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  public render()
  {
    return (
      <div>
        <div className={styles.header}>
          <i className={ this.state.isToggleOn? "fa fa-caret-right" : "fa fa-caret-down" } onClick={this.handleClick}></i>
          <Link to={"/tutorial/part" + this.props.partNumber + "/step1"}> { this.props.header } </Link>
        </div>
          {this.state.isToggleOn ?
            <div className={styles.headerChildren}>
              <div className={styles.childrenItem} > <Link to={"/tutorial/part" + this.props.partNumber + "/step1"}> Introduction </Link> </div>
              <div className={styles.childrenItem} > <Link to={"/tutorial/part" + this.props.partNumber + "/step2"}> Configuration </Link> </div>
              <div className={styles.childrenItem} > <Link to={"/tutorial/part" + this.props.partNumber + "/step3"}> Simulation </Link> </div>
              <div className={styles.childrenItem} > <Link to={"/tutorial/part" + this.props.partNumber + "/step4"}> Results</Link> </div>
            </div> :
            <div/> }
      </div>
    )
  }
};

export default ExpandableList;
