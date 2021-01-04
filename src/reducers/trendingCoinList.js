export default (state = [{ id: "", name: "", logo: "" }], action) => {
    switch (action.type) {
        case "FETCH_LIST":
            return action.payload.data.coins.map((coin) => {
                return {
                    id: coin.item.id,
                    name: coin.item.name,
                    logo: coin.item.thumb,
                };
            });
        default:
            return state;
    }
};
