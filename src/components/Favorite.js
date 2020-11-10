import React from "react";
import { connect } from "react-redux";

import { addFavorite, removeFavorite } from "../actions";

class Favorite extends React.Component {
    state = {
        isFavorite: this.initializeFavorite(),
    };

    initializeFavorite() {
        if (this.props.favoriteList.includes(this.props.coin)) {
            return true;
        } else {
            return false;
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.coin.id !== prevProps.coin.id) {
            let flag = false
            this.props.favoriteList.forEach(coin => {
                if(coin.id === this.props.coin.id) {
                    flag = true
                }
            })
            this.setState({ isFavorite: flag });
        }
    }

    handleClick = () => {
        if (this.state.isFavorite) {
            this.props.removeFavorite(this.props.coin);
        } else {
            this.props.addFavorite(this.props.coin);
        }
        this.setState({ isFavorite: !this.state.isFavorite });
    };

    render() {
        return (
            <div onClick={this.handleClick}>
                {this.state.isFavorite ? (
                    <i className="material-icons clickable">star</i>
                ) : (
                    <i className="material-icons clickable">star_border</i>
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { favoriteList: state.favoriteList };
};

export default connect(mapStateToProps, { addFavorite, removeFavorite })(Favorite);
