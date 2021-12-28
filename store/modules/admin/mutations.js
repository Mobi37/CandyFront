export default {
    setOrders(state, orders) {
        state.orders = orders
    },
    setRequests(state, requests) {
        state.requests = requests
    },
    setStuff(state, stuff) {
        state.stuff = stuff
    },
    pushStatus(state, {index, status}) {
        state.stackStatus[index] = status
    },
    pushStuff(state, {index, stuff}) {
        state.stackStuff[index] = stuff
    },
    clearStatus(state) {
        state.stackStatus = []
    },
    clearStuff(state) {
        state.stackStuff = []
    },
    setStatusOrder(state, {status, index}) {
        state.orders[index].status = status
    },
    setStatusRequest(state, {status, index}) {
        state.requests[index].status = status
    },
    setStuffRequest(state, {stuff, index}) {
        state.requests[index].responsible = stuff
    }
}
