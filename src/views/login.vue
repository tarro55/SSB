<!----------Make By YourName---------------->
 <template >
  <div class="box-brown full">
    <center>
      <v-icon class="mrt-40 wh" style="font-size:130px;">mdi-account-circle</v-icon>
    </center>
    <form v-on:submit:prevent="login()" class="pd-40">
      <br>
      <input class="el-input__inner"   type="text" placeholder="Username" v-model="form.username" />
      <br> <br>
      <input class="el-input__inner" type="password" placeholder="Password" v-model="form.password" />
      <br>
      <br>
      <center class="mrt-10">
        <el-button class="full-width" type="submit" @click="$router.push('/indexDrive')" round>Login</el-button>
      </center>

      <p>
        <a class="wh mrl-40 mrt-40" @click="$router.push('/forgetPass')">Foget Password</a>
      </p>
      <br>
      <br>
    </form>
    <center >
      <p>
        Don't have account ?
        <a @click="$router.push('/type')">sign up</a>
      </p>
    </center>
  </div>
</template>

    <script>
export default {
  name: "Root",
  /*-------------------------Load Component---------------------------------------*/
  components: {},
  /*-------------------------Set Component---------------------------------------*/
  props: {},
  /*-------------------------DataVarible---------------------------------------*/
  data() {
    return {
      form: {}
    };
  },
  /*-------------------------Run Methods when Start this Page------------------------------------------*/
  async mounted() {
    /**** Call loading methods*/
    this.load();
  },
  /*-------------------------Run Methods when Start Routed------------------------------------------*/
  async beforeRouteEnter(to, from, next) {
    next();
  },
  /*-------------------------Vuex Methods and Couputed Methods------------------------------------------*/
  computed: {},
  /*-------------------------Methods------------------------------------------*/
  methods: {
    /******* Methods default run ******/
    login: async function() {
      //  console.log('login form',this.form); //ส่งข้อมูลฟอร์ม
    },

    load: async function() {}
  }
};
</script>
<style>
.foot {
  text-align: center;
  position: absolute;
  bottom: 10px;
}
.full {
  height: 100vh;
}

</style>
