<template view="hHh lpR fFf">
    <q-layout>
        <q-header class="bg-primary" elevated>
            <q-toolbar>
                <q-toolbar-title class="absolute-center">Missional Communities</q-toolbar-title>
                <q-space></q-space>
                <q-btn
                    v-if="loggedIn"
                    to="/"
                    @click="logoutGroup"
                    flat
                    icon-right="account_circle"
                    label="logout"
                    class="absolute-right"
                />
            </q-toolbar>
        </q-header>

        <q-page-container>
             <router-view />
        </q-page-container>
    </q-layout>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { openURL } from "quasar";
export default {
    name: "Layout",
    
    computed: {
        ...mapState("auth", ["loggedIn"]),
        openURL,
    },
    methods: {
        ...mapActions("auth", ["logoutGroup"]),
    },
};
</script>

<style>
@media screen and (min-width: 768px) {
    /* .q-footer {
        display: none;
    } */
}

</style>
