<!----------Make By YourName---------------->
 <template>
<div>
    <h1>log in</h1>
    <br>
    <el-input placeholder="Username" v-model="input"></el-input>
    <br><br>
    <el-input placeholder="Password" v-model="input"></el-input>
    <br><br>
    <el-row>
        <v-btn @click="$router.push('/barlogin')" color="orange " class="box shadow" dark round>log in</v-btn>
    </el-row>
    <br><hr><br>
    <p>Don't have account ? <a @click="$router.push('/register')"> &nbsp sign up</a></p>
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