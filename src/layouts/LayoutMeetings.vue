<template>
    <div>
        <q-layout view="lHh lpr lFf"  style="container" class="shadow-2 rounded-borders">
            <q-toolbar class="bg-light-green-3">
                <q-toolbar-title   text-color="black">Missional Communities</q-toolbar-title>
                    <q-space></q-space>
                    <q-btn to="/members" flat >Members</q-btn>
                    <q-btn  dense flat label="Logout" icon="mdi-logout" @click="logoutGroup"></q-btn>
            </q-toolbar> 
            <q-page-container>
                <router-view />
            </q-page-container>
            
        </q-layout>   
    </div>    
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
    name: "Layout",
    data() {
        return {
            
        };
    },
    computed: {
        ...mapState("auth", ["loggedIn","logoutGroup"]),
    },
    methods: {
        ...mapActions("auth", ["logoutGroup"]),
    },
};
</script>

<style>

</style>