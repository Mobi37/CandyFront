export default {
    setCakes(state, cakes) {
        state.cakes = cakes
    },
    addCake(state, cake) {
        state.order.cakes.push(cake)
    },
    removeCake(state, cake) {
        state.order.cakes = cake
    },
    addAmount(state, count) {
        state.order.count = count
    },
    deleteCake(state, cake) {
        state.order.cakes.splice(cake,1)
    },
    setName(state, payload) {
        state.order.contact.name = payload
    },
    setPhone(state, payload) {
        state.order.contact.phone = payload
    },
    setEmail(state, payload) {
        state.order.contact.email = payload
    },
    setAddress(state, payload) {
        state.order.contact.address = payload
    },
    setRespons(state, response){
        state.response = response
    }
}