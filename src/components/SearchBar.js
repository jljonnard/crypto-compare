import React from "react";
import { connect } from "react-redux";

import { fetchCoinData, fetchCoinDataRight, setVisibilityFilter } from "../actions";

class SearchBar extends React.Component {
    state = {
        results: [],
    };

    search = () => {
        let searchTerm = "";
        if (this.props.side === "right") {
            searchTerm = document.querySelectorAll("input")[1];
        } else {
            searchTerm = document.querySelector("input");
        }
        let results = [];
        let id = 0;

        if (searchTerm.value.length > 2) {
            while (id < this.props.allCoinsList.length && results.length < 7) {
                if (
                    this.props.allCoinsList[id].symbol.toUpperCase() ===
                    searchTerm.value.toUpperCase()
                ) {
                    results.unshift({
                        id: this.props.allCoinsList[id].id,
                        name: this.props.allCoinsList[id].name,
                    });
                }
                if (
                    this.props.allCoinsList[id].name
                        .toUpperCase()
                        .startsWith(searchTerm.value.toUpperCase()) &&
                    results.length < 6
                ) {
                    results.push({
                        id: this.props.allCoinsList[id].id,
                        name: this.props.allCoinsList[id].name,
                    });
                }
                id++;
            }
            this.setState({ results: results });
        } else {
            this.setState({ results: [] });
        }
    };

    handleClick(coin) {
        this.setState({ results: [] });

        switch (this.props.side) {
            case "left":
                this.props.fetchCoinData(coin);
                break;
            case "right":
                this.props.fetchCoinDataRight(coin);
                break;
            default:
                this.props.fetchCoinData(coin);
                this.props.setVisibilityFilter("DISPLAY_ONE_COIN");
        }
    }

    render() {
        return (
            <div className="vertical container">
                <input type="text" placeholder="Recherche" onChange={this.search}></input>
                <div>
                    {this.state.results.map((result) => (
                        <div key={result.id} onClick={() => this.handleClick(result.id)}>
                            {result.name}
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { allCoinsList: state.allCoinsList };
};

export default connect(mapStateToProps, {
    fetchCoinData,
    fetchCoinDataRight,
    setVisibilityFilter,
})(SearchBar);
