<!----------Make By YourName---------------->
 <template>
<div >
    <h1  style="margin: 50px 50px 3px 135px;" >log in</h1>
    <br>
    <el-input  placeholder="Username" v-model="Username" ></el-input>
    <br><br>
    <el-input placeholder="Password" v-model="Password"></el-input>
    <br><br>
    <el-row >
        <el-button style="margin-left: 130px ;" type="warning" round @click="$router.push('/index')">Login</el-button>
    </el-row>
    <br>
      <p><a @click="$router.push('/test')">test</a></p> &nbsp 
    
    <br>
    <p><a style="margin-left: 230px ;" @click="$router.push('/fogetPass')">Foget Password</a></p> &nbsp 
    <br><hr><br>
    <p  style="margin-left: 80px ;">Don't have account ? <a @click="$router.push('/type')"> &nbsp sign up</a></p>
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