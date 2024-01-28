<script setup>
import { useRouter, useRoute } from "vue-router";
import UserData from "../components/UserData.vue";
import { useStore } from "vuex";

const router = useRouter();
const route = useRoute();
const store = useStore();
const joinTable = () => {
  store.dispatch("setTableId", route.params.id);
  router.push(`/tables/${route.params.id}`);
};
</script>

<template>
  <div class="container">
    <h1>Pewny Poker</h1>
    <UserData />
    <BButton @click="joinTable"> Join Table </BButton>
  </div>
</template>

<style lang="sass"></style>
