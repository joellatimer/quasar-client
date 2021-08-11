<template view="hHh lpR fFf">
    <q-layout>
        <q-header class="bg-primary" elevated>
            <q-toolbar>
                <q-toolbar-title class="absolute-center">
                    Missional Communities
                </q-toolbar-title>
                <q-btn
                    v-if="loggedIn"
                    to="/"
                    @click="logoutUser"
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
    computed: {
        ...mapState("auth", ["loggedIn"]),
        openURL,
    },
    methods: {
        ...mapActions("auth", ["logoutUser"]),
    },
};
</script>

<style></style>
