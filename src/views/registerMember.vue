<!----------Make By YourName---------------->
 <template>
<div>
    <h1>Sign Up</h1>
    <br>
    <form>
    <el-input type="text" placeholder="Username" v-model="form.Username" required ></el-input>
    <br><br>
    <el-input type="email" placeholder="E-mail" v-model="form.email" required ></el-input>
    <br><br>
    <el-input type="password" placeholder="Password" v-model="form.Password" required ></el-input>
    <br><br>
    <el-input type="password" placeholder="Confirm - Password" v-model="ConfirmPass" required ></el-input>
    <br><br>
    <el-input type="vachar" placeholder="Student ID" v-model="form.Student_ID" required ></el-input>
    <br><br>
    <el-input type="text" placeholder="School Name " v-model="from.School_Name" required ></el-input>
    <br><br>
    <el-row>
        <el-button type="submit" @click="$router.push('/login')" round>Sign Up</el-button>
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
    /******* Methods default run ******/
    load:async function(){
}
},
    }
</script>