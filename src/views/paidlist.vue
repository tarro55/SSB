<!----------Make By YourName----------------> 
 <template> 
  <div> 
    <v-toolbar card color="orange"> 
      <v-icon @click="$router.push('/indexDrive')">keyboard_arrow_left</v-icon> 
      <v-toolbar-title class="font-weight-light">Paidlist</v-toolbar-title> 
      <v-spacer></v-spacer> 
      <v-btn color="white" fab small @click="isEditing = !isEditing"> 
        <v-icon v-if="isEditing">mdi-close</v-icon> 
        <v-icon v-else>mdi-pencil</v-icon> 
      </v-btn> 
    </v-toolbar> 
 
    <center> 
      <v-flex xs12 class="card-margin"> 
        <v-card class="cardmenu" id="card-center" width="100%" height="100%"> 
          <v-toolbar color="white" class="box"> 
            <v-icon id="left" color="orange" style="font-size:40px">account_circle</v-icon> 
            <h1 id="center">name</h1> 
            <v-card class="payed" id="right"> 
              <v-select :disabled="!isEditing" :items="paidlist" label="Unpayed" solo></v-select> 
            </v-card> 
          </v-toolbar> 
          <v-toolbar color="white" class="box"> 
            <v-icon id="left" color="orange" style="font-size:40px">account_circle</v-icon> 
            <h1 id="center">name</h1> 
            <v-card class="payed" id="right"> 
              <v-select :disabled="!isEditing" :items="paidlist" label="Unpayed" solo></v-select> 
            </v-card> 
          </v-toolbar> 
          <v-toolbar color="white" class="box"> 
            <v-icon id="left" color="orange" style="font-size:40px">account_circle</v-icon> 
            <h1 id="center">name</h1> 
            <v-card class="payed" id="right"> 
              <v-select :disabled="!isEditing" :items="paidlist" label="Unpayed" solo></v-select> 
            </v-card> 
          </v-toolbar> 
        </v-card> 
      </v-flex> 
    </center> 
 
    <v-footer fixed="app"> 
      <v-layout row wrap> 
        <v-flex xs3 @click="$router.push('/indexDrive')"> 
          <v-card 
            id="icon-center" 
            color="orange" 
            width="100%" 
            height="100%" 
            @click="$router.push('/index')" 
          > 
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
    return { 
      hasSaved: false, 
      isEditing: null, 
      model: null, 
      paidlist: ['Payed', 'Unpayed'] 
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
.payed { 
  width: 100px; 
  border-radius: 5px; 
} 
 
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
.card-margin { 
  margin: 5%; 
} 
.cardmenu { 
  border-radius: 10px; 
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