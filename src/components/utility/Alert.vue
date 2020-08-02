<template>
  <div>
    <v-alert type="error" @input="onClose" :value="true" dismissible>{{ text }}</v-alert>
  </div>
</template>

<script>
export default {
  name: "Alert",
  props: ["text"],
  data() {
    return {};
  },
  methods: {
    onClose() {
      this.$emit("dismissed");
    },
  },
};
</script>