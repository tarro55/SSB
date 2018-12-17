<!----------Make By YourName---------------->
 <template>
<div  >
    <v-toolbar color="orange" class="box">   

        <v-layout class="full">
            <v-flex xs2>
                <v-icon   @click="$router.push('/index')">keyboard_arrow_left</v-icon> 
            </v-flex>
            <v-flex xs12>
                <center><h1 >Paid List</h1></center>
            </v-flex>
            <v-flex xs2>
                <v-icon  class="right" @click="$router.push('/index')">edit</v-icon>
            </v-flex>
        </v-layout>
        <v-spacer></v-spacer>   
    </v-toolbar>
    <v-toolbar @click="$router.push('/index')" color="white" class="box">
        <v-icon id="left"  color="orange" style="font-size:40px">account_circle</v-icon>
        <h1 id="center">name</h1>
        <v-icon id="right"  style="font-size:40px">fiber_manual_record</v-icon>
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
.full{
    width:100%!important;
}
.right{
    float:right;
}
#left{
    position: absolute;
    left: 16px;
}
#right{
    position: absolute;
    right: 16px;
}
#center{
    position: absolute;
    left: 0;
    width: 100%;
    text-align: center;
}
#toolbar{
    position: absolute;
    bottom: 0;
    bottom: 10px;
}
#edit{
    margin: 55px 50px 50px 10px;
}
#home{
    margin: 55px 50px 50px 10px;
}
</style>

