<!----------Make By YourName---------------->
 <template >
<div class="box-brown " >
    <form>
    <v-icon id="icon" class=" wh" style="font-size:130px; border-radius:50%;"> person </v-icon>
    <br>
    <el-input id="user" type="text" placeholder="Username" v-model="Username"  ></el-input>
    <br><br>
    <el-input id="password" type="password" placeholder="Password" v-model="Password"></el-input>
    <br><br>
    <el-row >
        <el-button  id="login" type="submit"  @click="$router.push('/index')" round>Login</el-button>
    </el-row>
    <br>
      <!--<p><a @click="$router.push('/test')">test</a></p> &nbsp -->
    
    <br>
    <p><a id="forget" @click="$router.push('/forgetPass')">Foget Password</a></p> 
    <br><br>
    <p id="signin">Don't have account ? <a @click="$router.push('/type')">sign up</a></p>
    </form>
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
        from:{},
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
#icon{
    margin: 90px 50px 50px 120px;
}

#password{
    margin-top: 20px;
}
#login{
    margin: 20px 50px 3px 150px;
}
#forget{
    margin-left: 230px 
}
#signin{
    margin-left: 80px ;
}
</style>
