<script>
export default {
  name: "UserData",
  computed: {
    userName: {
      get() {
        return this.$store.state.user.name;
      },
      set(value) {
        this.$store.dispatch("setName", value);
      },
    },
  },
};
</script>

<template>
  <div>
    <input v-model="userName" placeholder="Name" />
  </div>
</template>
