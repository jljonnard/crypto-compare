import { combineReducers } from 'redux'

import trendingCoinList from './trendingCoinList.js'
import allCoinsList from './allCoinsList.js'
import marketcapData  from './marketcapData.js'
import getCoinData from './getCoinData.js'
import getCoinChart from './getCoinChart.js'
import getVersusChart from './getVersusChart.js'
import favoriteList from './favoriteList.js'
import setVisibilityFilter from './setVisibilityFilter.js'

export default combineReducers({
    trendingCoinList: trendingCoinList,
    allCoinsList: allCoinsList,
    marketcapData: marketcapData,
    coinData: getCoinData,
    coinChart: getCoinChart,
    versusChart: getVersusChart,
    favoriteList: favoriteList,
    visibilityFilter: setVisibilityFilter,
})