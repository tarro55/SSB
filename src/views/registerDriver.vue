<!----------Make By YourName---------------->
 <template>
<div>
    <form >
    <h1 style="margin-left:100px;" >Sign Up</h1>
    <br>
    <form  v-on:submit:prevent="registerDriver()" >
    <input type="text" placeholder="Username" v-model="form.username" class="" required/>
    <br><br>
    <input type="email" placeholder="E-mail" v-model="form.email" required /> 
    <br><br>
    <input type="password" placeholder="Password" v-model="form.Password" required/>
    <br><br>
    <input type="password" placeholder="Confirm - Password" v-model="ConfirmPass" required/>
    <br><br>
    <input type="vachar" placeholder="DriverLicence" v-model="form.DriverLicence" required />
    <br><br>
    <el-row>
        <el-button v-if="password == ConfirmPass" type="submit" class="box-brown wh shadow pd-6 " @click="$router.push('/login')" round>Sign Up</el-button>
    </el-row>
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
        form:{},
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
    registerDriver:async function(){
        console.log('RegisterDriver form',this.form);

    },
    /******* Methods default run ******/
    load:async function(){
}
},
    }
</script>