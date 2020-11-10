import React from "react";
import { connect } from "react-redux";

import TrendingList from "./TrendingList.js";
import MarketCap from "./MarketCap.js";
import SearchBar from "./SearchBar.js";
import CoinInfos from "./CoinInfos.js";
import Versus from "./Versus.js";

import { fetchAllCoinsList, setVisibilityFilter } from "../actions";

class MainSection extends React.Component {
    componentDidMount() {
        this.props.fetchAllCoinsList();
    }

    render() {
        return (
            <div className="page-wrap">
                {this.props.filter === "DISPLAY_VERSUS" ? (
                    <Versus />
                ) : (
                    <SearchBar side="alone" />
                )}
                {this.props.filter === "HOME" && (
                    <div className="main container">
                        <MarketCap />
                        <TrendingList />
                    </div>
                )}
                {this.props.filter === "DISPLAY_ONE_COIN" && <CoinInfos />}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { filter: state.visibilityFilter };
};

export default connect(mapStateToProps, { fetchAllCoinsList, setVisibilityFilter })(
    MainSection
);
