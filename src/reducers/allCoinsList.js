export default (state = [[]], action) => {

    switch(action.type) {
        case 'FETCH_ALL_COINS':
            return action.payload.data
        default:
            return state
    }
}