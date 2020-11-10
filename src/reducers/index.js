import { combineReducers } from 'redux'

import trendingCoinListReducer from './trendingCoinListReducer.js'
import allCoinsReducer from './allCoinsReducer.js'
import marketcapData  from './marketcapData.js'
import getCoinData from './getCoinData.js'
import getCoinDataRight from './getCoinDataRight.js'
import getCoinChart from './getCoinChart.js'
import getVersusChart from './getVersusChart.js'
import favoriteList from './favoriteList.js'
import setVisibilityFilter from './setVisibilityFilter.js'

export default combineReducers({
    trendingCoinList: trendingCoinListReducer,
    allCoinsList: allCoinsReducer,
    marketcapData: marketcapData,
    coinData: getCoinData,
    coinDataRight: getCoinDataRight,
    coinChart: getCoinChart,
    versusChart: getVersusChart,
    favoriteList: favoriteList,
    visibilityFilter: setVisibilityFilter,
})