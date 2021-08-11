<template>
<div>  
   <q-list bordered separator>

            <q-item v-for="member in groupMembers" :key="member.id">
                <q-item-section>{{member.firstName}} {{member.lastName}}</q-item-section>
                
                <q-item-section top side> 
                    <div>
                        <q-btn
                            @click.stop="showEditMember = true"
                            flat
                            dense
                            color="black"
                            icon="edit"
                            class="gt-xs"
                            size="12px" 
                        />
                        <q-btn flat
                            dense
                            color="red"
                            icon="delete"
                            class="gt-xs"
                            size="12px" 
                        />  
                    </div>
                    
                    <q-dialog  class="persistent">
                        <q-card>
                            <q-card-section>
                                <q-avatar icon="danger" text-color="red" />
                                <span class="q-ml-sm">Delete this member.</span>
                            </q-card-section>

                            <q-card-actions align="right">
                                <q-btn flat label="return" color="primary" v-close-popup />
                                <q-btn flat label="delete" color="primary" v-close-popup />
                            </q-card-actions>
                        </q-card>
                    </q-dialog>
                </q-item-section>
            </q-item>   
       
    </q-list> 
     
</div>  
</template>

<script>
    import { mapGetters, mapActions}   from 'vuex'
    export default{
        data() {
            return {
                members: [],
                errors:[],
            
                
            }
        },
        computed:{
            ...mapGetters( "members",["groupMembers"])
            
        },
       
       
        

    }
</script>

<style>
.qtext {
    font-size: 1.5em;
}
</style>
