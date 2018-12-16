<!----------Make By YourName---------------->
 <template>
<div>
    <v-toolbar color="orange" class="box">    
        <v-icon @click="$router.push('/index')">arrow_back</v-icon> 
        <v-toolbar-title @click="$router.push('/index')">Profile</v-toolbar-title>
        <v-spacer></v-spacer>   
    </v-toolbar>
    <el-row>
        <el-col :span="18" offset="3">
            <v-toolbar @click="$router.push('/index')" color="white" class="box">
            <v-icon id="icon_profile"  color="orange" style="font-size:40px">account_circle</v-icon>
            <center>
                <h1>name</h1>
            </center>
            </v-toolbar>
        </el-col>
    </el-row>
    <v-toolbar id="toolbar" color="gray" class="box">
        <v-icon id="home"   @click="$router.push('/index')">home</v-icon>
        <v-icon id="place"   @click="$router.push('/index')">place</v-icon>
        <v-icon class="material-icons md-24"   @click="$router.push('/index')">departure_board</v-icon>
        <v-icon id="person"   @click="$router.push('/index')">person</v-icon>
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
.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
}
.el-col {
  border-radius: 4px;
}
</style>

