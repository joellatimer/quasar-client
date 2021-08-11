/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-param-reassign */
const axios = require ('axios')
import Vue from 'vue'

const state = {
    members : [],
    groupMembers:[]
}
const mutations = {
    updateGroupMember(state, payload) {
        Object.assign(state.members[payload.id], payload.updates)
    },
    deleteGroupMember(state, id) {
        Vue.delete(state.members, id)
    },
    addGroupMember(state, payload) {
        Vue.set(state.members, payload.id, payload.member)
    },
    clearMembers(state) {
        state.members = []
    },
    getGroupMembers(state, payload){
        state.groupMembers = payload
      
    
    }
}

const actions = {

    async deleteGroupMember({commit}){
        try {
            
        } catch (error) {
            
        }
    },

    async updateGroupMember({commit}){
        try {
            
        } catch (error) {
            
        }
    },

    async addGroupMember({commit}){
        try {
            
        } catch (error) {
            
        }
    },

    async getGroupMembers({commit, rootState}) {
        try {
            const groupId = rootState.auth.loggedInGroupId
            console.log("groupId", groupId)
            const response = await axios.get(`http://localhost:3000/groupMembers/` + groupId) 
            console.log(response.data.members)
            const groupMembers = response.data.members
           
            commit('getGroupMembers', groupMembers)
        }catch {
            console.log('Myerror')

        }
          
    }
 
 
}

const getters = {
    groupMembers: (state) => state.groupMembers

}


export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
