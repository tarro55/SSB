<template>
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
