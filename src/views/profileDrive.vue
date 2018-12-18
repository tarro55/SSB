<!----------Make By YourName---------------->
<template>
  <div>
    <v-toolbar card color="orange">
      <v-icon @click="$router.push('/indexDrive')">keyboard_arrow_left</v-icon>
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
            <v-text-field :disabled="!isEditing" id="id_number" color="white" label="ID Number"></v-text-field>
            <v-text-field
              :disabled="!isEditing"
              id="driver_licence"
              color="white"
              label="Driver Licence"
            ></v-text-field>
            <v-text-field :disabled="!isEditing" id="name" color="white" label="Name"></v-text-field>
            <v-text-field :disabled="!isEditing" id="sex" color="white" label="Sex"></v-text-field>
            <v-flex xs12 lg6>
              <v-menu :disabled="!isEditing"
                ref="menu1"
                :close-on-content-click="false"
                v-model="menu1"
                :nudge-right="40"
                lazy
                transition="scale-transition"
                offset-y
                full-width
                max-width="290px"
                min-width="290px"
              >
                <v-text-field :disabled="!isEditing"
                  slot="activator"
                  v-model="dateFormatted"
                  label="Birthday"
                  persistent-hint
                  prepend-icon="event"
                  @blur="date = parseDate(dateFormatted)"
                ></v-text-field>
                <v-date-picker v-model="date" no-title @input="menu1 = false"></v-date-picker>
              </v-menu>
            </v-flex>
            <v-text-field
              :disabled="!isEditing"
              id="phone_number"
              color="white"
              label="Phone Number"
            ></v-text-field>
            <v-text-field :disabled="!isEditing" id="email" color="white" label="E-mail"></v-text-field>
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

    <!--- Footer MENU -->
    <v-footer fixed="app">
      <v-layout row wrap>
        <v-flex xs3 @click="$router.push('/indexDrive')">
          <v-card id="icon-center" @click="$router.push('/indexDrive')">
            <v-icon id="home">home</v-icon>
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
        <v-flex xs3 >
          <v-card id="icon-center" color="orange">
            <v-icon id="person" color="white">person</v-icon>
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
    return {
      hasSaved: false,
      isEditing: null,
      model: null
    };
  },
  data: vm => ({
    date: new Date().toISOString().substr(0, 10),
    dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
    menu1: false,
  }),
  
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
  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date);
    }
  },
  watch: {
    date(val) {
      this.dateFormatted = this.formatDate(this.date);
    }
  },
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
    },
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${month}/${day}/${year}`;
    },
    parseDate(date) {
      if (!date) return null;

      const [month, day, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
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
#img-center {
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 15px;
}
#icon-center {
  padding-left: 40%;
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

