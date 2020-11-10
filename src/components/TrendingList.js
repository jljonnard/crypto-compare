import React from "react";
import { connect } from "react-redux";

import { fetchTrendingList, fetchCoinData, setVisibilityFilter } from "../actions";

class TrendingList extends React.Component {
    componentDidMount() {
        this.props.fetchTrendingList();
    }

    handleClick(coin) {
        this.props.fetchCoinData(coin);
        this.props.setVisibilityFilter("DISPLAY_ONE_COIN");
    }

    render() {
        return (
            <div className="vertical container box limit">
                <h4>Tendances</h4>
                <table>
                    <tbody>
                        {this.props.coinList.map((coin) => (
                            <tr
                                key={coin.id}
                                className="clickable"
                                onClick={() => this.handleClick(coin.id)}
                            >
                                <td>
                                    <div className="left container">
                                        <img
                                            className="pic"
                                            src={coin.logo}
                                            alt={coin.name}
                                        ></img>
                                        <p>{coin.name}</p>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { coinList: state.trendingCoinList };
};

export default connect(mapStateToProps, {
    fetchTrendingList,
    fetchCoinData,
    setVisibilityFilter,
})(TrendingList);
