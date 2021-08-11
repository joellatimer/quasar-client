import Vue from 'vue'
import Vuex from 'vuex'
import auth from './store-auth'
import meetings from './store-meetings'
import members from './store-members'
import groups from './store-groups'
import attends from './store-attends'

Vue.use(Vuex)

export default function (/* { ssrContext } */) {
    const Store = new Vuex.Store({
        modules: {
            members,
            auth,
            meetings,
            groups,
            attends
        },

        strict: process.env.DEV
    })

    return Store
}
