import React from "react";
import { connect } from "react-redux";

import { fetchCoinData, fetchCoinDataRight, setVisibilityFilter } from "../actions";

import "../css/SearchBar.css";

class SearchBar extends React.Component {
    state = {
        results: [],
        search: "",
    };

    resizeResults(search) {
        //fonction qui permet de donner aux résultats la même largeur que le champ input
        const wrapper = document.querySelector("#searchWrapper-" + this.props.side);
        let resultsSpace = document.querySelector(".results." + this.props.side);

        if (resultsSpace) {
            resultsSpace.style.width = wrapper.offsetWidth + "px";
            resultsSpace.style.top = wrapper.offsetTop + wrapper.offsetHeight + "px";
            resultsSpace.style.left = wrapper.offsetLeft + "px";

            if (search.length > 2) {
                resultsSpace.style.display = "block";
            } else {
                resultsSpace.style.display = "none";
            }
        }
    }

    handleSearchUpdate = (event) => {
        let results = [];
        let id = 0;
        this.resizeResults(event.target.value);

        if (event.target.value.length > 2) {
            while (id < this.props.allCoinsList.length && results.length < 7) {
                if (
                    this.props.allCoinsList[id].symbol.toUpperCase() ===
                    event.target.value.toUpperCase()
                ) {
                    results.unshift({
                        id: this.props.allCoinsList[id].id,
                        name: this.props.allCoinsList[id].name,
                    });
                }
                else if (
                    this.props.allCoinsList[id].name
                        .toUpperCase()
                        .startsWith(event.target.value.toUpperCase()) &&
                    results.length < 6
                ) {
                    results.push({
                        id: this.props.allCoinsList[id].id,
                        name: this.props.allCoinsList[id].name,
                    });
                }
                id++;
            }
            this.setState({ results: results, search: event.target.value });
        } else {
            this.setState({ results: [], search: event.target.value });
        }
    };

    handleClick(coin) {
        this.setState({ results: [], search: "" });
        this.resizeResults("")

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
                <input
                    id={`searchWrapper-${this.props.side}`}
                    type="text"
                    placeholder="Recherche"
                    onChange={this.handleSearchUpdate}
                    value={this.state.search}
                ></input>
                <div className={`results ${this.props.side}`}>
                    {this.state.results.map((result) => (
                        <div
                            className="result"
                            key={result.id + this.props.side}
                            onClick={() => this.handleClick(result.id)}
                        >
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