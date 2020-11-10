export default (state = { time: [], leftPrice: [], rightPrice: [] }, action) => {
    switch (action.type) {
        case "FETCH_VERSUS_CHART_1":
            return {
                time: action.payload[0].data.prices.map((time) => {
                    const tempDate = new Date(time[0]);
                    return tempDate.getHours().toString() + ":00";
                }),
                leftPrice: action.payload[0].data.prices.map(
                    (price) =>
                        Math.round(
                            ((price[1] - action.payload[0].data.prices[0][1]) /
                                action.payload[0].data.prices[0][1]) *
                                10000
                        ) / 100
                ),
                rightPrice: action.payload[1].data.prices.map(
                    (price) =>
                        Math.round(
                            ((price[1] - action.payload[1].data.prices[0][1]) /
                                action.payload[1].data.prices[0][1]) *
                                10000
                        ) / 100
                ),
            };
        case "FETCH_VERSUS_CHART_7":
            return {
                time: action.payload[0].data.prices.map((time) => {
                    const tempDate = new Date(time[0]);
                    return (
                        tempDate.getDate().toString() +
                        " " +
                        tempDate.getHours().toString() +
                        ":00"
                    );
                }),
                leftPrice: action.payload[0].data.prices.map(
                    (price) =>
                        Math.round(
                            ((price[1] - action.payload[0].data.prices[0][1]) /
                                action.payload[0].data.prices[0][1]) *
                                10000
                        ) / 100
                ),
                rightPrice: action.payload[1].data.prices.map(
                    (price) =>
                        Math.round(
                            ((price[1] - action.payload[1].data.prices[0][1]) /
                                action.payload[1].data.prices[0][1]) *
                                10000
                        ) / 100
                ),
            };
        case "FETCH_VERSUS_CHART_30":
            return {
                time: action.payload[0].data.prices.map((time) => {
                    const tempDate = new Date(time[0]);
                    return tempDate.getDate().toString();
                }),
                leftPrice: action.payload[0].data.prices.map(
                    (price) =>
                        Math.round(
                            ((price[1] - action.payload[0].data.prices[0][1]) /
                                action.payload[0].data.prices[0][1]) *
                                10000
                        ) / 100
                ),
                rightPrice: action.payload[1].data.prices.map(
                    (price) =>
                        Math.round(
                            ((price[1] - action.payload[1].data.prices[0][1]) /
                                action.payload[1].data.prices[0][1]) *
                                10000
                        ) / 100
                ),
            };
        case "FETCH_VERSUS_CHART_90":
            return {
                time: action.payload[0].data.prices.map((time) => {
                    const tempDate = new Date(time[0]);
                    return (
                        tempDate.getDate().toString() +
                        "/" +
                        (tempDate.getMonth() + 1).toString()
                    );
                }),
                leftPrice: action.payload[0].data.prices.map(
                    (price) =>
                        Math.round(
                            ((price[1] - action.payload[0].data.prices[0][1]) /
                                action.payload[0].data.prices[0][1]) *
                                10000
                        ) / 100
                ),
                rightPrice: action.payload[1].data.prices.map(
                    (price) =>
                        Math.round(
                            ((price[1] - action.payload[1].data.prices[0][1]) /
                                action.payload[1].data.prices[0][1]) *
                                10000
                        ) / 100
                ),
            };
        case "FETCH_VERSUS_CHART_180":
            return {
                time: action.payload[0].data.prices.map((time) => {
                    const tempDate = new Date(time[0]);
                    return (
                        tempDate.getDate().toString() +
                        "/" +
                        (tempDate.getMonth() + 1).toString()
                    );
                }),
                leftPrice: action.payload[0].data.prices.map(
                    (price) =>
                        Math.round(
                            ((price[1] - action.payload[0].data.prices[0][1]) /
                                action.payload[0].data.prices[0][1]) *
                                10000
                        ) / 100
                ),
                rightPrice: action.payload[1].data.prices.map(
                    (price) =>
                        Math.round(
                            ((price[1] - action.payload[1].data.prices[0][1]) /
                                action.payload[1].data.prices[0][1]) *
                                10000
                        ) / 100
                ),
            };
        case "FETCH_VERSUS_CHART_365":
            return {
                time: action.payload[0].data.prices.map((time) => {
                    const tempDate = new Date(time[0]);
                    return (
                        tempDate.getDate().toString() +
                        "/" +
                        (tempDate.getMonth() + 1).toString()
                    );
                }),
                leftPrice: action.payload[0].data.prices.map(
                    (price) =>
                        Math.round(
                            ((price[1] - action.payload[0].data.prices[0][1]) /
                                action.payload[0].data.prices[0][1]) *
                                10000
                        ) / 100
                ),
                rightPrice: action.payload[1].data.prices.map(
                    (price) =>
                        Math.round(
                            ((price[1] - action.payload[1].data.prices[0][1]) /
                                action.payload[1].data.prices[0][1]) *
                                10000
                        ) / 100
                ),
            };
        default:
            return state;
    }
};
