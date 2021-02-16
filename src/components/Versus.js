import React from "react";
import { connect } from "react-redux";

import SearchBar from "./SearchBar.js";
import Comparator from "./Comparator.js";
import VersusChart from "./VersusChart.js";
import Favorite from "./Favorite.js";

import { fetchCoinData, fetchCoinDataRight, setVisibilityFilter } from "../actions";

class Versus extends React.Component {
    handleClick(coin) {
        this.props.setVisibilityFilter("DISPLAY_ONE_COIN");
        this.props.fetchCoinData(coin);
    }

    render() {
        return (
            <div className="main sub container">
                <div className="container">
                    <SearchBar fetchSearch={this.props.fetchCoinData} id="left" />
                    <SearchBar
                        fetchSearch={this.props.fetchCoinDataRight}
                        id="right"
                        placeholder="La comparer à cette crypto"
                    />
                </div>
                {this.props.coinData.left && (
                    <div className="container box">
                        <div className="coin-wrap">
                            <div className="wrapper title">
                                <img
                                    className="pic only-on-small-screen"
                                    src={this.props.coinData.left.logo.small}
                                    alt={this.props.coinData.left.name}
                                ></img>
                                <h2
                                    className="clickable"
                                    onClick={() => this.handleClick(this.props.coinData.left.id)}
                                >
                                    {this.props.coinData.left.name}
                                </h2>
                                <Favorite coin={this.props.coinData.left} origin="versus" />
                            </div>
                            <img
                                className="only-on-big-screen"
                                src={this.props.coinData.left.logo.large}
                                alt={this.props.coinData.left.name}
                            ></img>
                        </div>
                        {this.props.coinData.right && (
                            <div>
                                <Comparator
                                    title="MarketCap"
                                    leftData={this.props.coinData.left.marketcap}
                                    rightData={this.props.coinData.right.marketcap}
                                    add="M$"
                                />
                                <Comparator
                                    title="Score communautaire"
                                    leftData={this.props.coinData.left.communityScore}
                                    rightData={this.props.coinData.right.communityScore}
                                    add="/ 20"
                                />
                                <Comparator
                                    title="Sentiment haussier"
                                    leftData={this.props.coinData.left.sentimentUp}
                                    rightData={this.props.coinData.right.sentimentUp}
                                    add="%"
                                />
                                <Comparator
                                    title="Variation sur 1 jour"
                                    leftData={this.props.coinData.left.priceChange24h}
                                    rightData={this.props.coinData.right.priceChange24h}
                                    add="%"
                                />
                                <Comparator
                                    title="Variation sur 1 semaine"
                                    leftData={this.props.coinData.left.priceChange7d}
                                    rightData={this.props.coinData.right.priceChange7d}
                                    add="%"
                                />
                                <Comparator
                                    title="Variation sur 1 mois"
                                    leftData={this.props.coinData.left.priceChange30d}
                                    rightData={this.props.coinData.right.priceChange30d}
                                    add="%"
                                />
                                <Comparator
                                    title="Variation sur 1 an"
                                    leftData={this.props.coinData.left.priceChange1y}
                                    rightData={this.props.coinData.right.priceChange1y}
                                    add="%"
                                />
                            </div>
                        )}
                        {this.props.coinData.right && (
                            <div className="coin-wrap">
                                <div className="wrapper title">
                                    <img
                                        className="pic only-on-small-screen"
                                        src={this.props.coinData.right.logo.small}
                                        alt={this.props.coinData.right.name}
                                    ></img>
                                    <h2
                                        className="clickable"
                                        onClick={() =>
                                            this.handleClick(this.props.coinData.right.id)
                                        }
                                    >
                                        {this.props.coinData.right.name}
                                    </h2>
                                    <Favorite
                                        coin={this.props.coinData.right}
                                        origin="versus"
                                    />
                                </div>
                                <img
                                    className="only-on-big-screen"
                                    src={this.props.coinData.right.logo.large}
                                    alt={this.props.coinData.right.name}
                                ></img>
                            </div>
                        )}
                    </div>
                )}
                {this.props.coinData && this.props.coinData.right && (
                    <VersusChart
                        leftId={this.props.coinData.left.id}
                        rightId={this.props.coinData.right.id}
                    />
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { coinData: state.coinData };
};

export default connect(mapStateToProps, {
    fetchCoinData,
    fetchCoinDataRight,
    setVisibilityFilter,
})(Versus);
