import React from "react";
import { connect } from "react-redux";

import Percentage from "./Percentage";

import { fetchCoinData, setVisibilityFilter } from "../actions";

class FavoriteList extends React.Component {
    handleClick(coin) {
        this.props.fetchCoinData(coin);
        this.props.setVisibilityFilter("DISPLAY_ONE_COIN");
    }

    render() {
        return (
            <div className="main sub container">
                <div className="inverted box favList">
                    <h4>Favoris</h4>
                    <table>
                        <tbody>
                            {this.props.favoriteList.map((coin) => (
                                <tr
                                    key={coin.id}
                                    className="clickable"
                                    onClick={() => this.handleClick(coin.id)}
                                >
                                    <td>
                                        <div className="left container">
                                            <img
                                                className="pic"
                                                src={coin.picture}
                                                alt={coin.name}
                                            ></img>
                                            <p title={coin.name}>
                                                {coin.symbol.toUpperCase()}
                                            </p>
                                        </div>
                                    </td>
                                    <td>
                                        <Percentage variation={coin.priceChange24h} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { favoriteList: state.favoriteList };
};

export default connect(mapStateToProps, { fetchCoinData, setVisibilityFilter })(FavoriteList);
