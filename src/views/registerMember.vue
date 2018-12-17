<!----------Make By YourName---------------->
 <template>
<div class="box-brown full"  >
    <h1>Sign In</h1>
    <form  @submit="registerMember()" class="pd-20" >
        <input type="text" class="el-input__inner" placeholder="Username" v-model="form.usernamereg" required/>
        <br><br>
        <input type="email" class="el-input__inner" placeholder="Email" v-model="form.emailreg" required/>
        <br><br>
        <input type="password" class="el-input__inner" placeholder="Password" v-model="form.passwordreg" required/>
        <br><br>
        <input type="password" class="el-input__inner" placeholder="Confirm-PassWord" v-model="confirmPass" required/>
        <br><br>
        <input type="varchar" class="el-input__inner" placeholder="Student ID" v-model="form.student_id" required/>
        <br><br>
        <input type="text" class="el-input__inner" placeholder="School Name" v-model="form.school_name" required/>
        <br><br>
      <center class="mrt-10">
        <button v-if="form.passwordreg ==  confirmPass" class="full-width" type="submit"  round>Sign in</button>
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
    registerMember:async function(){
        let userreg = await this.checkUsernameMember()
    if(userreg == 0){
       console.log('RegisterMember form',this.form); //ส่งข้อมูลฟอร์ม
       this.$store.dispatch('userMember/storeData',this.form);
       this.$router.replace('/login');
    }else{
        alert('มีผู้ใช้นี้แล้ว');
    }
    },
       checkUsernameMember:async function () { 
        let checkreg = await this.$store.dispatch('userMember/checkUsernameMember',this.form.usernamereg)
        console.log('checkUsernameMember',checkreg);
        return checkreg;
        
    },
    /******* Methods default run ******/
    load:async function(){
}
},
    }
</script>