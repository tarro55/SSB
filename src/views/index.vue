<!----------Make By YourName---------------->
 <template>
<div>
        <v-toolbar color="orange" class="box">   
    
            <v-toolbar-side-icon>

            </v-toolbar-side-icon>
    
            <v-toolbar-title  >Home</v-toolbar-title>
    
            <v-spacer></v-spacer>   
        </v-toolbar>
<v-icon class="box-blue wh" @click="$router.push('/registerDriver')" style="font-size:175px; " >map </v-icon> &nbsp &nbsp
<v-icon class="box-green wh" @click="$router.push('/registerDriver')" style="font-size:175px; " >message </v-icon> &nbsp &nbsp
<v-icon class="box-blue wh" @click="$router.push('/registerDriver')" style="font-size:175px; " >group </v-icon> &nbsp &nbsp
<v-icon class="box-blue wh" @click="$router.push('/registerDriver')" style="font-size:175px; " >map </v-icon> &nbsp &nbsp


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

</style>