<template>
  <v-container>
    <v-row class="my-5">
      <v-col cols="12">
        <h2 class="text-h3 mb-4 text-center">Supported Platforms</h2>
      </v-col>
      <v-col cols="12" sm="6" md="3" v-for="platform in platforms" :key="platform.name">
        <v-card class="pa-4" elevation="2">
          <v-img :src="platform.logo" class="mb-2" contain height="50"></v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
// Define the platforms with their names and logo URLs
const platforms = [
  { name: 'Upwork', logo: 'upwork.svg' }, // Ensure you have these images in your static folder
  { name: 'Fiverr', logo: 'fiverr.png' },
  { name: 'Monster', logo: 'monster.png' },
  { name: 'Indeed', logo: 'indeed.png' },
  // Add other platforms here
];
</script>

<style scoped>
/* Styles for the supported platforms section */
</style>
