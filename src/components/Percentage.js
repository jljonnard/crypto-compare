import React from "react";

class Percentage extends React.Component {
    render() {
        return (
            <div
                className={`percentage ${this.props.variation < 0 ? "negative" : "positive"}`}
            >
                {this.props.variation} %
            </div>
        );
    }
}

export default Percentage;
