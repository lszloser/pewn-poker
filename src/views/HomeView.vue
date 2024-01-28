<script setup>
import { ref } from "vue";
import HelperClass from "./../helpers";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import UserData from "../components/UserData.vue";

const helper = ref(new HelperClass());
const store = useStore();
const router = useRouter();
const createTable = () => {
  const id = helper.value.getUUID4();
  store.dispatch("setTableId", id);
  store.dispatch("initTable");
  router.push(`/tables/${id}`);
};
</script>

<template>
  <div class="container">
    <h1>Pewny Poker</h1>
    <UserData />
    <BButton @click="createTable"> Create Table </BButton>
  </div>
</template>

<style lang="sass"></style>
