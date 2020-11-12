import React from "react";
import { connect } from "react-redux";

import { setVisibilityFilter } from "../actions";

class Header extends React.Component {
    render() {
        return (
            <header className="only-on-small-screen alone-header">
                {this.props.filter === "NAVIGATION" ? (
                    <div onClick={() => this.props.setVisibilityFilter("HOME")}>
                        <i className="material-icons clickable">close</i>
                    </div>
                ) : (
                    <div onClick={() => this.props.setVisibilityFilter("NAVIGATION")}>
                        <i className="material-icons clickable">menu</i>
                    </div>
                )}
                <div
                    className="clickable inner"
                    onClick={() => this.props.setVisibilityFilter("HOME")}
                >
                    <h1>Crypto Compare</h1>
                </div>
            </header>
        );
    }
}

const mapStateToProps = (state) => {
    return { filter: state.visibilityFilter };
};

export default connect(mapStateToProps, { setVisibilityFilter })(Header);
