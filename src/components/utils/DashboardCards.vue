<template>
  <div class="lg:p-10 p-4">
    <div>
      <h4 class="lg:text-3xl text-xl font-semibold text-center my-5 text-gray-500">
        Total Table/Documents on Database ({{ cards?.length }})
      </h4>
    </div>
    <div v-if="loading" class="flex justify-center items-center bg-blue-500 py-2 gap-2 w-40 mx-auto rounded-lg">
      <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-gray-500" role="status">
      </div>
      <span class="visually-hidden text-2xl text-white">Loading...</span>
    </div>
    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <router-link v-for="(card, index) in cards" :key="index" :to="`/dashboard/${card.name.toLowerCase()}`">
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <div class="p-4">
            <h3 class="text-xl font-semibold mb-2">{{ card.name }}</h3>
            <p class="text-gray-700">Total: {{ card.total }}</p>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      loading: true,
    };
  },
  computed: {
    ...mapState(["cards"]),
  },
  methods: {
    ...mapActions(["getCards"]),
  },
  async created() {
    await this.getCards();
    this.loading = false;
  },
};
</script>

<style scoped>
.spinner-border {
  border-top-color: transparent;
  border-right-color: transparent;
  border-bottom-color: white;
  border-left-color: white;
}
</style>