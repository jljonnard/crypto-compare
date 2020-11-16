import { getSixDigitsOnly } from "../specificFunctions/getSixDigits.js"

export default (state = [[], []], action) => {
    switch (action.type) {
        case "FETCH_COIN_CHART_1":
            return [
                action.payload.data.prices.map((time) => {
                    const tempDate = new Date(time[0]);
                    return tempDate.getHours().toString() + ":00";
                }),
                action.payload.data.prices.map((price) => getSixDigitsOnly(price[1])),
            ];
        case "FETCH_COIN_CHART_7":
            return [
                action.payload.data.prices.map((time) => {
                    const tempDate = new Date(time[0]);
                    return (
                        tempDate.getDate().toString() +
                        " " +
                        tempDate.getHours().toString() +
                        ":00"
                    );
                }),
                action.payload.data.prices.map((price) => getSixDigitsOnly(price[1])),
            ];
        case "FETCH_COIN_CHART_30":
            return [
                action.payload.data.prices.map((time) => {
                    const tempDate = new Date(time[0]);
                    return tempDate.getDate().toString();
                }),
                action.payload.data.prices.map((price) => getSixDigitsOnly(price[1])),
            ];
        case "FETCH_COIN_CHART_90":
            return [
                action.payload.data.prices.map((time) => {
                    const tempDate = new Date(time[0]);
                    return (
                        tempDate.getDate().toString() +
                        "/" +
                        (tempDate.getMonth() + 1).toString()
                    );
                }),
                action.payload.data.prices.map((price) => getSixDigitsOnly(price[1])),
            ];
        case "FETCH_COIN_CHART_180":
            return [
                action.payload.data.prices.map((time) => {
                    const tempDate = new Date(time[0]);
                    return (
                        tempDate.getDate().toString() +
                        "/" +
                        (tempDate.getMonth() + 1).toString()
                    );
                }),
                action.payload.data.prices.map((price) => getSixDigitsOnly(price[1])),
            ];
        case "FETCH_COIN_CHART_365":
            return [
                action.payload.data.prices.map((time) => {
                    const tempDate = new Date(time[0]);
                    return (
                        tempDate.getDate().toString() +
                        "/" +
                        (tempDate.getMonth() + 1).toString()
                    );
                }),
                action.payload.data.prices.map((price) => getSixDigitsOnly(price[1])),
            ];
        default:
            return state;
    }
};
