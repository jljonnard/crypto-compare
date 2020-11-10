import coingeckoAPI from "../apis/coingeckoAPI.js";

export const fetchTrendingList = () => async (dispatch) => {
    const response = await coingeckoAPI.get("/search/trending");

    dispatch({
        type: "FETCH_LIST",
        payload: response,
    });
};

export const fetchAllCoinsList = () => async (dispatch) => {
    const response = await coingeckoAPI.get("/coins/list");

    dispatch({
        type: "FETCH_ALL_COINS",
        payload: response,
    });
};

export const fetchCoinData = (coin) => async (dispatch) => {
    const response = await coingeckoAPI.get("/coins/" + coin, {
        params: {
            localization: true,
            tickers: false,
            market_data: true,
            community_data: false,
            developer_data: false,
            sparkline: false,
        },
    });

    dispatch({
        type: "FETCH_COIN_DATA",
        payload: response,
    });
};

export const fetchCoinDataRight = (coin) => async (dispatch) => {
    const response = await coingeckoAPI.get("/coins/" + coin, {
        params: {
            localization: true,
            tickers: false,
            market_data: true,
            community_data: false,
            developer_data: false,
            sparkline: false,
        },
    });

    dispatch({
        type: "FETCH_COIN_DATA_RIGHT",
        payload: response,
    });
};

export const fetchCoinChart = (coin, days) => async (dispatch) => {
    const response = await coingeckoAPI.get("/coins/" + coin + "/market_chart", {
        params: {
            vs_currency: "eur",
            days: days,
        },
    });

    dispatch({
        type: "FETCH_COIN_CHART_" + days.toString(),
        payload: response,
    });
};

export const fetchVersusChart = (coin, rightCoin, days) => async (dispatch) => {
    const response = await coingeckoAPI.get("/coins/" + coin + "/market_chart", {
        params: {
            vs_currency: "eur",
            days: days,
        },
    });

    const rightResponse = await coingeckoAPI.get("/coins/" + rightCoin + "/market_chart", {
        params: {
            vs_currency: "eur",
            days: days,
        },
    });

    dispatch({
        type: "FETCH_VERSUS_CHART_" + days.toString(),
        payload: [response, rightResponse],
    });
};

export const fetchMarketCap = () => async (dispatch) => {
    const response = await coingeckoAPI.get("/global");

    dispatch({
        type: "FETCH_MARKETCAP",
        payload: response,
    });
};

export const setVisibilityFilter = (filter) => ({
    type: "SET_VISIBILITY_FILTER",
    payload: filter,
});

export const addFavorite = (coin) => ({
   type: "ADD_FAVORITE",
   payload: coin,
});

export const removeFavorite = (coin) => ({
   type: "REMOVE_FAVORITE",
   payload: coin,
});
