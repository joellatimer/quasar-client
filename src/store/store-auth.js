import { LocalStorage, Loading } from 'quasar'
import { showErrorMessage } from '../Functions/showErrorMessage'
const axios = require('axios')

const state = {
    loggedIn: false,
    token:null,
    loggedInGroup:null,
    loggedInGroupId:null,
}

const mutations = {
    setLoggedIn(state, value) {
        state.loggedIn = value
    },
    retrieveToken(state, value){
        state.token = value
    },
    loggedInGroup(state, value){
        state.loggedInGroup = value
    }, 
    deleteToken(state, value){
        state.token = value
    },
    loggedInGroupId(state, value){
         state.loggedInGroupId = value
     }

}
const actions = {
    loginGroup(context, payload) {
        return new Promise((resolve, reject) => {
            axios.post('http://localhost:3000/groups/login',{
                groupName:payload.groupName,
                password:payload.password 
               
            })
            .then(response =>{
                if (payload.groupName){
                    const token = response.data.token
                    const groupId = response.data.groupId
                    localStorage.setItem('access_token', token)
                    localStorage.setItem('loggedIn', 1)
                    localStorage.setItem('loggedInGroup', payload.groupName)
                    localStorage.setItem('loggedInGroupId', groupId)
                    context.commit('retrieveToken', token)
                    context.commit('setLoggedIn', true)
                    this.$router.push('/Leaders')
                    context.commit('loggedInGroup', payload.groupName)
                    context.commit('loggedInGroupId', groupId)
                    context.dispatch('members/getGroupMembers', null, {root:true})
                    context.dispatch('meetings/getMeetings', null, {root:true})
                    context.dispatch('attends/getAttends', null, {root:true})
            
                }else {
                    context.commit('setLoggedIn', 0)
                    context.commit('loggedInGroup', null)
                    context.commit('loggedInGroupId', null)
                    context.dispatch('./members/getGroupMembers')
                    LocalStorage.set('loggedIn', false)
                    LocalStorage.set('loggedInGroup', null)
                    LocalStorage.set('loggedInGroupId', null)
                    this.$router.replace('/')
                }
            })
            .catch(error => {
                console.log(error)
                reject(error)
            })
        })
    },

    logoutGroup(context) {
        console.log("I am workding")
        context.commit('setLoggedIn', false)
        context.commit('loggedInGroup', null)
        context.commit('deleteToken', null)
        LocalStorage.set('loggedIn', false)
        LocalStorage.set('access_token',null)
        LocalStorage.set('loggedInGroup', null)
        LocalStorage.set('loggedInGroupId', null)
        this.$router.replace('/')
        
    }
}    

const getters = {
    loggedIn(state){
        return state.token != null
    },
    loggedInGroup(state) {
        return state.loggedInGroup
    },
    loggedInGroupId(state) {
        return state.loggedInGroupId
    },
   
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
