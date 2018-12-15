<!----------Make By YourName---------------->
 <template>
<div >
    <h1 id="title" >log in</h1>
    <br>
    <el-input id="user" placeholder="Username" v-model="Username"  ></el-input>
    <br><br>
    <el-input id="password"  placeholder="Password" v-model="Password"></el-input>
    <br><br>
    <el-row >
        <el-button id="login" type="warning" round @click="$router.push('/index')">Login</el-button>
    </el-row>
    <br>
      <!--<p><a @click="$router.push('/test')">test</a></p> &nbsp -->
    
    <br>
    <p><a id="forget" @click="$router.push('/forgetPass')">Foget Password</a></p> 
    <br><br>
    <p id="signin">Don't have account ? <a @click="$router.push('/type')">sign up</a></p>
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
        Username:'',
        Password:'',
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
#title{
    margin: 110px 50px 50px 135px;
}

#password{
    margin-top: 20px;
}
#login{
    margin: 20px 50px 3px 135px;
}
#forget{
    margin-left: 230px 
}
#signin{
    margin-left: 80px ;
}
</style>
