<!----------Make By YourName---------------->
 <template>
<div>
    <v-toolbar color="orange" class="box">    
        <v-icon @click="$router.push('/index')">arrow_back</v-icon> 
        <v-toolbar-title @click="$router.push('/index')">Profile</v-toolbar-title>
        <v-spacer></v-spacer>   
    </v-toolbar>
    <div>
        <div id="img-profile">
            <center>
                <v-icon class="mrt-40 wh" style="font-size:130px;">mdi-account-circle</v-icon>
            </center>
        </div>
    </div>
    <el-row>
            <v-toolbar @click="$router.push('/index')" color="white" class="box">
            <v-icon id="icon_profile"  color="orange" style="font-size:40px">account_circle</v-icon>
            <center>
                <h1>name</h1>
            </center>
            </v-toolbar>
    </el-row>
    <v-toolbar id="toolbar" color="gray" class="box">
        <v-icon id="home"   @click="$router.push('/index')">home</v-icon>
        <v-icon id="place"   @click="$router.push('/index')">place</v-icon>
        <v-icon id="status"   @click="$router.push('/index')">departure_board</v-icon>
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
#place{
    margin: 55px 50px 50px 10px;
}
#status{
    margin: 55px 50px 50px 10px;
}
#person{
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
#img-profile{
    position: absolute;
    width: 375px;
    height: 160px;
    left: 0px;
    top: 58px;

    background: url();
    filter: blur(2px);
}
</style>

