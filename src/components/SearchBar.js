import React from "react";
import { connect } from "react-redux";

import { setVisibilityFilter } from "../actions";

import "../css/SearchBar.css";

class SearchBar extends React.Component {
    state = {
        results: [],
        search: "",
        selectedResult: -1,
    };

    componentDidMount() {
        document.addEventListener("click", this.handleAllClicks);
        document.addEventListener("keydown", this.handleKeyboard);
    }

    componentWillUnmount() {
        document.removeEventListener("click", this.handleAllClicks);
        document.removeEventListener("keydown", this.handleKeyboard);
    }

    handleAllClicks = (event) => {
        if (event.target.className !== "searchBar") {
            this.reset();
        }
    };

    handleKeyboard = (event) => {
        if (event.key === "Tab") {
            this.reset();
        }

        if (this.state.results.length > 0) {
            switch (event.key) {
                case "ArrowDown":
                    if (this.state.selectedResult < this.state.results.length - 1) {
                        this.setState({ selectedResult: this.state.selectedResult + 1 });
                    }
                    break;
                case "ArrowUp":
                    if (this.state.selectedResult > -1) {
                        this.setState({ selectedResult: this.state.selectedResult - 1 });
                    }
                    break;
                case "Enter":
                    if (this.state.selectedResult > -1) {
                        this.handleClick(this.state.results[this.state.selectedResult].id);
                    } else {
                        this.handleClick(this.state.results[0].id);
                    }
                    break;
                default:
                    this.setState({ selectedResult: -1 });
            }
        }
    };

    resizeResults(search) {
        //fonction qui permet de donner aux résultats la même largeur que le champ input
        const wrapper = document.querySelector("#searchWrapper-" + this.props.id);
        let resultsSpace = document.querySelector(".results." + this.props.id);

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
                } else if (
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
            this.setState({
                results: results,
                search: event.target.value,
                selectedResult: -1,
            });
        } else {
            this.setState({ results: [], search: event.target.value, selectedResult: -1 });
        }
    };

    handleClick(coin) {
        this.reset();
        this.props.fetchSearch(coin);
        if (!this.props.id) {
            this.props.setVisibilityFilter("DISPLAY_ONE_COIN");
        }
    }

    reset() {
        this.setState({ results: [], search: "", selectedResult: -1 });
        this.resizeResults("");
    }

    render() {
        return (
            <div className="vertical container">
                <input
                    className="searchBar"
                    id={`searchWrapper-${this.props.id}`}
                    type="text"
                    placeholder={this.props.placeholder || "Rechercher une crypto"}
                    onChange={this.handleSearchUpdate}
                    value={this.state.search}
                ></input>
                <div className={`results ${this.props.id}`}>
                    {this.state.results.map((result, id) => (
                        <div
                            className={`result ${
                                this.state.selectedResult === id && "selected"
                            }`}
                            key={result.id + this.props.id}
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

export default connect(mapStateToProps, { setVisibilityFilter })(SearchBar);
