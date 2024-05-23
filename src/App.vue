<template>
  <v-app>
    <v-main style="background-color: #1e2124">
      <DialogForm :controller="controller" />
    </v-main>
  </v-app>
</template>

<script setup>
import DialogForm from "./news/components/dialog-form.vue";
import { newsControllerImpl } from "./news/di/di";

const controller = newsControllerImpl();
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
