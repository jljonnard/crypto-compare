export default (state = null, action) => {
    switch (action.type) {
        case "FETCH_COIN_DATA":
            return {
                id: action.payload.data.id,
                symbol: action.payload.data.symbol,
                name: action.payload.data.name,
                logo: action.payload.data.image,
                price: action.payload.data.market_data.current_price.eur,
                description: action.payload.data.description.fr,
                marketcapRank: action.payload.data.market_cap_rank,
                categories: action.payload.data.categories,
                communityScore: Math.round(action.payload.data.community_score * 2) / 10,
                sentimentUp: action.payload.data.sentiment_votes_up_percentage,
                marketcap: Math.round(
                    action.payload.data.market_data.market_cap.eur / 1000000
                ),
                priceChange24h:
                    Math.round(
                        action.payload.data.market_data.price_change_percentage_24h * 100
                    ) / 100,
                priceChange7d:
                    Math.round(
                        action.payload.data.market_data.price_change_percentage_7d * 100
                    ) / 100,
                priceChange30d:
                    Math.round(
                        action.payload.data.market_data.price_change_percentage_30d * 100
                    ) / 100,
                priceChange1y:
                    Math.round(
                        action.payload.data.market_data.price_change_percentage_1y * 100
                    ) / 100,
            };
        default:
            return state;
    }
};
