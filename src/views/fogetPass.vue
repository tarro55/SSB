<!----------Make By YourName---------------->
 <template>
<div>
    <h1>Forget Password</h1>
    <br>
    <el-input placeholder="E-mail" v-model="input"></el-input>
    <br><br>
    <el-input placeholder="Secunty Number" v-model="input"></el-input>
    <br><br>
    <el-row>
        <el-button type="warning" round>Sent Mail</el-button>
    </el-row>



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