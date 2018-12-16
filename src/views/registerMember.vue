<!----------Make By YourName---------------->
 <template>
<div>
    <h1>Sign In</h1>
    <form v-on:submit:prevent="registerMember()" >
        <input type="text" class="el-input__inner" placeholder="Username" v-model="form.Username" required/>
        <br><br>
        <input type="text" class="el-input__inner" placeholder="Email" v-model="form.email" required/>
        <br><br>
        <input type="text" class="el-input__inner" placeholder="Password" v-model="form.Password" required/>
        <br><br>
        <input type="text" class="el-input__inner" placeholder="Confirm-PassWord" v-model="form.ConfirmPass" required/>
        <br><br>
        <input type="text" class="el-input__inner" placeholder="Student ID" v-model="form.Student_ID" required/>
        <br><br>
        <input type="text" class="el-input__inner" placeholder="School Name" v-model="form.School_Name" required/>
        <br><br>
        <button type="submit" class="el-button box-brown wh shadow pd-6 circle" @click="$router.push('/login')" round>Sign Up</button>
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
    registerMember:async function(){
       console.log('RegisterMember form',this.form); //ส่งข้อมูลฟอร์ม

    },
    /******* Methods default run ******/
    load:async function(){
}
},
    }
</script>