import * as React from 'react';


interface Part2SubProps {
}

class Part2Sub extends React.Component<Part2SubProps, any> {
  public render() {
    return(
      <iframe
        width="100%"
        height="100%"
        src="https://player.vimeo.com/video/258660147"
      />
    );
  }
}

export default Part2Sub;
