<template>
  <v-app>
    <v-main style="background-color: #282b30;">
      <DialogForm :controller="controller" />
    </v-main>
  </v-app>
</template>

<script setup>
import DialogForm from "./news/components/dialog-form.vue";
import { newsControllerImpl } from "./news/di/di";

const controller = newsControllerImpl();
</script>
