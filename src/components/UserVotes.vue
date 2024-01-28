<script>
export default {
  name: "UserVote",
  data: function () {
    return {
      buttons: [
        { caption: "1", state: false },
        { caption: "2", state: false },
        { caption: "3", state: false },
        { caption: "5", state: false },
        { caption: "8", state: false },
        { caption: "13", state: false },
        { caption: "21", state: false },
      ],
    };
  },
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
  methods: {
    handleButton(event) {
      this.buttons.forEach((item) => {
        item.state = false;
      });
      console.log(event.target);
      this.$store.dispatch("setVote", event.target.value);
    },
  },
};
</script>

<template>
  <div class="d-flex align-content-end flex-wrap mb-2 h-75">
    <BButtonGroup size="sm" class="container-xxl">
      <BButton
        squared
        v-for="(btn, idx) in buttons"
        :key="idx"
        v-model:pressed="btn.state"
        v-model:value="btn.caption"
        @click="handleButton"
        variant="outline-secondary"
        class="px-2 py-5 m-4 fs-2"
      >
        {{ btn.caption }}
      </BButton>
    </BButtonGroup>
  </div>
</template>
