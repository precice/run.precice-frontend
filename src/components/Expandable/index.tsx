import * as React from 'react'
import { Link } from 'react-router-dom';
import * as styles from './styles.scss';
import * as PropTypes from 'prop-types';


interface ExpandableListState{
  isToggleOn: boolean;
}

interface ExpandableListProps{
  header: string;
  partNumber: number;
}

class ExpandableList extends React.Component<ExpandableListProps, ExpandableListState> {
  constructor(props, context)
  {
    super(props, context);
    this.state = { isToggleOn: false };
    this.handleClick = this.handleClick.bind( this );
  }

  context:  {
    scrollArea: any
  }

  static contextTypes = {
    scrollArea: PropTypes.object 
  }
  
  componentDidUpdate(prevProps, prevState, snapshot) 
  {
    // if update happens because of the button click 
    if (prevState != this.state)  { 
      this.context.scrollArea.refresh(); 
      if (!this.state.isToggleOn) {
        this.context.scrollArea.scrollYTo(10);
      }
    }
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
