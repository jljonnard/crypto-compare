import React from "react";
import { connect } from "react-redux";

import FavoriteList from "./FavoriteList.js";

import { setVisibilityFilter } from "../actions";

const menu = ["Accueil", "Versus", "DeFi"];

class Navigation extends React.Component {
    state = {
        areSelected: [true, false, false],
    };

    componentDidMount() {
        if (this.props.filter === "NAVIGATION") {
            const navigation = document.querySelector("nav");
            navigation.style.display = "block";
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.filter !== prevProps.filter) {
            if (this.props.filter === "DISPLAY_ONE_COIN") {
                this.setState({ areSelected: [false, false, false] });
            }

            const navigation = document.querySelector("nav");
            if (this.props.filter === "NAVIGATION") {
                navigation.style.display = "block";
            } 
            else if (prevProps.filter === "NAVIGATION") {
                navigation.style.display = "none";
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
            <nav className="only-on-big-screen">
                <header className="nav-header">
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
    console.log(window.innerWidth)
    return { filter: state.visibilityFilter };
};

export default connect(mapStateToProps, { setVisibilityFilter })(Navigation);
