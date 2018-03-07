import * as React from 'react';


interface Part3SubProps {
}

class Part3Sub extends React.Component<Part3SubProps, any> {
  public render() {
    return(
      <div>
        With implicit coupling, we are able to run a longer simulation without divergence, here we observed one full
        oscilation of the flap.
      </div>
    );
  }
}

export default Part3Sub;


