<!----------Make By YourName---------------->
<template>
  <div>
    <v-toolbar card color="orange">
      <v-icon @click="$router.push('/index')">keyboard_arrow_left</v-icon>
      <v-toolbar-title class="font-weight-light">Profile</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn color="white" fab small @click="isEditing = !isEditing">
        <v-icon v-if="isEditing">mdi-close</v-icon>
        <v-icon v-else>mdi-pencil</v-icon>
      </v-btn>
    </v-toolbar>
    <v-layout>
      <v-flex>
        <v-card>
          <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" aspect-ratio="2.5">
            <center>
              <v-icon id="img-center" color="white" style="font-size:100px;">mdi-account-circle</v-icon>
            </center>
          </v-img>

          <v-card-text>
            <v-text-field :disabled="!isEditing" color="white" label="ID Number"></v-text-field>
            <v-text-field :disabled="!isEditing" color="white" label="Driver Licence"></v-text-field>
            <v-text-field :disabled="!isEditing" color="white" label="Name"></v-text-field>
            <v-text-field :disabled="!isEditing" color="white" label="Sex"></v-text-field>
            <v-text-field :disabled="!isEditing" color="white" label="Birthday"></v-text-field>
            <v-text-field :disabled="!isEditing" color="white" label="Phone Number"></v-text-field>
            <v-text-field :disabled="!isEditing" color="white" label="E-mail"></v-text-field>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn :disabled="!isEditing" color="success" @click="save">Save</v-btn>
          </v-card-actions>
          <v-snackbar
            v-model="hasSaved"
            :timeout="2000"
            absolute
            bottom
            left
          >Your profile has been updated</v-snackbar>
        </v-card>
      </v-flex>
    </v-layout>
    <v-footer >
      <v-container>
        <v-layout row wrap>
          <v-flex xs3>
            <v-card id="icon-center">
              <v-icon id="home" @click="$router.push('/index')">home</v-icon>
            </v-card>
          </v-flex>
          <v-flex xs3 sm6 md3 order-md3 order-sm1>
            <v-card id="icon-center">
              <v-icon id="place" @click="$router.push('/index')">place</v-icon>
            </v-card>
          </v-flex>
          <v-flex xs3 sm6 md3 order-md2 order-sm4>
            <v-card id="icon-center">
              <v-icon id="status" @click="$router.push('/index')">departure_board</v-icon>
            </v-card>
          </v-flex>
          <v-flex xs3 sm6 md3 order-md1 order-sm3>
            <v-card id="icon-center">
              <v-icon id="person" @click="$router.push('/index')">person</v-icon>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
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
    return {
      hasSaved: false,
      isEditing: null,
      model: null
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
    load: async function() {},

    customFilter(item, queryText, itemText) {
      const textOne = item.name.toLowerCase();
      const textTwo = item.abbr.toLowerCase();
      const searchText = queryText.toLowerCase();

      return (
        textOne.indexOf(searchText) > -1 || textTwo.indexOf(searchText) > -1
      );
    },
    save() {
      this.isEditing = !this.isEditing;
      this.hasSaved = true;
    }
  }
};
</script>
<style>
#toolbar {
  position: absolute;
  bottom: 10px;
}
#edit {
  margin: 55px 50px 50px 10px;
}
#img-center{
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 15px;
}
#icon-center {
  padding-left: 50%;
  padding-right: 50%;
  padding-top: 10%;
  padding-bottom: 10%;
}
#home {
  margin: 10%;
  text-align: center;
}
#place {
  margin: 10%;
  text-align: center;
}
#status {
  margin: 10%;
  text-align: center;
}
#person {
  margin: 10%;
  text-align: center;
}
#text-field {
  margin-left: 10px;
}
#img-profile {
  position: absolute;
  width: 100%;
  height: 25%;
  left: 0px;
  top: 58px;

  background: url(https://www.bananastore.com/wp-content/uploads/2017/03/BG-APR2017.jpg);
  filter: blur(1px);
}
#right {
  position: absolute;
  right: 16px;
}
#center {
  position: absolute;
  left: 0;
  width: 100%;
  text-align: center;
}
</style>

