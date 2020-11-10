import React from "react";

import "../css/Comparator.css";

class Comparator extends React.Component {
    render() {
        return (
            <div className="comparator-wrap">
                <h6 className="comparator-title">{this.props.title}</h6>
                <div className="comparator">
                    <div
                        className={`left comparator-element ${
                            this.props.leftData > this.props.rightData && "main"
                        }`}
                    >
                        {this.props.leftData} {this.props.add}
                    </div>
                    <div
                        className={`right comparator-element ${
                            this.props.leftData < this.props.rightData && "main"
                        }`}
                    >
                        {this.props.rightData} {this.props.add}
                    </div>
                </div>
            </div>
        );
    }
}

export default Comparator;
