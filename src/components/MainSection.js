import React from "react";
import { connect } from "react-redux";

import TrendingList from "./TrendingList.js";
import MarketCap from "./MarketCap.js";
import SearchBar from "./SearchBar.js";
import CoinInfos from "./CoinInfos.js";
import Versus from "./Versus.js";
import Navigation from "./Navigation.js";

import { fetchAllCoinsList, fetchCoinData, setVisibilityFilter } from "../actions";
import VersusSmallScreen from "./VersusSmallScreen.js";

class MainSection extends React.Component {
    componentDidMount() {
        this.props.fetchAllCoinsList();
    }

    render() {
        return (
            <div className="page-wrap">
                {this.props.filter === "HOME" && (
                    <div>
                        <SearchBar fetchSearch={this.props.fetchCoinData} />
                        <div className="main container">
                            <MarketCap />
                            <TrendingList />
                        </div>
                    </div>
                )}
                {this.props.filter === "DISPLAY_ONE_COIN" && (
                    <div>
                        <SearchBar fetchSearch={this.props.fetchCoinData} />
                        <CoinInfos />
                    </div>
                )}
                {this.props.filter === "DISPLAY_VERSUS" && (
                    <div>{window.innerWidth > 720 ? <Versus /> : <VersusSmallScreen />}</div>
                )}
                {this.props.filter === "NAVIGATION" && <Navigation />}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { filter: state.visibilityFilter };
};

export default connect(mapStateToProps, { fetchAllCoinsList, fetchCoinData, setVisibilityFilter })(
    MainSection
);
