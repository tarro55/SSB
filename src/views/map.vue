<template>
<div>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-toolbar class="bg-title-map">
          <v-toolbar-side-icon></v-toolbar-side-icon>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>search</v-icon>
          </v-btn>
        </v-toolbar>
      </v-card>
    </v-flex>
  </v-layout>


  <v-footer fixed="app">
      <v-layout row wrap>
        <v-flex xs3 @click="$router.push('/indexDrive')">
          <v-card id="icon-center" width="100%" height="100%" @click="$router.push('/index')">
            <v-icon id="home">home</v-icon>
          </v-card>
        </v-flex>
        <v-flex xs3 @click="$router.push('/map')">
          <v-card id="icon-center" @click="$router.push('/map')" color="orange">
            <v-icon id="place" color="white">place</v-icon>
          </v-card>
        </v-flex>
        <v-flex xs3 @click="$router.push('/statusDrive')">
          <v-card id="icon-center" @click="$router.push('/statusDrive')" >
            <v-icon id="status" >departure_board</v-icon>
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
    
}
</script>

<style scoped>

.bg-title-map{
    height: 100px;
    background: linear-gradient(180deg, #FF8A00 0%, rgba(255, 161, 51, 0.563536) 68.51%, rgba(255, 172, 75, 0) 100%);
}
</style>
