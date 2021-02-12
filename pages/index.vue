<template>
  <div class="p-4">
    <div v-if="$fetchState.pending" class="loading">Loading...</div>
    <span v-else-if="$fetchState.error">Error...</span>
    <display-item
      v-else
      v-for="item in items"
      :key="item.id"
      :item="item"
    ></display-item>
  </div>
</template>

<script>
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default {
  async fetch() {
    await delay(3000);
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const json = await response.json();
    console.log("json", json);
    this.items = json;
  },
  data() {
    return {
      items: [],
    };
  },
};
</script>