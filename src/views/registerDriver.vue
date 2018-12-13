<!----------Make By YourName---------------->
 <template>
<div>
    <h1>Sign Up</h1>
    <br>
    <el-input placeholder="Username" v-model="Username"></el-input>
    <br><br>
    <el-input placeholder="E-mail" v-model="email"></el-input>
    <br><br>
    <el-input placeholder="Password" v-model="Password"></el-input>
    <br><br>
    <el-input placeholder="Confirm - Password" v-model="ConfirmPass"></el-input>
    <br><br>
    <el-input placeholder="DriverLicence" v-model="DriverLicence"  ></el-input>
    <br><br>
    <el-row>
        <el-button  @click="$router.push('/login')" type="warning" round>Sign Up</el-button>
    </el-row>

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
        email:'',
        Password:'',
        ConfirmPass:'',
        DriverLicence:'',

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