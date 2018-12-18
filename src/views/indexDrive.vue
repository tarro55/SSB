<!----------Make By YourName---------------->
 <template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>
              <span>Menu</span>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>
        <template v-for="(item, index) in items">
          <v-list-tile :href="item.href" :to="{name: item.href}" :key="index">
            <v-list-tile-action>
              <v-icon light v-html="item.icon"></v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title v-html="item.title"></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="orange" dark app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer" class="blackcolor"></v-toolbar-side-icon>
      <v-toolbar-title class="blackcolor">HOME</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-content>
      <center class="mrl-15 mrt-50">
        <v-layout row wrap>
          <v-flex xs1></v-flex>
          <v-flex xs5 @click="$router.push('/map-drive')">
            <v-card
              class="cardmenu box-green"
              id="card-center"
              width="100%"
              height="100%"
              @click="$router.push('/map-drive')"
            >
              <v-icon color="white" style="font-size:145px; ">map-drive</v-icon>
            </v-card>
          </v-flex>
          <v-flex xs5 @click="$router.push('/statusDrive')">
            <v-card
              class="cardmenu box-green"
              id="card-center"
              @click="$router.push('/statusDrive')"
            >
              <v-icon color="white" style="font-size:145px; ">departure_board</v-icon>
            </v-card>
          </v-flex>
          <v-flex xs1></v-flex>
          <v-flex xs1></v-flex>
          <v-flex xs5 @click="$router.push('/indexDrive')">
            <v-card
              class="cardmenu box-green"
              id="card-center"
              @click="$router.push('/indexDrive')"
            >
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
    </v-content>

    <v-footer fixed="app">
      <v-layout row wrap>
        <v-flex xs3 @click="$router.push('/indexDrive')">
          <v-card id="icon-center" color="orange" @click="$router.push('/indexdrive')">
            <v-icon id="home" color="white">home</v-icon>
          </v-card>
        </v-flex>
        <v-flex xs3 @click="$router.push('/map-drive')">
          <v-card id="icon-center" @click="$router.push('/map-drive')">
            <v-icon id="place">place</v-icon>
          </v-card>
        </v-flex>
        <v-flex xs3 @click="$router.push('/statusDrive')">
          <v-card id="icon-center" @click="$router.push('/statusDrive')">
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
  </v-app>
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
      drawer: false,
      items: [
        {
          href: "indexDrive",
          router: true,
          title: "Home",
          icon: "home"
        },
        {
          href: "indexDrive",
          router: true,
          title: "Sttings",
          icon: "settings"
        },
        {
          href: "login",
          router: true,
          title: "Logout",
          icon: "highlight_off"
        }
      ]
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
.blackcolor {
  color: black;
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

