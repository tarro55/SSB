<!----------Make By YourName---------------->
 <template>
<div  >
    <v-toolbar color="orange" class="box">   
        <v-icon @click="$router.push('/index')">arrow_back</v-icon> 
        <v-toolbar-title >Paid List</v-toolbar-title>
        <v-icon @click="$router.push('/index')">edit</v-icon>
        <v-spacer></v-spacer>   
    </v-toolbar>
    <v-toolbar @click="$router.push('/index')" color="white" class="box">
        <v-icon id="home"  color="orange" style="font-size:40px">account_circle</v-icon>
        <h1>name</h1>
        <v-icon id="home"  style="font-size:40px">fiber_manual_record</v-icon>
    </v-toolbar>
    <v-toolbar id="toolbar" color="gray" class="box">
        <v-icon id="home"  style="font-size:40px" @click="$router.push('/index')">home</v-icon>
        <v-icon id="home"  style="font-size:40px" @click="$router.push('/index')">place</v-icon>
        <v-icon id="home"  style="font-size:40px" @click="$router.push('/index')">chat</v-icon>
        <v-icon id="home"  style="font-size:40px" @click="$router.push('/index')">person</v-icon>
    </v-toolbar>
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
#toolbar{
    position: absolute;
    bottom: 10px;
}
#edit{
    margin: 55px 50px 50px 10px;
}
#home{
    margin: 55px 50px 50px 10px;
}
</style>

