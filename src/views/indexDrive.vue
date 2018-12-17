<!----------Make By YourName---------------->
 <template>
  <div>
    <v-toolbar color="orange" class="box">
      <v-toolbar-side-icon></v-toolbar-side-icon>

      <v-toolbar-title>Home</v-toolbar-title>

      <v-spacer></v-spacer>
    </v-toolbar>
    <center class="mrl-15 mrt-50">
      <v-layout row wrap>
        <v-flex xs1></v-flex>
        <v-flex xs5 @click="$router.push('/indexDrive')">
          <v-card class="cardmenu box-green" id="card-center" width="100%" height="100%" @click="$router.push('/indexDrive')">
            <v-icon color="white" style="font-size:145px; " >map</v-icon>
          </v-card>
        </v-flex>
        <v-flex xs5 @click="$router.push('/status')">
          <v-card class="cardmenu box-green" id="card-center"  @click="$router.push('/status')">
            <v-icon color="white" style="font-size:145px; ">departure_board</v-icon>
          </v-card>
        </v-flex>
        <v-flex xs1></v-flex>
        <v-flex xs1></v-flex>
        <v-flex xs5 @click="$router.push('/indexDrive')">
          <v-card class="cardmenu box-green" id="card-center" @click="$router.push('/indexDrive')">
            <v-icon color="white" style="font-size:145px; ">group</v-icon>
          </v-card>
        </v-flex>
        <v-flex xs5 @click="$router.push('/paidlist')">
          <v-card class="cardmenu box-green" id="card-center" @click="$router.push('/paidlist')">
            <v-icon color="white" style="font-size:145px; ">local_atm</v-icon>
          </v-card>
        </v-flex>
        <v-flex xs1></v-flex>
      </v-layout>
    </center>

    <v-footer fixed="app">
      <v-layout row wrap>
        <v-flex xs3 @click="$router.push('/indexDrive')">
          <v-card id="icon-center" color="orange" @click="$router.push('/indexdrive')">
            <v-icon id="home" color="white">home</v-icon>
          </v-card>
        </v-flex>
        <v-flex xs3 @click="$router.push('/indexDrive')">
          <v-card id="icon-center" @click="$router.push('/indexdrive')">
            <v-icon id="place">place</v-icon>
          </v-card>
        </v-flex>
        <v-flex xs3 @click="$router.push('/status')">
          <v-card id="icon-center" @click="$router.push('/status')">
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

<style scoped>
#card-center {
  padding-left: 0%;
  padding-right: 0%;
  padding-top: 0%;
  padding-bottom: 0%;
}
#icon-center {
  padding-left: 40%;
  padding-right: 50%;
  padding-top: 10%;
  padding-bottom: 10%;
}
.cardmenu {
  border-radius: 10px;
}
</style>

