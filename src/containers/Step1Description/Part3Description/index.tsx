import * as React from 'react';
import * as styles from '../styles.scss';



interface Part3SubProps {
}

class Part3Sub extends React.Component<Part3SubProps, any> {
  public render() {
    return(
      <div className={styles.tuInContainer}>
        <div className={styles.tuInHeader}>part three: implicit coupling</div>
        <div className={styles.tuInContent}>
          The results from our second simulation show catastrophic divergence. This is a consequence of using an explicit
          coupling scheme which induces numerical instabilities. The solvers exchange information a fixed number of times
          without any convergence checks on the values obtained at the interface of the two solvers.
          This might reduce the time to solution but as we have seen, the solution diverges..

          <br/> <br/>

          While a first thought would be to reduce the timestep, instabilities induced by explicit coupling
          schemes usually cannot be cured through timestep reduction. In such cases we need to perform several
          sub-iterations or coupling iterations in each timestep until the solution at the interface of both our solvers
          converges. preCICE allows us to do this by using an implicit coupling scheme.

          <br/><br/>

          Implicit coupling schemes are based on fixed-point iterations. To solve them in a robust and efficient manner,
          preCICE provides underrelaxation strategies like Adaptive Aitken and Quasi-Newton solvers. In this section,
          we will couple our solvers using an implicit coupling scheme with Aitken underrelaxation. In preCICE
          nomenclature we call this "post-processing".
        </div>
      </div>
    );
  }
}

export default Part3Sub;
