<!----------Make By YourName---------------->
 <template>
  <div>
    <v-toolbar color="orange" class="box">
      <v-layout class="full">
        <v-flex xs2>
          <v-icon @click="$router.push('/index')">keyboard_arrow_left</v-icon>
        </v-flex>
        <v-flex xs12>
          <center>
            <h1>Paid List</h1>
          </center>
        </v-flex>
        <v-flex xs2>
          <v-icon class="right" @click="$router.push('/index')">edit</v-icon>
        </v-flex>
      </v-layout>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-toolbar @click="$router.push('/index')" color="white" class="box">
      <v-icon id="left" color="orange" style="font-size:40px">account_circle</v-icon>
      <h1 id="center">name</h1>
      <v-icon id="right" style="font-size:40px">fiber_manual_record</v-icon>
    </v-toolbar>
<<<<<<< HEAD


=======
>>>>>>> master
    <v-footer fixed="app">
      <v-layout row wrap>
        <v-flex xs3 @click="$router.push('/indexDrive')">
          <v-card id="icon-center" color="orange" width="100%" height="100%" @click="$router.push('/index')">
            <v-icon id="home" color="white">home</v-icon>
          </v-card>
        </v-flex>
        <v-flex xs3 @click="$router.push('/indexDrive')">
          <v-card id="icon-center" @click="$router.push('/index')">
            <v-icon id="place">place</v-icon>
          </v-card>
        </v-flex>
        <v-flex xs3 @click="$router.push('/status')">
          <v-card id="icon-center" @click="$router.push('/index')">
            <v-icon id="status">departure_board</v-icon>
          </v-card>
        </v-flex>
        <v-flex xs3 @click="$router.push('/profileDrive')">
          <v-card id="icon-center" @click="$router.push('/profileDrive')">
            <v-icon id="person">person</v-icon>
          </v-card>
        </v-flex>
      </v-layout>
    </v-footer>
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
    return {};
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
    load: async function() {}
  }
};
</script>
<style>
.full {
  width: 100% !important;
}
.right {
  float: right;
}
#left {
  position: absolute;
  left: 16px;
}
#right {
  position: absolute;
  right: 16px;
}
#icon-center {
  padding-left: 40%;
  padding-right: 50%;
  padding-top: 10%;
  padding-bottom: 10%;
}
#center {
  position: absolute;
  left: 0;
  width: 100%;
  text-align: center;
}
#toolbar {
  position: absolute;
  bottom: 0;
  bottom: 10px;
}
</style>

