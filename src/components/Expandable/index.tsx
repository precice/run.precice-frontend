import * as React from 'react'
import { Link } from 'react-router-dom'; 
import * as styles from './styles.scss';


interface ExpandableListState{
  isToggleOn: boolean; 
}

interface ExpandableListProps{
  header: string;  
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
        <i className={ this.state.isToggleOn? "fa fa-caret-right" : "fa fa-caret-down" } onClick={this.handleClick}></i>
        {this.props.header}
          {this.state.isToggleOn ? 
            <div className={styles.headerChildren}>
              <div className={styles.childrenItem} > <Link to="/tutorial/part5/step1"> Step 1 </Link> </div> 
              <div className={styles.childrenItem} > <Link to="/tutorial/part5/step2"> Step 2 </Link> </div> 
              <div className={styles.childrenItem} > <Link to="/tutorial/part5/step3"> Step 3 </Link> </div>  
              <div className={styles.childrenItem} > <Link to="/tutorial/part5/step4"> Step 4 </Link> </div> 
            </div> :
            <div/> } 
      </div> 
    )
  }
};

export default ExpandableList; 
