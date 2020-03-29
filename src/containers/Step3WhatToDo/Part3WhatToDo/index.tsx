import * as React from 'react';


interface Part3SubProps {
}

class Part3Sub extends React.Component<Part3SubProps, any> {
  public render() {
    return(
      <div>
        As mentioned in introduction to this section, an implicit coupling scheme leads to several
        sub-iterations between the solvers in each time window. In order to show this, we have included a plot that depicts
        the number of coupling iterations in each time window.
      </div>
    );
  }
}

export default Part3Sub;


