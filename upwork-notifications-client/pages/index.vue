<template>
  <v-container fluid class="pa-0 fill-height">
    <!-- Hero Section -->
    <v-container class="my-12">
      <v-row align="center">
        <v-col cols="12" offset-md="1" md="6">
          <h2 class="text-h6 font-weight-bold mb-12 text-primary">Accelerate your Job Search</h2>

          <h1 class="text-h3 mb-3">Use AI to find the best jobs for you!</h1>
          <h2 class="text-h3 mb-6 text-primary">From just $5 per month!</h2>
          <v-row>
          <v-text-field variant="solo-filled" rounded dense placeholder="Enter your email"></v-text-field>
          <v-btn size="large" color="primary" class="mt-2 ml-3">Join our waiting list</v-btn>
          </v-row>
        </v-col>
        <v-col cols="12" md="5">
          <v-img src="/test.webp"></v-img>
        </v-col>
      </v-row>
    </v-container>

      <v-card>
      <v-row class="mx-12">
        <v-col cols="12" md="4">
          <v-container class="pa-3">
            <v-card-text class="text-left">
              <v-row><v-col><v-img width="48px" src="/stress.svg" /></v-col>
              <v-col cols="10"><h3 class="text-h4 my-2">Take out the stress</h3>
              <p class="text-body-1">Job searching shouldn't be a full-time job. Let AI handle the search for you!</p></v-col></v-row>
            </v-card-text>
          </v-container>
        </v-col>
        <v-col cols="12" md="4">
          <v-container class="pa-3">
            <v-card-text class="text-left">
              <v-row><v-col><v-icon size="48px" color="primary">mdi-handshake-outline</v-icon>
              </v-col>
                <v-col cols="10"><h3 class="text-h4 my-2">Find exciting jobs</h3>
                  <p class="text-body-1">Land in right role that fits you!</p></v-col></v-row>
            </v-card-text>
          </v-container>
        </v-col>
        <v-col cols="12" md="4">
          <v-container class="pa-3">
            <v-card-text class="text-left">
              <v-row><v-col><v-img width="48px" style="stroke-width: 10px" src="/application.svg" /></v-col>
                <v-col cols="10"><h3 class="text-h4 my-2">Write better applications</h3>
                  <p class="text-body-1">The power of AI helps you while writing your application. We can show you key-points to focus on.</p></v-col></v-row>
            </v-card-text>
          </v-container>
        </v-col>
      </v-row>
      </v-card>

    <platforms-banner/>

    <!-- Call to Action Section -->
    <v-row class="purple darken-2 white--text text-center">
      <v-col cols="12">
        <h2 class="headline mb-3">Ready to find your next freelance job?</h2>
        <v-btn x-large dark color="pink" to="/register">Sign Up Now</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import PlatformsBanner from "~/components/PlatformsBanner.vue";
</script>

<style scoped>
</style>
