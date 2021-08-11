<template>
    <q-page-container>
        
    
            <div class="q-pa-md">
                <div class="row q-mt-md justify-center">
                    <div class="col-xs-12 col-md-4">
                        <div class="q-pa-md" >
                            <q-toolbar  class="bg-blue-4">
                                <q-toolbar-title>
                                {{loggedInGroup}}    Members
                                </q-toolbar-title>
                            </q-toolbar>    
                                <group-members />
                            <q-btn class="q-mt-sm  bg-green-3">
                            Add Member
                            </q-btn>    
                        </div>
                    </div>
                    <div class="col-xs-12 col-md-4">
                        <div class="q-pa-md" >
                            <q-list bordered separator>
                                <q-toolbar  class="bg-blue-4">
                                    <q-toolbar-title>
                                        Community Meetings
                                    </q-toolbar-title>
                                </q-toolbar>
                                <meetings />
                            </q-list>                      
                        </div>
                    </div>
                    <div class="col-xs-12 col-md-3">
                        <div class="q-pa-md  xs-12" >
                            <q-list bordered separator>
                                <q-toolbar class="bg-blue-3">                                 
                                    <q-toolbar-title>
                                        Attendance
                                    </q-toolbar-title>
                                </q-toolbar>

                                <attends />
                               
                            </q-list>
                        </div>
                    </div>
                </div>
            </div>    
     
    </q-page-container>     
 
</template>

<script>
    import { mapGetters} from 'vuex'

    export default {
        data() {
            return {
               
            }
        },
       
        components:{
             "group-members": require("components/Members/groupMembers.vue").default,
             "meetings": require("components/Meetings/Meetings.vue").default,
             "attends": require("components/Attends/Attends.vue").default,
        },
        computed:{
            ...mapGetters("auth",["loggedInGroup"])
        }
        
       
    } 
 

</script>