import React from "react";
import { connect } from "react-redux";

import FavoriteList from "./FavoriteList.js";

import { setVisibilityFilter } from "../actions";

const menu = ["Accueil", "Versus", "DeFi"];

class Navigation extends React.Component {
    state = {
        areSelected: [true, false, false],
    };

    componentDidUpdate(prevProps) {
        if(this.props.filter !== prevProps.filter) {
            if(this.props.filter === "DISPLAY_ONE_COIN") {
                this.setState({ areSelected: [false, false, false] })
            }
        }
    }

    handleClick = (event) => {
        switch (event.target.innerHTML) {
            case "Versus":
                this.props.setVisibilityFilter("DISPLAY_VERSUS");
                this.setState({ areSelected: [false, true, false] });
                break;
            case "DeFi":
                this.props.setVisibilityFilter("HOME");
                this.setState({ areSelected: [false, false, true] });
                break;
            default:
                this.props.setVisibilityFilter("HOME");
                this.setState({ areSelected: [true, false, false] });
        }
    };

    render() {
        return (
            <nav>
                <header className="App-header">
                    <div className="clickable inner" onClick={this.handleClick}>
                        <h1>Crypto Compare</h1>
                    </div>
                </header>
                <div className="nav-wrapper">
                    {menu.map((element, id) => (
                        <div
                            key={element}
                            className={`nav-element clickable ${
                                this.state.areSelected[id] && "selected"
                            }`}
                            onClick={this.handleClick}
                        >
                            {element}
                        </div>
                    ))}
                </div>
                <FavoriteList />
            </nav>
        );
    }
}

const mapStateToProps = (state) => {
    return { filter: state.visibilityFilter };
};

export default connect(mapStateToProps, { setVisibilityFilter })(Navigation);

/*<div className="nav-wrapper">
                    <div
                        className="nav-element clickable"
                        onClick={() => this.props.setVisibilityFilter("HOME")}
                    >
                        Accueil
                    </div>
                    <div
                        className="nav-element clickable"
                        onClick={() => this.props.setVisibilityFilter("DISPLAY_VERSUS")}
                    >
                        Versus
                    </div>
                    <div
                        className="nav-element clickable"
                        onClick={() => this.props.setVisibilityFilter("HOME")}
                    >
                        DeFi
                    </div>*/
