import * as React from 'react';


interface Part2SubProps {
}

class Part2Sub extends React.Component<Part2SubProps, any> {
  public render() {
    return(
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/Me7gnWpft1o?rel=0&amp;controls=0&amp;showinfo=0"
      />
      //        "https://player.vimeo.com/video/252615896"
    );
  }
}

export default Part2Sub;


