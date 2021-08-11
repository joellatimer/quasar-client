/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-param-reassign */
const axios = require ('axios')
import Vue from 'vue'

const state = {
    attends : []
    
}
const mutations = {
    updateMember(state, payload) {
        Object.assign(state.members[payload.id], payload.updates)
    },
    deleteMember(state, id) {
        Vue.delete(state.members, id)
    },
    addMember(state, payload) {
        Vue.set(state.members, payload.id, payload.member)
    },
    clearMembers(state) {
        state.members = []
    },
    getAttends(state, attends){
        state.attends = attends
     
    
    }
}



const actions = {
    async getAttends({commit, rootState}) {
        try {
           
            const response = await axios.get(`http://localhost:3000/Attends/4`) 
            console.log("Attends response", response.data.attends)
            const attends = response.data.attends
            console.log("Attends", attends)
            commit('getAttends', attends)
        }catch {
            console.log('Myerror3')

        }
          
    }
    
}

const getters = {
    attends: (state) => state.attends

}


export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}