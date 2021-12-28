export default {
    async getCakes({ commit }) {
        let cakes = await this.$axios.$get('cakes')
        commit('setCakes', cakes)
    },
    addCake({ commit }, cake) {
        commit('addCake', cake)
    },
    setName({ commit }, payload) {
        commit('setName', payload)
    },
    setPhone({ commit }, payload) {
        commit('setPhone', payload)
    },
    setEmail({ commit }, payload) {
        commit('setEmail', payload)
    },
    setAddress({ commit }, payload) {
        commit('setAddress', payload)
    },
    addAmount({ commit }, count) {
        commit('addAmount', count)
    },
    deleteCake({ commit }, cake) {
        commit('deleteCake', cake)
    },
    clearTrash({ commit }) {
        let response = {
            success: false
        }
        commit('setRespons', response)
        commit('addAmount', 0)
        commit('setName', '')
        commit('setPhone', '')
        commit('setEmail', '')
        commit('setAddress', '')
        commit('removeCake', [])

    },
    async createOrder({ commit, state }){
        let response = await this.$axios.$post('request', state.order)
        if(response && response.success){
            commit('setRespons', response)
            
        }
    }
}