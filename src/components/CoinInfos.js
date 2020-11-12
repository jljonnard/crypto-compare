import React from "react";
import { connect } from "react-redux";

import Percentage from "./Percentage";
import Chart from "./Chart.js";
import Favorite from "./Favorite.js";

class CoinInfos extends React.Component {
    render() {
        return (
            <div>
                {this.props.coinData && (
                    <div className="main sub container">
                        <div className="container">
                            <div className="wrapper">
                                <img
                                    className="pic"
                                    src={this.props.coinData.logo.small}
                                    alt={this.props.coinData.name}
                                ></img>
                                <h2>
                                    {this.props.coinData.name} (
                                    {this.props.coinData.symbol.toUpperCase()})
                                </h2>
                                <Favorite coin={this.props.coinData} origin="info" />
                            </div>
                            <h2>{this.props.coinData.price} €</h2>
                        </div>
                        <div className="container">
                            <div className="box">
                                <h4>Informations diverses</h4>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>Classement : </td>
                                            <td>{this.props.coinData.marketcapRank}</td>
                                        </tr>
                                        <tr>
                                            <td>Score de la communauté : </td>
                                            <td>{this.props.coinData.communityScore} / 20</td>
                                        </tr>
                                        <tr>
                                            <td>Sentiment haussier : </td>
                                            <td>{this.props.coinData.sentimentUp} %</td>
                                        </tr>
                                        <tr>
                                            <td>Catégorie : </td>
                                            <td>{this.props.coinData.categories[0]}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="box">
                                <h4>Variations de prix</h4>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>Sur 1 jour : </td>
                                            <td>
                                                <Percentage
                                                    variation={
                                                        this.props.coinData.priceChange24h
                                                    }
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Sur 1 semaine : </td>
                                            <td>
                                                <Percentage
                                                    variation={
                                                        this.props.coinData.priceChange7d
                                                    }
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Sur 1 mois : </td>
                                            <td>
                                                <Percentage
                                                    variation={
                                                        this.props.coinData.priceChange30d
                                                    }
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Sur 1 an : </td>
                                            <td>
                                                <Percentage
                                                    variation={
                                                        this.props.coinData.priceChange1y
                                                    }
                                                />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="container">
                            <Chart id={this.props.coinData.id} />
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { coinData: state.coinData };
};

export default connect(mapStateToProps)(CoinInfos);
