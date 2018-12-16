<!----------Make By YourName---------------->
 <template>
<div>
    <center><h1>Sign In</h1></center>
    <form v-on:submit:prevent="registerDriver()" class="pd-20">
        <input type="text" class="el-input__inner" placeholder="Username" v-model="form.Username" required />
        <br><br>
        <input type="text" class="el-input__inner" placeholder="Email" v-model="form.email" required />
        <br><br>
        <input type="text" class="el-input__inner" placeholder="Password" v-model="form.Password" required />
        <br><br>
        <input type="text" class="el-input__inner" placeholder="Confirm-PassWord" v-model="form.ConfirmPass" required />
        <br><br>
        <input type="text" class="el-input__inner" placeholder="DriverLicence" v-model="form.DriverLicence" required />
        <br><br>
        <button type="submit" class="box-brown wh shadow pd-6 " @click="$router.push('/login')" round>Sign Up</button>
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
       console.log('RegisterDriver form',this.form); //ส่งข้อมูลฟอร์ม

    },
    /******* Methods default run ******/
    load:async function(){
}
},
    }
</script>