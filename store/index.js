import Vue from 'vue'
import Vuex from 'vuex'

import admin from './modules/admin'
import cakeShop from './modules/cakeShop'
import state from './state'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        admin,
        cakeShop
    },
    state,
    mutations,
    actions
    // strict: true
})
