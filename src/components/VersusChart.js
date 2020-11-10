import React from "react";
import { Line } from "react-chartjs-2";
import { connect } from "react-redux";

import { fetchVersusChart } from "../actions";

const buttons = [
    {
        days: 1,
        legend: "1D",
    },
    {
        days: 7,
        legend: "7D",
    },
    {
        days: 30,
        legend: "1M",
    },
    {
        days: 90,
        legend: "3M",
    },
    {
        days: 180,
        legend: "6M",
    },
    {
        days: 365,
        legend: "1Y",
    },
];

class VersusChart extends React.Component {
    componentDidMount() {
        this.props.fetchVersusChart(this.props.leftId, this.props.rightId, 7);
    }

    componentDidUpdate(prevProps) {
        if (this.props.leftId !== prevProps.leftId || this.props.rightId !== prevProps.rightId) {
            this.props.fetchVersusChart(this.props.leftId, this.props.rightId, 7);
        }
    }

    render() {
        return (
            <div className="chart">
                <div className="left container">
                    {buttons.map((button) => (
                        <div
                        key={button.days}
                            className="small button"
                            onClick={() =>
                                this.props.fetchVersusChart(
                                    this.props.leftId,
                                    this.props.rightId,
                                    button.days
                                )
                            }
                        >
                            {button.legend}
                        </div>
                    ))}
                </div>
                {this.props.coinChart && (
                    <Line
                        data={{
                            labels: this.props.coinChart.time,
                            datasets: [
                                {
                                    label: this.props.leftId,
                                    data: this.props.coinChart.leftPrice,
                                    backgroundColor: "rgba(45,85,201,0)",
                                    borderColor: "rgba(45,85,201,0.6)",
                                    hoverBackgroundColor: "rgba(240,150,20,0.4)",
                                    pointBackgroundColor: "rgba(0,0,0,0)",
                                    pointBorderColor: "rgba(0,0,0,0)",
                                },
                                {
                                    label: this.props.rightId,
                                    data: this.props.coinChart.rightPrice,
                                    backgroundColor: "rgba(145,85,201,0)",
                                    borderColor: "rgba(245,85,21,0.6)",
                                    hoverBackgroundColor: "rgba(240,150,20,0.4)",
                                    pointBackgroundColor: "rgba(0,0,0,0)",
                                    pointBorderColor: "rgba(0,0,0,0)",
                                },
                            ],
                        }}
                        height="200px"
                        options={{
                            maintainAspectRatio: false,
                            legend: { display: false },
                            scales: {
                                xAxes: [{ gridLines: { display: false } }],
                                yAxes: [{ gridLines: { display: false } }],
                            },
                        }}
                    />
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { coinChart: state.versusChart };
};

export default connect(mapStateToProps, { fetchVersusChart })(VersusChart);
