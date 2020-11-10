import React from "react";
import { connect } from "react-redux";

import TrendingList from "./TrendingList.js";
import MarketCap from "./MarketCap.js";
import SearchBar from "./SearchBar.js";
import CoinInfos from "./CoinInfos.js";
import Versus from "./Versus.js";
import FavoriteList from "./FavoriteList.js";

import { fetchAllCoinsList, setVisibilityFilter } from "../actions"

class MainSection extends React.Component {
    componentDidMount() {
        this.props.fetchAllCoinsList();
    }

    render() {
        return (
            <div>
                <div className="wrapper">
                    <nav>
                        <header className="App-header">
                            <div
                                className="clickable inner"
                                onClick={() => this.props.setVisibilityFilter("HOME")}
                            >
                                <h1>Crypto Compare</h1>
                            </div>
                        </header>
                        <div className="nav-wrapper">
                            <div
                                className="nav-element clickable"
                                onClick={() => this.props.setVisibilityFilter("HOME")}
                            >
                                Accueil
                            </div>
                            <div
                                className="nav-element clickable"
                                onClick={() =>
                                    this.props.setVisibilityFilter("DISPLAY_VERSUS")
                                }
                            >
                                Versus
                            </div>
                            <div
                                className="nav-element clickable"
                                onClick={() => this.props.setVisibilityFilter("HOME")}
                            >
                                DeFi
                            </div>
                        </div>
                        <FavoriteList />
                    </nav>
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
                </div>
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
