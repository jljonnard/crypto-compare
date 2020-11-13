import React from "react";
import { connect } from "react-redux";

import SearchBar from "./SearchBar.js";
import Comparator from "./Comparator.js";
import VersusChart from "./VersusChart.js";
import Favorite from "./Favorite.js";

import { fetchCoinData, setVisibilityFilter } from "../actions";

class VersusSmallScreen extends React.Component {
    handleClick(coin) {
        this.props.setVisibilityFilter("DISPLAY_ONE_COIN");
        this.props.fetchCoinData(coin);
    }

    render() {
        return (
            <div className="main sub container a">
                <div className="container">
                    <SearchBar side="left" />
                    <SearchBar side="right" placeholder="La comparer à cette crypto" />
                </div>
                {this.props.coinData && (
                    <div className="container box">
                        <div className="coin-wrap">
                            <div className="wrapper title">
                                <img
                                    className="pic only-on-small-screen"
                                    src={this.props.coinData.logo.small}
                                    alt={this.props.coinData.name}
                                ></img>
                                <h2
                                    className="clickable"
                                    onClick={() => this.handleClick(this.props.coinData.id)}
                                >
                                    {this.props.coinData.name}
                                </h2>
                                <Favorite coin={this.props.coinData} origin="versus" />
                            </div>
                        </div>
                        <h2>VS</h2>
                        {this.props.coinDataRight && (
                            <div className="coin-wrap">
                                <div className="wrapper title">
                                    <img
                                        className="pic only-on-small-screen"
                                        src={this.props.coinDataRight.logo.small}
                                        alt={this.props.coinDataRight.name}
                                    ></img>
                                    <h2
                                        className="clickable"
                                        onClick={() =>
                                            this.handleClick(this.props.coinDataRight.id)
                                        }
                                    >
                                        {this.props.coinDataRight.name}
                                    </h2>
                                    <Favorite
                                        coin={this.props.coinDataRight}
                                        origin="versus"
                                    />
                                </div>
                            </div>
                        )}
                        {this.props.coinDataRight && (
                            <div className="comparators">
                                <Comparator
                                    title="MarketCap"
                                    leftData={this.props.coinData.marketcap}
                                    rightData={this.props.coinDataRight.marketcap}
                                    add="M$"
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
                    </div>
                )}
                {this.props.coinData && this.props.coinDataRight && (
                    <VersusChart
                        leftId={this.props.coinData.id}
                        rightId={this.props.coinDataRight.id}
                    />
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { coinData: state.coinData, coinDataRight: state.coinDataRight };
};

export default connect(mapStateToProps, { fetchCoinData, setVisibilityFilter })(VersusSmallScreen);
