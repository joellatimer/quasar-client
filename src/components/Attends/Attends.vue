<template>
    
   <q-list bordered separator>
        <q-item v-for="attend in attends" :key="attend.id">
            <q-item-section>{{attend.name}}</q-item-section>
             <q-checkbox v-model="check1" />
            <q-item-section top side> 
                <div>
                    <q-btn
                        @click.stop="showEditattend = true"
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
                            <span class="q-ml-sm">Delete this attend.</span>
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
</template>

<script>
    
  
    import { mapGetters}   from 'vuex'
    export default{
        data() {
            return {
                check1: false,
                errors:[]
            }
        },
          computed:{
            ...mapGetters("attends",["attends"])
        },
        
        
       

       
    }
    

</script>

<style>
.qtext {
    font-size: 1.5em;
}
</style>
    