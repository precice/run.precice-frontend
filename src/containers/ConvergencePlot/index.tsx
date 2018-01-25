import * as React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  chartDataSelector, domainXSelector, domainYSelector,
  percentProgressSelector,
} from './selectors';
import CircularProgressbar from 'react-circular-progressbar';
import {VictoryScatter, VictoryChart, VictoryTheme, VictoryLine, VictoryAxis, VictoryLabel} from 'victory';
import * as styles from './styles.scss';

interface ConPlotProps {
  data: object [];
  domainX: number;
  domainY: number;
  progressPercent: number;
}

class ConPlot extends React.Component<ConPlotProps, any> {
  constructor(props: TutorialProps) {
    super(props);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  private openModal() {
    document.getElementById('myModal2').style.display = 'block';
  }
  private closeModal() {
    document.getElementById('myModal2').style.display = 'none';
  }
  public render() {
    return (
      <div id="popUpChart" className={styles.container}>
        <div id="myModal2" className={styles.modal}>
          {
            window.onclick = (event) => {
              if (event.target === document.getElementById('myModal2')) {
                document.getElementById('myModal2').style.display = 'none';
              }
            }
          }
          <div className={styles.modalContent}>
            <div id="chart" className={styles.modalConvergePlot}>
              <VictoryChart
                theme={VictoryTheme.grayscale}
                domain={{x: [0, this.props.domainX], y: [0, this.props.domainY]}}
                style={{
                  data: {fill: 'red', opacity: 0.7},
                  labels: {fontSize: 12},
                }}
              >
                <VictoryAxis
                  dependentAxis={true}
                  label="Coupling Iterations"
                  fixLabelOverlap={true}
                  axisLabelComponent={<VictoryLabel dy={-10}/>}
                />
                <VictoryAxis
                  crossAxis={true}
                  label="Time Steps"
                  fixLabelOverlap={true}
                  axisLabelComponent={<VictoryLabel />}
                />
                <VictoryScatter
                  style={{data: {fill: '#c43a31'}}}
                  data={this.props.data}
                />
              </VictoryChart>
            </div>
          </div>{/*modal content*/}
        </div>{/*the modal*/}
        <div id="chart" onClick={this.openModal} className={styles.convergePlot}>
          <VictoryChart
            theme={VictoryTheme.grayscale}
            domain={{x: [0, this.props.domainX], y: [0, this.props.domainY]}}
            style={{
              data: {fill: 'red', opacity: 0.7},
              labels: {fontSize: 12},
            }}
          >
            <VictoryAxis
              dependentAxis={true}
              label="Coupling Iterations"
              fixLabelOverlap={true}
              axisLabelComponent={<VictoryLabel dy={-10}/>}
            />
            <VictoryAxis
              crossAxis={true}
              label="Time Steps"
              fixLabelOverlap={true}
              axisLabelComponent={<VictoryLabel />}
            />
            <VictoryScatter
              style={{data: {fill: '#c43a31'}}}
              data={this.props.data}
            />
          </VictoryChart>
        </div>
        <div className={styles.subContainer}>
          <div className={styles.progressBar}>
            <CircularProgressbar
              percentage={this.props.progressPercent}
            />
          </div>

        </div>
      </div>
    );
  }
}


const mapStateToProps = createStructuredSelector ({
  data: chartDataSelector(),
  domainX: domainXSelector(),
  domainY: domainYSelector(),
  progressPercent: percentProgressSelector(),
});

function mapDispatchToProps( dispatch ) {
  return {};
}

export default connect<any, any, any>(
  mapStateToProps,
  mapDispatchToProps,
)(ConPlot);

