<template view="hHh lpR fFf">
    <q-layout>
        <q-header class="bg-primary" elevated>
            <q-toolbar>
                <q-toolbar-title class="absolute-center"
                    >Missional Communities</q-toolbar-title
                >
            </q-toolbar>
        </q-header>
        <q-footer>
            <q-tabs>
                <q-route-tab
                    v-for="(nav, index) in navs"
                    :key="index"
                    :to="nav.to"
                    :icon="nav.icon"
                    :label="nav.label"
                />
            </q-tabs>
        </q-footer>
        <!-- <q-drawer
          v-model='leftDrawerOpen'
          :breakpoint='767'
          :width='200'
          bordered
          content-class='bg-primary'
            <q-list dark>
                <q-item-label
                header
                >                
                Navigation
                </q-item-label>
                <q-item
                  v-for='(nav, index) in navs'
                  :key='index'
                  :to='nav.to'
                  class='text-grey-4'
                  exact
                  clickable>
                    <q-item-section>
                        <q-icon :name='nav.icon' />
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>{{ nav.label }}</q-item-label>
                    </q-item-section>
                </q-item>
            </q-list>
        </q-drawer>-->
        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script>
import { openURL } from "quasar";
export default {
    name: "Layout",
    data() {
        return {
            leftDrawerOpen: this.$q.platform.is.desktop,
            navs: [
                {
                    label: "Registration",
                    icon: "account_circle",
                    to: "/registration",
                },
                {
                    label: "Attendance",
                    icon: "account_circle",
                    to: "/Attendance",
                },

                {
                    label: "Attencance",
                    icon: "attencance",
                    to: "/attencance",
                },
            ],
        };
    },
    methods: {
        openURL,
    },
};
</script>

<style>
@media screen and (min-width: 768px) {
    .q-footer {
        display: none;
    }
}
.q-drawer .q-router-link-exact-active {
    color: white !important;
}
</style>
