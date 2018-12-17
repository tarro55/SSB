<!----------Make By YourName---------------->
 <template>
<div>
        <v-toolbar color="orange" class="box">   
    
            <v-toolbar-side-icon>
                
            </v-toolbar-side-icon>
    
            <v-toolbar-title  >Home</v-toolbar-title>
    
            <v-spacer></v-spacer>   
        </v-toolbar>
        <center class="mrl-15 mrt-50"  >
        <v-icon  class="box-green wh"  style="font-size:145px; " >map </v-icon> 
        <v-icon  class="box-green wh"  style="font-size:145px; " >departure_board </v-icon> 
        <v-icon  class="box-green wh"  style="font-size:145px; " >group </v-icon> 
        <v-icon  class="box-green wh" @click="$router.push('/paidlist')" style="font-size:145px; " >local_atm</v-icon> 
        </center>
    <v-footer fixed="app">
      <v-layout row wrap>
        <v-flex xs3 @click="$router.push('/indexDrive')">
          <v-card id="icon-center" color="orange" @click="$router.push('/index')">
            <v-icon id="home" color="white">home</v-icon>
          </v-card>
        </v-flex>
        <v-flex xs3 @click="$router.push('/indexDrive')">
          <v-card id="icon-center" @click="$router.push('/index')">
            <v-icon id="place">place</v-icon>
          </v-card>
        </v-flex>
        <v-flex xs3 @click="$router.push('/status')">
          <v-card id="icon-center" @click="$router.push('/index')">
            <v-icon id="status">departure_board</v-icon>
          </v-card>
        </v-flex>
        <v-flex xs3 @click="$router.push('/profileDrive')">
          <v-card id="icon-center" @click="$router.push('/profileDrive')">
            <v-icon id="person">person</v-icon>
          </v-card>
        </v-flex>
      </v-layout>
    </v-footer>
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
