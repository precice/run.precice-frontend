import * as React from 'react';
import * as styles from '../../styles.scss';
import { Tooltip } from 'react-tippy';

interface Sub6Props {
}

class Sub6 extends React.Component<Sub6Props, any> {
  public render() {
    return (
      <div>
        Let us take a brief look at the changes we made to this section of the xml file.
        <br/><br/>

        <li>
          <span className={styles.highlight}>coupling-scheme</span>: As explained in the introduction to
          this section of the tutorial, an implicit coupling scheme can help stabilize our simulation.
        </li>
        <br/>

        <li>
          <span className={styles.highlight}>relative-convergence-measure</span>: In an explicit scheme, preCICE performs
          a fixed number of sub-iterations in each time window without any convergence checks. In an implicit scheme,
          we want to sub-iterate until we fulfill a convergence criterion. The <span className={styles.italic}>
          limit</span> is specified, as you have hopefully
          guessed, by the "limit" tag.

          <Tooltip
            interactive
            html={(
              <div>
                <span className={styles.highlight}>relative-convergence-measure</span> simply means that convergence is
                achieved if <span className={styles.highlight}>|data - oldData|{'<'} limit * |data|</span>,
                where all norms are L2 norms. The expression on the right-hand side is referred to as<span> </span>
                <span className={styles.highlight}>relative limit</span> in the preCICE logging output.
              </div>
            )}
          >
            <span className="fa fa-question-circle" style={{ fontSize: '18px' }}/>&nbsp;
          </Tooltip>
        </li>

        <br/>
        <li>
          <span className={styles.highlight}>extrapolation-order value</span>: Specifies the number of previous time windows
          from which the initial guess for the next time window is constructed.

          <Tooltip
            interactive
            html={(
              <div>
                For example, if <span className={styles.highlight}>value</span> is 2 then a second-order extrapolation
                of the next time window's initial guess is computed from the current and the previous time window results.
              </div>
            )}
          >
            <span className="fa fa-question-circle" style={{ fontSize: '18px' }}/>&nbsp;
          </Tooltip>
        </li>
        <br/>


        Implicit coupling gives rise to a fixed point iteration. A fixed point iteration can take a while to converge,
        especially when the interaction between the fluid and the structure is strong due to a high fluid/structure
        density ratio or incompressibility of the flow. To speed this up, we can use an <span className={styles.italic}>
        acceleration </span>step.

        <br/><br/>
        <li>
          <span className={styles.highlight}>acceleration</span>: We're using the Adaptive <span className={styles.highlight}>Aitken</span>
          <span> </span>Underrelaxation method to improve the convergence rate. We can specify the initial value of the relaxation factor
          and thereon, the method can adapt the relaxation factor in each iteration based on the previous iterations.

          <Tooltip
            interactive
            html={(
              <div>
                preCICE offers a variety of methods for acceleration.
                For details, please consult the <a className={styles.link} target="_blank" href="https://github.com/precice/precice/wiki/Acceleration-Configuration">wiki page</a>.
              </div>
            )}
          >
            <span className="fa fa-question-circle" style={{ fontSize: '18px' }}/>&nbsp;
          </Tooltip>
        </li>
      </div>
    );
  }
}

export default Sub6;
