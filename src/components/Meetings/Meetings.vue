<template>
    
   <q-list bordered separator>
        <q-item v-for="meeting in meetings" :key="meeting.id">
            <q-item-section>{{meeting.dateMeeting}}</q-item-section>
            <q-item-section >{{meeting.typeMeeting}}</q-item-section>
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
                            <span class="q-ml-sm">Delete this meeting.</span>
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
            
                errors:[]
            }
        },
          computed:{
            ...mapGetters("meetings",["meetings"])
        },
        
        
       

        // Fetches posts when the component is created.
        // async created() {
        //     try {
        //         const groupId = this.loggedInGroupId
        //         const response = await axios.get(`http://localhost:3000/meetings/`)
        //         this.meetings = response.data.meetings
        //         console.log( "meeting", this.meetings)
        //         console.log("groupId", loggedInGroupId)
        //     } catch (e) {
        //         this.errors.push(e)
        //     }
              
        // }
    }
    

</script>

<style>
.qtext {
    font-size: 1.5em;
}
</style>
