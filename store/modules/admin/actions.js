export default {
    async getOrders({ commit }) {
        let orders = await this.$axios.$get('orders')
        commit('setOrders', orders)
    },
    async updateOrder({ dispatch, commit, getters }, index) {
        let getOrder = getters.getOrderByIndex
        let getStatus = getters.getStatusByIndex
        let status = getStatus(index)[0]
        commit('setStatusOrder', {status, index})

        let order = getOrder(index)
        let id = order._id
        delete order._id

        let response = await this.$axios.$put(`order/${id}`, order)
        if(response.success){
            dispatch('getOrders')
        }
    },
    async getRequests({ commit }) {
        let orders = await this.$axios.$get('requests')
        commit('setRequests', orders)
    },
    async approveRequest({ dispatch, commit, getters }, index) {
        let getRequest = getters.getRequestByIndex
        let getStatus = getters.getStatusByIndex
        let getStuff = getters.getStuffByIndex

        let status = getStatus(index)[0]
        commit('setStatusRequest', {status, index})

        let stuff = getStuff(index)[0]
        commit('setStuffRequest', {stuff, index})

        let request = getRequest(index)
        let id = request._id
        delete request._id
        let response = await this.$axios.$post(`order`, request)
        if(response.success){
            dispatch('getRequests')
        }
    },
    async getStuff({ commit }) {
        let stuff = await this.$axios.$get('stuff')
        commit('setStuff', stuff)
    },
    pushStatus({ commit }, {index, status}) {
        commit('pushStatus', {index, status})
    },
    pushStuff({ commit }, {index, stuff}) {
        commit('pushStuff', {index, stuff})
    },
    clearStatus({ commit }){
        commit('clearStatus')
    },
    clearStatus({ commit }){
        commit('clearStuff')
    }
}