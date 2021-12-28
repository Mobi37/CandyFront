export default {
    getOrderByIndex: state => (index) => {
        return state.orders[index]
    },
    getRequestByIndex: state => (index) => {
        return state.requests[index]
    },
    getStatusByIndex: state => (index) => {
        let key = state.stackStatus[index]
        return state.status.filter(item => item.key == key)
    },
    getStaffByIndex: state => (index) => {
        return state.status[index]
    },
    getStuffByIndex: state => (index) => {
        let id = state.stackStuff[index]
        return state.stuff.filter(item => item._id == id)
    },
}