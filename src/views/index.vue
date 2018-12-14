<!----------Make By YourName---------------->
 <template>
<div>
        <v-toolbar color="orange" class="box">   
    
            <v-toolbar-side-icon>

            </v-toolbar-side-icon>
    
            <v-toolbar-title  >Home</v-toolbar-title>
    
            <v-spacer></v-spacer>   
        </v-toolbar>

        <v-icon id="map" class="box-green wh"  style="font-size:175px; " >map </v-icon> 
        <v-icon class="box-green wh"  style="font-size:175px; " >message </v-icon> 
        <v-icon class="box-green wh"  style="font-size:175px; " >group </v-icon> 
        <v-icon class="box-green wh"  style="font-size:175px; " >departure_board</v-icon> 


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