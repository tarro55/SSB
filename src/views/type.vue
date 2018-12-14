<!----------Make By YourName---------------->
 <template>
<div>
    <h1>Sing Up</h1>
    <br><br><br>
     <v-icon class="box-blue wh" @click="$router.push('/registerDriver')" style="font-size:175px; border-radius:50%;" >mdi-car </v-icon> 
     <v-icon class="box-blue wh" @click="$router.push('/registerMember')" style="font-size:175px; border-radius:50%;" >mdi-account-supervisor</v-icon>
     
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
    login(){
        alert('อีแฮมอีเหี้ย')
    },
    /******* Methods default run ******/
    load:async function(){
}
},
    }
</script>