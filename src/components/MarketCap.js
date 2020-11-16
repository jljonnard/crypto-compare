import React from "react";
import { connect } from "react-redux";
import { Doughnut } from "react-chartjs-2";

import { fetchMarketCap } from "../actions";

class MarketCap extends React.Component {
    componentDidMount() {
        this.props.fetchMarketCap();
    }

    getCoinBySymbol(coin) {
        let id = 0;

        while (
            id < this.props.allCoinsList.length &&
            this.props.allCoinsList[id].symbol !== coin
        ) {
            id++;
        }
        if (id < this.props.allCoinsList.length) {
            return this.props.allCoinsList[id].name;
        } else {
            return "Chargement...";
        }
    }

    render() {
        return (
            <div className="vertical container box doughnut">
                <h4>MarketCap</h4>
                <Doughnut
                    data={{
                        labels: this.props.marketcaps.coins
                            .map((coin) => this.getCoinBySymbol(coin))
                            .concat(["Autres"]),
                        datasets: [
                            {
                                data: this.props.marketcaps.percentages,
                                backgroundColor: [
                                    "rgba(240,130,20,0.4)",
                                    "rgba(70,25,70,0.4)",
                                    "rgba(45,220,155,0.4)",
                                    "rgba(0,0,0,0.4)",
                                    "rgba(145,220,50,0.4)",
                                    "rgba(230,210,100,0.4)",
                                    "rgba(20,85,201,0.4)",
                                    "rgba(245,55,150,0.4)",
                                    "rgba(145,145,145,0.4)",
                                    "rgba(200,180,60,0.4)",
                                    "rgba(190,180,210,0.4)",
                                ],
                            },
                        ],
                    }}
                    options={{
                        maintainAspectRatio: false,
                        responsive: true,
                        legend: { display: true },
                    }}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { marketcaps: state.marketcapData, allCoinsList: state.allCoinsList };
};

export default connect(mapStateToProps, { fetchMarketCap })(MarketCap);
