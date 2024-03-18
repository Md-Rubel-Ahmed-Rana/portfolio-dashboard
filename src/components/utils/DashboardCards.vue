<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-10">
    <router-link v-for="(card, index) in cards" :key="index" :to="`/dashboard/${card.name.toLowerCase()}`">
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <img :src="card.image" alt="Card Image" class="w-full h-40 object-cover">
        <div class="p-4">
          <h3 class="text-xl font-semibold mb-2">{{ card.name }}</h3>
          <p class="text-gray-700">{{ card.total }} Total</p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      cards: []
    };
  },
  async created() {
    try {
      const response = await axios.get('/cards.json');
      this.cards = response.data;
    } catch (error) {
      console.error('Error fetching cards:', error);
    }
  }
};
</script>
