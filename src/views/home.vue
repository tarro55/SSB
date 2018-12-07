<!----------Make By YourName---------------->
 <template>
    <div>
        <v-toolbar color="orange" class="box">   
    
            <v-toolbar-side-icon>

            </v-toolbar-side-icon>
    
            <v-toolbar-title  >Home</v-toolbar-title>
    
            <v-spacer><el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
             <el-radio-button :label="false">expand</el-radio-button>
            </el-radio-group></v-spacer>   
        </v-toolbar>

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
    /******* Methods default run ******/
    load:async function(){
}
},
    }
</script>