import React from "react";
import { connect } from "react-redux";

import SearchBar from "./SearchBar.js";
import Comparator from "./Comparator.js";
import VersusChart from "./VersusChart.js";

class Versus extends React.Component {

    render() {
        return (
            <div className="main sub container">
                <div className="container">
                    <SearchBar side="left" />
                    <SearchBar side="right" />
                </div>
                <div className="container">
                    {this.props.coinData && (
                        <div>
                            <h2>{this.props.coinData.name}</h2>
                            <img
                                src={this.props.coinData.logo}
                                alt={this.props.coinData.name}
                            ></img>
                        </div>
                    )}
                    {this.props.coinData && this.props.coinDataRight && (
                        <div>
                            <Comparator
                                title="MarketCap"
                                leftData={this.props.coinData.marketcap}
                                rightData={this.props.coinDataRight.marketcap}
                            />
                            <Comparator
                                title="Score communautaire"
                                leftData={this.props.coinData.communityScore}
                                rightData={this.props.coinDataRight.communityScore}
                                add="/ 20"
                            />
                            <Comparator
                                title="Sentiment haussier"
                                leftData={this.props.coinData.sentimentUp}
                                rightData={this.props.coinDataRight.sentimentUp}
                                add="%"
                            />
                            <Comparator
                                title="Variation sur 1 jour"
                                leftData={this.props.coinData.priceChange24h}
                                rightData={this.props.coinDataRight.priceChange24h}
                                add="%"
                            />
                            <Comparator
                                title="Variation sur 1 semaine"
                                leftData={this.props.coinData.priceChange7d}
                                rightData={this.props.coinDataRight.priceChange7d}
                                add="%"
                            />
                            <Comparator
                                title="Variation sur 1 mois"
                                leftData={this.props.coinData.priceChange30d}
                                rightData={this.props.coinDataRight.priceChange30d}
                                add="%"
                            />
                            <Comparator
                                title="Variation sur 1 an"
                                leftData={this.props.coinData.priceChange1y}
                                rightData={this.props.coinDataRight.priceChange1y}
                                add="%"
                            />
                        </div>
                    )}
                    {this.props.coinDataRight && (
                        <div>
                            <h2>{this.props.coinDataRight.name}</h2>
                            <img
                                src={this.props.coinDataRight.logo}
                                alt={this.props.coinDataRight.name}
                            ></img>
                        </div>
                    )}
                </div>
                <div>
                    {this.props.coinData && this.props.coinDataRight && (
                        <VersusChart
                            leftId={this.props.coinData.id}
                            rightId={this.props.coinDataRight.id}
                        />
                    )}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { coinData: state.coinData, coinDataRight: state.coinDataRight };
};

export default connect(mapStateToProps)(Versus);
