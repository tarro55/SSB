<!----------Make By YourName---------------->
 <template>
<div>
        <v-toolbar color="orange" class="box">   
    
            <v-toolbar-side-icon>

            </v-toolbar-side-icon>
    
            <v-toolbar-title  >Home</v-toolbar-title>
    
            <v-spacer></v-spacer>   
        </v-toolbar>
    <el-row>
        <v-icon id="mapp" class="box-green wh"  style="font-size:145px; " >map </v-icon> 
        <v-icon id="status" class="box-green wh"  style="font-size:145px; " >departure_board </v-icon> 
        <v-icon id="member" class="box-green wh"  style="font-size:145px; " >group </v-icon> 
        <v-icon id="pay" class="box-green wh"  style="font-size:145px; " >local_atm</v-icon> 
    </el-row>

    </div>
</template>


    <script>
export default {
    name: 'Root',
    /*-------------------------Load Component---------------------------------------*/
    components: {

    },
  /*-------------------------Set Component---------------------------------------*/
props:{

},
    /*-------------------------DataVarible---------------------------------------*/
    data() {
    return {

        };
    }, 
    /*-------------------------Run Methods when Start this Page------------------------------------------*/
     async mounted() {
    /**** Call loading methods*/
            this.load(); 
    },
    /*-------------------------Run Methods when Start Routed------------------------------------------*/
     async beforeRouteEnter(to, from, next) { 
        next()
    },
    /*-------------------------Vuex Methods and Couputed Methods------------------------------------------*/
    computed:{

},
    /*-------------------------Methods------------------------------------------*/
methods:{
    /******* Methods default run ******/
    load:async function(){
}
},
    }
</script>
<style>
#mapp{
    margin: 20px;
}
#status{
    margin: 20px;
}
#member{
    margin: 20px;
}
#pay{
    margin: 20px;
}
</style>
