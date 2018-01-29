import * as React from 'react';
import {Player} from 'video-react';


interface Part1SubProps {
}

class Part1Sub extends React.Component<Part1SubProps, any> {
  public render() {
    return (
      <iframe
        src="https://player.vimeo.com/video/252615061"
        width="100%"
        height="100%"/>

    );
  }
}

export default Part1Sub;

