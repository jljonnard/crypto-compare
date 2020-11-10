export default (state = [], action) => {
    switch (action.type) {
        case "ADD_FAVORITE":
            return [...state, action.payload]
        case "REMOVE_FAVORITE":
            return state.filter(coin => coin.id !== action.payload.id)
        default:
            return state;
    }
};
