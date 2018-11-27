<!----------Make By YourName---------------->
<template>
    <div>
    
        <v-toolbar class="box-blue">
    
            <v-toolbar-side-icon></v-toolbar-side-icon>
    
            <v-toolbar-title>Title</v-toolbar-title>
    
            <v-spacer></v-spacer>
    
            <v-toolbar-items class="hidden-sm-and-down">
    
                <v-btn flat>Link One</v-btn>
    
                <v-btn flat>Link Two</v-btn>
    
                <v-btn flat>Link Three</v-btn>
    
            </v-toolbar-items>
    
        </v-toolbar>
    
    
    
        <v-container>
    
            <h1>Hair Cut </h1>
    
            <v-btn @click="$router.push('/xx')" class="box-red shadow" dark round>ลูกค้า</v-btn>

            <v-text-field v-model="form.name" name="ชื่อ" label="นามสกุล" id="id"></v-text-field>
            <v-text-field v-model="form.surname" name="ชื่อ" label="นามสกุล" id="id"></v-text-field>
            <v-text-field v-model="form.email" name="ชื่อ" label="นามสกุล" id="id"></v-text-field>
            <v-text-field v-model="form.password" name="ชื่อ" label="นามสกุล" id="id"></v-text-field>
            <v-btn v-if="!update" @click="storeData()" color="success">บันทึก</v-btn>
             <v-btn v-if="update"  @click="updateData()" color="yellow">แก้ไข</v-btn>
            <v-btn v-if="update"  @click="defaultForm()" color="red" dark>ยกเลิก</v-btn>

            <div v-for="user in user">
                <pre>
                    {{user}}
                </pre>
                <v-btn @click="destroyData(users)" color="pink"> ลบ </v-btn>
                <v-btn @click="onUpdate(users)" color="green"> แก้ไข </v-btn>


            </div>


    
        </v-container>
    </div>
</template>

<script>
    import{
        get 
    }from "vuex-pathify"
    export default {
    
        name: 'home',
    
        /*-------------------------Load Component---------------------------------------*/
    
        components: {
    
    
    
        },
    
        /*-------------------------Set Component---------------------------------------*/
    
        props: {
    
    
    
        },
    
        /*-------------------------DataVarible---------------------------------------*/
    
        data() {
    
            return {
                
                form:{},
                update:false,
                
    
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
    
        computed: {
    
    
    
        },
    
        /*-------------------------Methods------------------------------------------*/
    
        methods: {
    
                        onUpdate(params){
                this.form = params;
                this.update = true;
            },

            //getdefault form
            defaultForm() {
                this.form = {};
                this.update = false;
                 this.load();
            },
            //Store data to vuex --post
             storeData: async function () {
                 this.$store.dispatch('user/storeData',this.form);

                 this.defaultForm();
                 this.load();
            },
            //Update data to vuex --put
            updateData: async function () {
                this.$store.dispatch('user/updateData',this.form);

                 this.defaultForm();
                 this.load();
            },
              //Delete data to vuex --delete
            destroyData: async function (params) {
            this.$store.dispatch('user/destroyData',params);

                 this.defaultForm();
                 this.load();
             },
                 
            /******* Methods default run ******/
    
            load: async function() {}
    
        },
    
    }
</script>