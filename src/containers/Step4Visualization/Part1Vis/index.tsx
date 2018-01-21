import * as React from 'react';
import * as styles from '../styles.scss';
import {Player} from 'video-react';


interface Part1SubProps {
}

class Part1Sub extends React.Component<Part1SubProps, any> {
  public render() {
    return (
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/Ni1cjPQ4fAM?rel=0&amp;controls=0&amp;showinfo=0"
      />
    );
  }
}

export default Part1Sub;

