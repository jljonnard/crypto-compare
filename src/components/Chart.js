import React from "react";
import { Line } from "react-chartjs-2";
import { connect } from "react-redux";

import { fetchCoinChart } from "../actions";

const buttons = [{
    days: 1,
    legend: '1D'
},{
    days: 7,
    legend: '7D'
},{
    days: 30,
    legend: '1M'
},{
    days: 90,
    legend: '3M'
},{
    days: 180,
    legend: '6M'
},{
    days: 365,
    legend: '1Y'
}]

class Chart extends React.Component {
    componentDidMount() {
        this.props.fetchCoinChart(this.props.id, 7);
    }

    componentDidUpdate(prevProps) {
        if (this.props.id !== prevProps.id) {
            this.props.fetchCoinChart(this.props.id, 7);
        }
    }

    render() {
        return (
            <div className="chart">
                <div className="left container">
                    {buttons.map(button => (
                        <div
                        key={button.days}
                        className="small button"
                        onClick={() => this.props.fetchCoinChart(this.props.id, button.days)}
                    >
                        {button.legend}
                    </div>
                    ))}
                </div>
                {this.props.coinChart && (
                    <Line
                        data={{
                            labels: this.props.coinChart[0],
                            datasets: [
                                {
                                    data: this.props.coinChart[1],
                                    backgroundColor: "rgba(145,85,201,0.25)",
                                    borderColor: "rgba(145,85,201,0.6)",
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
    return { coinChart: state.coinChart };
};

export default connect(mapStateToProps, { fetchCoinChart })(Chart);
