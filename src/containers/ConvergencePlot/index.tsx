import * as React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {chartDataSelector, domainXSelector, domainYSelector, percentProgressSelector, totalTimeSelector} from './selectors';
import CircularProgressbar from 'react-circular-progressbar';
import {VictoryScatter, VictoryChart, VictoryTheme, VictoryLine, VictoryAxis, VictoryLabel} from 'victory';
import * as styles from './styles.scss';


interface ConPlotProps {
  data: object[];
  domainX: number;
  domainY: number;
  progressPercent: number;
  totalTime: number;
}

class ConPlot extends React.Component<ConPlotProps, any> {
    public render() {
      return (
        <div id="popUpChart" className={styles.container}>
          <div id="chart" className={styles.convergePlot}>
        <VictoryChart
          theme={VictoryTheme.grayscale}
          domain={{x: [0, this.props.domainX], y: [0, this.props.domainY]}}
          padding={{left: 50, bottom: 40, top: 20, right: 20}}
          style={{
            data: {fill: 'red', opacity: 0.7},
            labels: {fontSize: 12},
          }}
        >
          <VictoryAxis
            dependentAxis={true}
            label="Iterations"
            fixLabelOverlap={true}
            axisLabelComponent={<VictoryLabel dy={-10} />}
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

            <div id="progressBar" className={styles.progressBar}>
              <CircularProgressbar percentage={this.props.progressPercent} />
            </div>

            <div id="totalTime" className={styles.totalTime}>
                {this.props.totalTime}
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
  totalTime: totalTimeSelector(),
});

function mapDispatchToProps( dispatch ) {
}

export default connect<any, any, any>(
  mapStateToProps,
  mapDispatchToProps,
)(ConPlot);

