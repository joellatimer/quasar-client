/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-param-reassign */
const axios = require ('axios')
import Vue from 'vue'

const state = {
    meetings : []
    
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
    getMeetings(state, meetings){
        state.meetings = meetings
     
    
    }
}



const actions = {
    async getMeetings({commit, rootState}) {
        try {
            const groupId = rootState.auth.loggedInGroupId
            console.log("groupId", groupId)
            const response = await axios.get(`http://localhost:3000/Meetings/` + groupId) 
            console.log("response", response.data.meetings)
            const meetings = response.data.meetings
            console.log("Meetings", meetings)
            commit('getMeetings', meetings)
        }catch {
            console.log('Myerror')

        }
          
    },
  
}

const getters = {
    meetings: (state) => state.meetings

}


export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}