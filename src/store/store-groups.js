import { uid } from 'quasar'
import Vue from 'vue'
import { firebaseDb, firebaseAuth } from '../boot/firebase'

const state = {
    groups: {}
}

const mutations = {
    addGroup(state, payload) {
        Vue.set(state.groups, payload.id, payload.group)
    }
}
const actions = {
    fbReadData({ commit }) {
        console.log('start reading from Firebase Groups')
        const groupId = firebaseAuth.currentUser.uid
        let myGroup = firebaseDb.ref(`groups/${groupId}`)
        myGroup.on('child_added', (snapshot) => {
            myGroup = snapshot.val()
            const payload = {
                id: snapshot.key,
                group: myGroup
            }

            commit('addGroup', payload)
        })
    }
}

const getters = {
    groups: (state) => state.groups
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
