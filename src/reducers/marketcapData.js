export default (state = { coins: [], percentages: [] }, action) => {
    switch (action.type) {
        case "FETCH_MARKETCAP":
            return {
                coins: Object.keys(action.payload.data.data.market_cap_percentage),
                percentages: Object.values(action.payload.data.data.market_cap_percentage)
                    .map((percentage) => Math.round(percentage * 100) / 100)
                    .concat([
                        Math.round(
                            (100 -
                                Object.values(
                                    action.payload.data.data.market_cap_percentage
                                ).reduce((x, y) => x + y)) *
                                100
                        ) / 100,
                    ]),
            };
        default:
            return state;
    }
};
