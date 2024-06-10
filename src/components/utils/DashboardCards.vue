<template>
  <div class="p-10">
    <div>
      <h4 class="lg:text-3xl text-xl font-semibold text-center my-5 text-gray-500" >Total Table/Documents on Database ({{ cards?.length }})</h4>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <router-link v-for="(card, index) in cards" :key="index" :to="`/dashboard/${card.name.toLowerCase()}`">
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <div class="p-4">
          <h3 class="text-xl font-semibold mb-2">{{ card.name }}</h3>
          <p class="text-gray-700">Total: {{ card.total }} </p>
        </div>
      </div>
    </router-link>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState(["cards"]),
  },
  methods: {
    ...mapActions(["getCards"]),
  },
  created() {
    this.getCards();
  },
};
</script>
