<!----------Make By YourName---------------->
 <template>
<div  class="box-brown full" >
    <center><h1>Sign In</h1></center>
    <form @submit="registerDriver()" class="pd-20">
        <input type="text" class="el-input__inner" placeholder="Username" v-model="form.username" required />
        <br><br>
        <input type="email" class="el-input__inner" placeholder="Email" v-model="form.email" required />
        <br><br>
        <input type="password" class="el-input__inner" placeholder="Password" v-model="form.password" required />
        <br><br>
        <input type="password" class="el-input__inner" placeholder="Confirm-PassWord" v-model="confirmPass" required />
        <br><br>
        <input type="varchar" class="el-input__inner" placeholder="DriverLicence" v-model="form.numbercar" required />
        <br><br>
      <center class="mrt-10">
        <button v-if="form.password == confirmPass " class="full-width" type="submit" round>Sign in</button>
      </center>
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
        confirmPass:'',
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
        let user = await this.checkUsername()
    if(user == 0){
       console.log('RegisterDriver form',this.form); //ส่งข้อมูลฟอร์ม
       this.$store.dispatch('user/storeData',this.form);
       this.$router.replace('/login');
    }else{
        alert('มีผู้ใช้นี้แล้ว');
    }
    },
    checkUsername:async function () { 
        let check = await this.$store.dispatch('user/checkUsername',this.form.username)
        console.log('checkUsername',check);
        return check;
        
    },
    
    /******* Methods default run ******/
    load:async function(){
}
},
    }
</script>