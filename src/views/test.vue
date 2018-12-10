<!----------Make By YourName---------------->
 <template>
  <div>
    <h1>Hello</h1>
    <v-text-field 
    label="name"
    v-model="form.name"
    ></v-text-field>
    <v-text-field 
    label="surname"
    v-model="form.surname"
    ></v-text-field>
    <v-btn @click="storeData()" color="success">Save</v-btn>

    <pre>{{test}}</pre>
  </div>
</template>

    <script>
import { get } from "vuex-pathify";
export default {
  name: "Root",
  /*-------------------------Load Component---------------------------------------*/
  components: {},
  /*-------------------------Set Component---------------------------------------*/
  props: {},
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
    next();
  },
  /*-------------------------Vuex Methods and Couputed Methods------------------------------------------*/
  computed: {
      test:get('test/test')
  },
  /*-------------------------Methods------------------------------------------*/
  methods: {

       //Open Modal method for set data when update
       onUpdateModal(params) { 
      
      },
      //Open Modal method for add data
      onModal() {
      
      },
      //Close Modal and reload data
      offModal() {
      
      }, 
      //getdefault form
      defaultForm() {
          this.form = {};
      },
      //Store data to vuex --post
       storeData: async function () {
           this.$store.dispatch('test/storeData',this.form);
           this.defaultForm();
           this.load();
      },
      //Update data to vuex --put
      updateData: async function () {
      
      },
        //Delete data to vuex --delete
      destroyData: async function (params) {
      
       },

    /******* Methods default run ******/
    load: async function() {
      this.$store.dispatch("test/getData");
    }
  }
};
</script>