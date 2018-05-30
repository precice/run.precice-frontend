import * as React from 'react';
import * as styles from './styles.scss';
import { Link } from 'react-router-dom';

interface NotFound {
}

class NotFound extends React.Component<NotFound, undefined> {

  public render() {
    return (
        <div className={styles.errorbox}>  
        <div className={styles.errorItems}>  
        <div className={styles.error}> Error 404 </div> 
        <div className={styles.info}> 
        <p> This page does not exist. </p>
        <Link to="/"> Go to the front page.</Link> 
        </div>
        </div> 
        </div> 
    )
  }
}

export default NotFound;
