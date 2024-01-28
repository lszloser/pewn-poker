<script>
export default {
  name: "TableComponent",
  components: {
    userForm: require("@/components/UserData.vue").default,
    userVotes: require("@/components/UserVotes.vue").default,
  },
};
</script>

<template>
  <userForm />
  <userVotes />
</template>
